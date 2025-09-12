import { NavLink } from "react-router-dom";

export default function Navbar(){

  return(
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      {/* we created above two component but not created below component */}

      <NavLink to="/contact">Contact</NavLink>
      {/* above component not availbile so for that page we will use path="*" component */}
    </>
  )
}