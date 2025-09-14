import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";
import { addOrder } from "../redux/orderSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }
    dispatch(addOrder(cartItems)); // send whole array
    dispatch(clearCart());
    alert("Order placed successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button
            onClick={handlePlaceOrder}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
