import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium"
      : "text-gray-700 hover:text-blue-600 px-3 py-2";

  return (
    <nav className="flex bg-gray-100 p-4 shadow-md">
      <NavLink to="/" className={linkClass}>Generator</NavLink>
      <NavLink to="/history" className={linkClass}>History</NavLink>
      <NavLink to="/settings" className={linkClass}>Settings</NavLink>
    </nav>
  );
}
