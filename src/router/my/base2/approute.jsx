import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Navbar from "./navbar";
import Layout from "./layout";


// no outlet and layout
const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <> 
    {/* i created navbar that holds link of all pages thai are created ; this pages will be route so i add them in navbar here rote path ="/ " and element navbar so navbar page apears as main page  */}
   <Route path="/" element={<Layout />}> 
   {/* 1st shows layout ; so navbae always visible */}
    <Route index element = {<Home />} />
    {/* instead of path there is index so this is main component below home page */}

    <Route path="about" element={<About />} />

   
   </Route>
    </>
  )
);
export default Approuter