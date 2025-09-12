import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Drp from "./drp";

const Approuter = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout />} >
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>} />
    <Route path="contact/:param" element={<Contact />}/>
    
    <Route path="/new/:param" element={<Drp />}/>
    {/* for above go to home page and give url as above */}

    </Route>


  )
);
export default Approuter