import { Outlet } from "react-router-dom";
import Header from "./header";

//layout says which part is routing
function Layout(){


  return(
     <>
       <Header/>
       <Outlet/>
     </>

  )
}
export default Layout;