import { useDispatch } from "react-redux";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { clearUser, setUser } from "../../../redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import * as PATHS from "../../../routes/paths";
import { IUser } from "../../../interfaces";

interface IUseLogin {
  signed: boolean;
}

export const useProtectedRoute = (): IUseLogin => {
  const [signed, setSigned] = useState<boolean>(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      handleNavigate(firebaseUser);

      if (firebaseUser) {
        dispatch(setUser(firebaseUser));
        setSigned(true);
        return;
      }

      dispatch(clearUser());
      setSigned(false);
    });

    return () => unsubscribe();
  }, [location.pathname]);

  function handleNavigate(user: IUser | null): void {
    if (!user) {
      navigate(PATHS.AUTH.LOGIN);
      return;
    }

    if (!user.emailVerified) {
      navigate(PATHS.AUTH.VERIFICATION);
      return;
    }

    if (!user.displayName) {
      navigate(PATHS.AUTH.INFO);
      return;
    }

    const { pathname } = location;

    if (pathname === PATHS.AUTH.VERIFICATION || pathname === PATHS.AUTH.INFO) {
      navigate(PATHS.DASHBOARD.LIST);
    }
  }

  return {
    signed,
  };
};
