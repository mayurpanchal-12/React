import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`settings ${theme}`}>
      <h2>Settings</h2>
      <button onClick={toggleTheme}>Toggle Theme ({theme})</button>
    </div>
  );
}
