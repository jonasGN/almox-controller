import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { fakeServer } from "./services/fakeserver";
import { Header } from "./components/Header";

import "./styles/globals.scss";
import "./styles/font-sizes.scss";

fakeServer.init();

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}
