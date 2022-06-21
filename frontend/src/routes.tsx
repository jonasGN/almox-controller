import { Route, Routes } from "react-router-dom";

// pages
import { AddNewItemPage } from "./pages/AddNewItem";
import { EditItemPage } from "./pages/EditItem";
import { ItemRequestsPage } from "./pages/ItemRequests";
import { ItemsPage } from "./pages/Items";

export const routes = Object.freeze({
  home: "/",
  items: "/items",
  newItem: "/items/new",
  editItem: "/items/edit",
  itemRequests: "/items/requests",
});

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.items} element={<ItemsPage />} />
      <Route path={routes.newItem} element={<AddNewItemPage />} />
      <Route path={routes.itemRequests} element={<ItemRequestsPage />} />
      <Route path={routes.editItem} element={<EditItemPage />} />
    </Routes>
  );
}
