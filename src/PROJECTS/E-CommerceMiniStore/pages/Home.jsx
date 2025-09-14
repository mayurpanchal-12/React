import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const products = [
  { id: 1, name: "shirt", price: 50 },
  { id: 2, name: "tshirt", price: 100 },
];

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (!product.id || !product.price) {
      console.warn("Invalid product:", product);
      return;
    }
    dispatch(addItem(product));
  };

  return (
    <div className="products-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
