//all routes

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./home";
import Layout from "./layout";
import About from "./about";
import Posts from "./post";
import PostDetail from "./postdetails";
import NotFound from "./notfound";
import User from "./useparam";




const Approuter = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element= {<Layout/>}>  {/*main component where outlet is present*/}
        <Route index element = {<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="posts" element= {<Posts />} />
        <Route path="post/:postid" element={<PostDetail />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="*" element = {<NotFound />} />

    


     </Route>


   )

);
export default Approuter