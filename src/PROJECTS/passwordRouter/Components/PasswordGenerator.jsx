import React from "react";
import { usePassword } from "../context/PasswordContext";

export default function PassGen() {
  const {
    currentPass,
    copyPassword,
    passlength,
    setPasslength,
    char,
    setChar,
    num,
    setNum,
    strength,
    history
  } = usePassword();

  const getColor = () => {
    if (strength === "Weak") return "bg-red-500";
    if (strength === "Medium") return "bg-yellow-500";
    return "bg-green-500";
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied ✅");
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">🔑 Password Generator</h1>

      {/* Password Options */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Password Length: {passlength}</label>
        <input
          type="range"
          min={4} max={32}
          value={passlength}
          onChange={(e) => setPasslength(Number(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer"
        />
      </div>

      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={char} onChange={() => setChar(!char)} className="h-4 w-4 text-blue-600"/>
          Include Letters
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={num} onChange={() => setNum(!num)} className="h-4 w-4 text-blue-600"/>
          Include Numbers
        </label>
      </div>

      {/* Main Password Display */}
      <div className="flex items-center justify-between mb-4 p-3 bg-amber-100 rounded-md">
        <p className="font-mono truncate">{currentPass}</p>
        <button onClick={copyPassword} className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200">
          Copy
        </button>
      </div>

      {/* Strength Badge */}
      <span className={`text-white px-3 py-1 rounded ${getColor()}`}>Strength: {strength}</span>

      {/* Recent Passwords */}
      <div className="mt-6">
        <h2 className="font-semibold mb-2">Recent Passwords</h2>
        <ul className="space-y-2">
          {history.length === 0 ? (
            <li className="text-gray-500">No history yet</li>
          ) : (
            history.map((pass, i) => (
              <li key={i} className="flex justify-between items-center px-2 py-1 bg-gray-100 rounded-md">
                <span className="truncate">{pass}</span>
                <button
                  onClick={() => handleCopy(pass)}
                  className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Copy
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
