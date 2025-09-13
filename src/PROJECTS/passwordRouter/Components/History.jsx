import React from "react";
import { usePassword } from "../context/PasswordContext";

export default function History() {
  const { history, clearHistory, deletePassword } = usePassword();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied ✅");
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this password?");
    if (confirmDelete) {
      deletePassword(index);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Password History</h2>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Clear All
          </button>
        )}
      </div>
      <ul className="space-y-2">
        {history.length === 0 ? (
          <li className="text-gray-500">No history yet</li>
        ) : (
          history.map((pass, i) => (
            <li
              key={i}
              className="flex justify-between items-center px-2 py-1 bg-gray-100 rounded-md"
            >
              <span className="truncate">{pass}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopy(pass)}
                  className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Copy
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
