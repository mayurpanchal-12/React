import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(product));
    alert("Added to cart!");
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={product.image} alt={product.name} className="mb-2 w-full" />
      <h2 className="font-semibold">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={handleAdd}
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
}
