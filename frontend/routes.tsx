import { Route, Routes as Switch } from "react-router-dom";

// pages
import AddNewItem from "./src/pages/AddNewItem";
import EditItem from "./src/pages/EditItem";
import ItemRequests from "./src/pages/ItemRequests";
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
      <Route path={routes.itemRequests} element={<ItemRequests />} />
      <Route path={routes.editItem} element={<EditItem />} />
    </Switch>
  );
}
