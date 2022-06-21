import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { initFakeServer } from "./services/miragejs/fake-server";
import { Header } from "./components/Header";

import "./styles/globals.scss";
import "./styles/font-sizes.scss";

initFakeServer();

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}
