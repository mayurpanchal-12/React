import React from "react";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price = 0, quantity = 0 } = item;

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Price: ₹{Number(price)}</p>
      <p>Quantity: {Number(quantity)}</p>
      <p>Total: ₹{Number(price) * Number(quantity)}</p>

      <button onClick={() => dispatch(increaseQty(id))}>+</button>
      <button onClick={() => dispatch(decreaseQty(id))}>-</button>
      <button onClick={() => dispatch(removeItem(id))}>Remove</button>
    </div>
  );
};

export default CartItem;
