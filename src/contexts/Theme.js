import React, { useState, createContext } from "react";

export const ThemeProvider = createContext();

export default function Theme({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <ThemeProvider.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeProvider.Provider>
  );
}
