import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CompA from "./CompA";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompA></CompA>
    <CompD></CompD>
  </StrictMode>
);
