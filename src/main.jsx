import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./PROJECTS/E-CommerceMiniStore/redux/store";
import "./PROJECTS/E-CommerceMiniStore/index.css";
import App from "./PROJECTS/E-CommerceMiniStore/App";
import { ThemeProvider } from "./PROJECTS/E-CommerceMiniStore/context/ThemeContext";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

{/* 
// this is for cartify project which is working properly

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./PROJECTS/Cartify/store";
import App from "./PROJECTS/Cartify/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

*/}



{/* 
// this is for ecommerce mini store which is not working properly
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./Practice/E-CommerceMiniStore/App";
import store from "./Practice/E-CommerceMiniStore/redux/store";
import { ThemeProvider } from "./Practice/E-CommerceMiniStore/context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
*/}