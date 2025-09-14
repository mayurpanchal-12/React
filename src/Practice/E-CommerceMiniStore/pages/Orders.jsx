import { useSelector } from "react-redux";

export default function Orders() {
  const orders = useSelector((state) => state.orders.orders);

  if (!orders || orders.length === 0) {
    return <p className="p-4 text-center text-gray-500">No orders yet.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.map((order, index) => {
        const items = Array.isArray(order) ? order : [order]; // ✅ safe wrap
        return (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-2"
          >
            <h3 className="font-semibold">Order #{index + 1}</h3>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-gray-200 py-2"
              >
                <span>{item.name}</span>
                <span>₹{item.price} × {item.quantity}</span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
