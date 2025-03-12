import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex flex-col items-center justify-center transition-all duration-300`}>
      <h1 className="text-3xl font-bold mb-4">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export default DarkModeToggle;
