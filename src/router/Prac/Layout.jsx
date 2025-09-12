import { Outlet } from "react-router-dom";
import Nav from "./navbar";

export default function Lay(){
  return(
    <>
       <Nav />
       <Outlet />
    
    </>
  )
}