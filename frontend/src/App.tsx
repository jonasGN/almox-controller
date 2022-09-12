import { AuthProvider } from "./context/AuthProvider";
import { QueryProvider } from "./context/QueryProvider";
import { AppRoutes, BrowserRouter } from "./routes";
import { initFakeServer } from "./services/miragejs";

import "./styles/globals.scss";

// init fake api
initFakeServer();

function App() {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  );
}

export default App;
