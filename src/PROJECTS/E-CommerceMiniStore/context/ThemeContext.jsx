import React, { createContext, useState, useEffect } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLocalStorage("theme") || "light");

  useEffect(() => {
    saveToLocalStorage("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
