import { HashRouter, Routes, Route } from "react-router-dom";
import * as PATHS from "./paths";
import { Pizzaria } from "../pages/Solicitacao";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={PATHS.SOLICITACAO.LIST} element={<Pizzaria />} />
      </Routes>
    </HashRouter>
  );
};
