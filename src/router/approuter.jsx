
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Index from ".";
import Home from "./home";
import About from "./about";
import Contact from "./contactus";
import User from "./user";
import GitHub, { githubinfoloader } from "./github";


const Approute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Index/>}>
       <Route  index element={<Home />} />
       <Route  path="about" element={<About />} />
       <Route  path="contactus" element={<Contact />} />
       <Route  path="user/:userid" element={<User />} />
       <Route 
        path="github"
         loader={githubinfoloader}
        element={<GitHub />} />
       

    </Route>

  )
)

export default Approute;