import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/productList";
import CartPage from "./components/CartPage";

export default function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <CartPage />
    </div>
  );
}
