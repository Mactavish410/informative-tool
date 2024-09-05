import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Normalize } from "styled-normalize";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Normalize />
    <App />
  </StrictMode>
);
