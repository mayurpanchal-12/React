import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Lay from "./Layout";
import Contact from "./contact";
import User from "./param";
import Hello from "./hello";
import Err from "./404";
import Git, { githubapi } from "./loader";

const Approuter = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Lay />}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="contact/:id" element={<User />}/>
    <Route path="about/:fg" element={<Hello />} />
    <Route path="*" element={<Err />} />
    <Route path="/github" 
                loader={githubapi}
                element ={<Git />} />

    </Route>
    
    
    </>
  )
);
export default Approuter