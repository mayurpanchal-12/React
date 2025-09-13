import React from "react";
import { usePassword } from "../context/PasswordContext";

export default function Settings() {
  const { passlength, setPasslength, char, setChar, num, setNum } = usePassword();

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div className="mb-4">
        <label className="block mb-2">Default Password Length: {passlength}</label>
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

      {!char && !num && <p className="text-red-500 text-sm">Select at least one option!</p>}
    </div>
  );
}
