import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Paths } from "./paths";

import { SignInPage } from "../pages/SignIn";
import { NotFoundPage } from "../pages/NotFound";
import { CatalogPage } from "../pages/Catalog";

export { BrowserRouter, Paths };

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Paths.ROOT} element={<SignInPage />} />
      <Route path={Paths.ITEMS} element={<CatalogPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
