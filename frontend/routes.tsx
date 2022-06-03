import { Route, Routes as Switch } from "react-router-dom";

import AddNewItem from "./src/pages/AddNewItem";
import Home from "./src/pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/add-new-item" element={<AddNewItem />} />
    </Switch>
  );
}
