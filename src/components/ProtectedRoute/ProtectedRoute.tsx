import { FullScreenLoader } from "../FullScreenLoader";
import { useProtectedRoute } from "./hooks/useProtectedRoute";

interface IProtectedRoute {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const { signed } = useProtectedRoute();

  return signed ? <>{children}</> : <FullScreenLoader />;
};
