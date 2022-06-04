import { Route, Routes as Switch } from "react-router-dom";

import AddNewItem from "./src/pages/AddNewItem";
import Home from "./src/pages/Home";

export const routes = Object.freeze({
  home: "/",
  items: "/items",
  newItem: "/items/new",
  editItem: "/items/edit",
  itemRequests: "/items/requests",
});

export function Routes() {
  return (
    <Switch>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.newItem} element={<AddNewItem />} />
    </Switch>
  );
}
