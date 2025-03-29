import { HashRouter, Routes, Route } from "react-router-dom";
import * as PATHS from "./paths";
import { PageLayout } from "../layouts/PageLayout/PageLayout";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Page3 } from "../pages/Page3";
import { Dashboard } from "../pages/Dashboard";
import { Route1, Route2 } from "../pages/News";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <PageLayout>
        <Routes>
          <Route path={PATHS.DASHBOARD.LIST} element={<Dashboard />} />
          <Route path={PATHS.PAGE_1.LIST} element={<Page1 />} />
          <Route path={PATHS.PAGE_2.LIST} element={<Page2 />} />
          <Route path={PATHS.PAGE_3.LIST} element={<Page3 />} />
          <Route path={PATHS.NEWS.LIST} element={<Route1 />} />
          <Route path={PATHS.NEWS.LIST_2} element={<Route2 />} />
        </Routes>
      </PageLayout>
    </HashRouter>
  );
};
