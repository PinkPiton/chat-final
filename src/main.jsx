import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./output.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NextUIProvider>
);
