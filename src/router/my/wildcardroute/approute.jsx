import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About from "./about";
import NotFound from "./404";

    const Approuter = createBrowserRouter(
      createRoutesFromElements(
        
       <Route path="/" element={<Layout />} >
         <Route index element={<Home/>}/>
           <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
           </Route>


      )
    )
  export default Approuter