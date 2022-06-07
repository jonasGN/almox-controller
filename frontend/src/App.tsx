import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Routes } from "../routes";
import { initFakeServer } from "./services/miragejs/fake-server";

import "./styles/globals.scss";
import "./styles/font-sizes.scss";

initFakeServer();

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
