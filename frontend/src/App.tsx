import { AuthProvider } from "./context/AuthProvider";
import { AppRoutes, BrowserRouter } from "./routes";
import { createFakeServer } from "./services/miragejs";

import "./styles/globals.scss";

// init fake api
if (import.meta.env.DEV) createFakeServer();

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
