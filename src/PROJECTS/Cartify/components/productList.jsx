
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

import shirt from '../images/shirt.jpg';
import tshirt from '../images/tshirt.jpg';
import jeans from '../images/jeans.jpg';
import earphones from '../images/earphone.jpg';
import smartWatch from '../images/smartwatch.jpg';
import laptop from '../images/laptop.jpg';

const products = [
  {id: 1, name: "Shirt", price: 100, img: shirt},
  {id: 2, name: "T-Shirt", price: 200, img: tshirt},
  {id: 3, name: "Jeans", price: 300, img: jeans},
  {id: 4, name: "Earphones", price: 400, img: earphones},
  {id: 5, name: "Smart Watch", price: 500, img: smartWatch},
  {id: 6, name: "Laptop", price: 600, img: laptop}
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-2 rounded">
          {product.img && (
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-40 object-cover mb-2 rounded"
            />
          )}
          <h3 className="font-bold">{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button 
            onClick={() => dispatch(addToCart(product))} 
            className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
