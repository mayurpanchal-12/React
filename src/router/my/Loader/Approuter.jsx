import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./home"
import About from "./about"
import Github, { githubapi } from "./github"

const Approuter=createBrowserRouter(
   createRoutesFromElements(
   <Route path="/" element ={<Layout />}>
     <Route index element = {<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/github"
       loader={githubapi}
     element={<Github />} />



   </Route>


   )
  );
export default Approuter;