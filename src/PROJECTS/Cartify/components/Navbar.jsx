import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector(state => state.cart.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="bg-gray-100 p-4 flex justify-between">
      <h1 className="text-xl font-bold">Cartify</h1>
      <div>
        Cart Items: <span className="font-semibold">{totalItems}</span>
      </div>
    </nav>
  );
}
