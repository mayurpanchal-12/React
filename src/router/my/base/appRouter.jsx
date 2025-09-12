import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./about"; // About page component
import Home from "./home"; // Home page component

const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Route for Home page -> when URL is "/" */}
      <Route path="/" element={<Home />} />

      {/* Route for About page -> when URL is "/about" */}
      {/* These routes are not nested, so About will replace Home */}
      {/* so we need to remeber url evevrytime so we just add this in saprate page (nabar) */}
      <Route path="/about" element={<About />} />
    </>
  )
);

export default Approuter;
