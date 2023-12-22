"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(); // creating context
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  //! Taking the value from local storage, if its true then set dark mode to true
  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode");
    localDarkMode === "true" && setDarkMode(true);
  }, []);
  //! if dark mode is true then add dark class to the html element otherwise remove it
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  // ! Function to toggle dark/light mode
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

// ! Custom hook to consume context
export function useDarkMode() {
  const context = useContext(ThemeContext); // consuming context
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return context;
}
