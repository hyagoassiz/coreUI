import { HashRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import * as PATHS from "./paths";
import { PageLayout } from "../layouts/PageLayout/PageLayout";
import { Page1 } from "../pages/Page1";
import { Dashboard } from "../pages/Dashboard";
import { Route1, Route2 } from "../pages/News";
import {
  CreateAccount,
  Login,
  PersonalInfo,
  Verification,
} from "../pages/Auth";

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
        <Route path={PATHS.AUTH.VERIFICATION} element={<Verification />} />
        <Route path={PATHS.AUTH.INFO} element={<PersonalInfo />} />

        <Route element={<LayoutWrapper />}>
          <Route path={PATHS.DASHBOARD.LIST} element={<Dashboard />} />
          <Route path={PATHS.PAGE_1.LIST} element={<Page1 />} />
          <Route path={PATHS.NEWS.LIST} element={<Route1 />} />
          <Route path={PATHS.NEWS.LIST_2} element={<Route2 />} />
          <Route path="*" element={<Navigate to={PATHS.DASHBOARD.LIST} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
