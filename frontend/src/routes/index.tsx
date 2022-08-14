import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Paths } from "./paths";

import { SignInPage } from "../pages/SignIn";
import { NotFoundPage } from "../pages/NotFound";

export { BrowserRouter, Paths };

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Paths.ROOT} element={<SignInPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
