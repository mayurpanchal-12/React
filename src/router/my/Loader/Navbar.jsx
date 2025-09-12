import { NavLink } from "react-router-dom";

export default function Navbar(){
  return(
    <>
     <NavLink to="/">home</NavLink>
     <NavLink to="/about">About</NavLink>
     <NavLink to="/github" >Github</NavLink>
    </>
  )
}