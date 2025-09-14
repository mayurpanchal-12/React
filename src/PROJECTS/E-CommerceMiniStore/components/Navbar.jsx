import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
      <Link to="/history">Orders</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}
