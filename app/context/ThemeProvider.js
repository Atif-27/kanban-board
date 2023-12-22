"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode");
    localDarkMode === "true" && setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useDarkMode() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return context;
}
