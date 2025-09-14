import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="font-bold text-lg">🛍 MiniStore</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cart.length})
        </Link>
        <Link to="/orders" className="hover:underline">Orders</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
      </div>
    </nav>
  );
}
