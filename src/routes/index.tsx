import { HashRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import * as PATHS from "./paths";
import { PageLayout } from "../layouts/PageLayout/PageLayout";
import { Dashboard } from "../pages/Dashboard";
import {
  CreateAccount,
  Login,
  PersonalInfo,
  Verification,
} from "../pages/Auth";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { About } from "../pages/About";
import { Products } from "../pages/Products";
import { Settings } from "../pages/Settings/Settings";

const LayoutWrapper = () => (
  <PageLayout>
    <Outlet />
  </PageLayout>
);

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={PATHS.AUTH.LOGIN} element={<Login />} />
        <Route path={PATHS.AUTH.CREATE} element={<CreateAccount />} />
        <Route
          path={PATHS.AUTH.VERIFICATION}
          element={
            <ProtectedRoute>
              <Verification />
            </ProtectedRoute>
          }
        />
        <Route
          path={PATHS.AUTH.INFO}
          element={
            <ProtectedRoute>
              <PersonalInfo />
            </ProtectedRoute>
          }
        />

        <Route element={<LayoutWrapper />}>
          <Route
            path={PATHS.DASHBOARD.LIST}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path={PATHS.PRODUCTS.LIST}
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />

          <Route
            path={PATHS.ABOUT.LIST}
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path={PATHS.SETTINGS.LIST}
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to={PATHS.DASHBOARD.LIST} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
