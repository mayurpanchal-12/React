import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center border p-3 rounded-md">
      <span>{item.name} × {item.qty}</span>
      <span>₹{item.price * item.qty}</span>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="px-3 py-1 bg-red-600 text-white rounded-md"
      >
        Remove
      </button>
    </div>
  );
}
