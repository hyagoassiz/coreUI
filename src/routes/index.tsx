import { HashRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import * as PATHS from "./paths";
import { PageLayout } from "../layouts/PageLayout/PageLayout";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { LoginRoute } from "../pages/Auth/Login";
import { CreateAccountRoute } from "../pages/Auth/CreateAccount";
import { VerificationRoute } from "../pages/Auth/Verification";
import { PersonalInfoRoute } from "../pages/Auth/PersonalInfo";
import { DashboardRoute } from "../pages/Dashboard/List";
import { ProductsRoute } from "../pages/Products/List";
import { AboutRoute } from "../pages/About/List";
import { SettingsRoute } from "../pages/Settings/List";
import { SalesRoute } from "../pages/Sales";

const LayoutWrapper = () => (
  <PageLayout>
    <Outlet />
  </PageLayout>
);

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={PATHS.AUTH.LOGIN} element={<LoginRoute />} />
        <Route path={PATHS.AUTH.CREATE} element={<CreateAccountRoute />} />
        <Route
          path={PATHS.AUTH.VERIFICATION}
          element={
            <ProtectedRoute>
              <VerificationRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path={PATHS.AUTH.INFO}
          element={
            <ProtectedRoute>
              <PersonalInfoRoute />
            </ProtectedRoute>
          }
        />

        <Route element={<LayoutWrapper />}>
          <Route
            path={PATHS.DASHBOARD.LIST}
            element={
              <ProtectedRoute>
                <DashboardRoute />
              </ProtectedRoute>
            }
          />

          <Route
            path={PATHS.SALES.LIST}
            element={
              <ProtectedRoute>
                <SalesRoute />
              </ProtectedRoute>
            }
          />

          <Route
            path={PATHS.PRODUCTS.LIST}
            element={
              <ProtectedRoute>
                <ProductsRoute />
              </ProtectedRoute>
            }
          />

          <Route
            path={PATHS.ABOUT.LIST}
            element={
              <ProtectedRoute>
                <AboutRoute />
              </ProtectedRoute>
            }
          />

          <Route
            path={PATHS.SETTINGS.LIST}
            element={
              <ProtectedRoute>
                <SettingsRoute />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to={PATHS.DASHBOARD.LIST} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
