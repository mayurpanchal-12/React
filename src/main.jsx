import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";


import App from "./Cotext  Api/projects/app";





createRoot(document.getElementById("root")).render(
  <StrictMode>
   
  <App />
 
  </StrictMode>
);
