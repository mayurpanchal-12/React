import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { addOrder } from "../redux/orderSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    dispatch(addOrder({ items: cartItems, total, date: new Date().toLocaleString() }));
    alert("Order placed!");
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <h3>Total: ${total}</h3>
      <button onClick={handlePlaceOrder} disabled={cartItems.length === 0}>
        Place Order
      </button>
    </div>
  );
}
