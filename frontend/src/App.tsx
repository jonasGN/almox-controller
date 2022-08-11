import { AppRoutes, BrowserRouter } from "./routes";

import "./styles/globals.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
