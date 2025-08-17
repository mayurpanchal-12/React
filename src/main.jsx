import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Imp from "./currency/imp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Imp />
  </StrictMode>
);
