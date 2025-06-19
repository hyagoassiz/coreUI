import { FullScreenLoader } from "../FullScreenLoader";
import { useProtectedRoute } from "./hooks/useProtectedRoute";

interface IProtectedRoute {
  children: React.ReactNode;
  permission: string;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({
  children,
  permission,
}) => {
  const { signed } = useProtectedRoute({ permission });

  return signed ? <>{children}</> : <FullScreenLoader />;
};
