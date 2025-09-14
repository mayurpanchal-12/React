import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../features/cartSlice";

export default function CartPage() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  if(cart.length === 0) return <p className="p-4">Your cart is empty.</p>;

  return (
    <div className="p-4">
      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-2 p-2 bg-gray-200 rounded">
          <div>
            <h2 className="font-bold">{item.name}</h2>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.qty}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => dispatch(incrementQty(item.id))} className="bg-green-500 text-white px-2 rounded">+</button>
            <button onClick={() => dispatch(decrementQty(item.id))} className="bg-yellow-500 text-white px-2 rounded">-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 text-white px-2 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
