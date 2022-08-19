import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Paths } from "./paths";

import { SignInPage } from "../pages/SignIn";
import { NotFoundPage } from "../pages/NotFound";
import { CatalogPage } from "../pages/Catalog";
import { ItemDetailsPage } from "../pages/ItemDetails";
import { PageContainer } from "../layout/PageContainer";

export { BrowserRouter, Paths };

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Paths.ROOT} element={<SignInPage />} />

      <Route path={Paths.DASHBOARD} element={<PageContainer />}>
        <Route path={Paths.ITEMS} element={<CatalogPage />} />
        <Route path={`${Paths.ITEMS}/:itemId`} element={<ItemDetailsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
