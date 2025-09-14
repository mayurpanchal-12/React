import React from "react";
import { useSelector } from "react-redux";

export default function History() {
  const orders = useSelector((state) => state.orders.history);

  return (
    <div className="history-page">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
