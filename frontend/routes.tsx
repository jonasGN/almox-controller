import { Route, Routes as Switch } from "react-router-dom";

import AddNewItem from "./src/pages/AddNewItem";
import Items from "./src/pages/Items";

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
      <Route path={routes.items} element={<Items />} />
      <Route path={routes.newItem} element={<AddNewItem />} />
    </Switch>
  );
}
