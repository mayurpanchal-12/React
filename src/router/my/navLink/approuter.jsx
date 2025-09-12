import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      {/* 
        - Layout is the parent component.
        - In Layout we included Navbar + <Outlet/>.
        - So Navbar is always visible, and the Outlet will load
          whichever child route is active.
      */}

      <Route index element={<Home />} />  
      {/* 
        - "index" means this is the default child route.
        - When app loads at "/", Home will render below the Navbar.
      */}

      <Route path="/about" element={<About />} />
      {/* 
        - Clicking "About" link in Navbar navigates to "/about".
        - Because Navbar's <NavLink to="/about" /> matches this path,
          the About component will render in the Outlet.
      */}

      <Route path="/contact" element={<Contact />} />
      {/* 
        - Same as About: clicking "Contact" in Navbar loads Contact page.
      */}
    </Route>
  )
);

export default Approuter;
