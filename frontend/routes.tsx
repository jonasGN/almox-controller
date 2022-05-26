import { Route, Routes as Switch } from "react-router-dom";

import Home from "./src/pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  );
}
