import { NavLink } from "react-router-dom";

export default function Navbar(){
  return(
    <>
      <NavLink to="/"
       className={({isActive})=>{
          return `px-3 py-2 rounded-md font-medium transition-colors 
          ${isActive ? "text-orange-700 bg-orange-100" : "text-gray-700 hover:text-orange-600"}`
        }}
      >home</NavLink>
     <NavLink to="/about"
       className={({isActive})=>{
        return `${isActive ? "text-orange-700 bg-orange-100":"text-gray-700 hover:text-orange-600"}`
       }}
     >About</NavLink>   
      <NavLink to="/contact"
       className={({isActive})=>{
        return `${isActive ? "text-orange-700 bg-orange-100":"text-gray-700 hover:text-orange-600"}`
       }}
     >contact</NavLink>   
</>
  )
}