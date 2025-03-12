import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext(); // Creating Context

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext); // Using context

  return (
    <div style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white", padding: "20px" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </div>
  );
}


  
export { ThemeProvider, ThemedComponent };