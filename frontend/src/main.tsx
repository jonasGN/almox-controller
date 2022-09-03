import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container!);

// when javascript is disabled the `data-js` will be in the html element
const htmlElement = document.querySelector("html");
htmlElement?.removeAttribute("data-js");

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
