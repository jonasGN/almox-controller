import { AppRoutes, BrowserRouter } from "./routes";
import { createFakeServer } from "./services/miragejs";

import "./styles/globals.scss";

// init fake api
if (import.meta.env.DEV) createFakeServer();

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
