import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Paths } from "./paths";
import { SignInPage } from "../pages/SignIn";

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Paths.ROOT} element={<SignInPage />}></Route>
    </Routes>
  );
};

export { BrowserRouter, Paths };
