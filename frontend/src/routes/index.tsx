import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Paths } from "./paths";
import { ProtectedRoutes } from "./ProtectedRoutes";

// layouts
import { AppLayout } from "../layout";

// pages
import { SignInPage } from "../pages/SignIn";
import { NotFoundPage } from "../pages/NotFound";
import { CatalogPage } from "../pages/Catalog";
import { ItemDetailsPage } from "../pages/ItemDetails";
import { ItemRequestsPage } from "../pages/ItemRequests";
import { ItemRequestDetailsPage } from "../pages/ItemRequestDetails";
import { PersistLogin } from "./PersistLogin";

export { BrowserRouter, Paths };

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<SignInPage />} />

      <Route element={<PersistLogin />}>
        <Route element={<ProtectedRoutes />}>
          <Route path={Paths.DASHBOARD} element={<AppLayout />}>
            <Route path={Paths.ITEMS} element={<CatalogPage />} />
            <Route path={Paths.ITEMS_REQUESTS} element={<ItemRequestsPage />} />
            <Route
              path={`${Paths.ITEMS_REQUESTS}/:requestId`}
              element={<ItemRequestDetailsPage />}
            />
            <Route path={`${Paths.ITEMS}/:itemId`} element={<ItemDetailsPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
