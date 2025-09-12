import { NavLink } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="bg-gray-100 shadow-md p-4 flex gap-6">
      {/* 
        - NavLink is used to create navigation links.
        - The "to" prop defines the path to navigate.
        - That path must also exist in Approuter as a <Route>. and same path as to 
        for that component
        - When we click a link, React Router updates the URL and 
          renders the component for that path.
      */}

      {/* 
        - NavLink provides an "isActive" property.
        - We can use isActive to style the currently active link 
          (example: orange for active, gray for inactive).
        - Here, Tailwind classes are used for styling.
      */}

      <NavLink 
        to="/" 
        className={({isActive})=>{
          return `px-3 py-2 rounded-md font-medium transition-colors 
          ${isActive ? "text-orange-700 bg-orange-100" : "text-gray-700 hover:text-orange-600"}`
        }}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({isActive})=>{
          return `px-3 py-2 rounded-md font-medium transition-colors 
          ${isActive ? "text-orange-700 bg-orange-100" : "text-gray-700 hover:text-orange-600"}`
        }}
      >
        About
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({isActive})=>{
          return `px-3 py-2 rounded-md font-medium transition-colors 
          ${isActive ? "text-orange-700 bg-orange-100" : "text-gray-700 hover:text-orange-600"}`
        }}
      >
        Contact
      </NavLink>
    </nav>
  )
}
