import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []);

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add logic to filter content based on searchTerm
  };

  return (
    <header
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      } shadow-md p-4 flex items-center justify-between transition-colors duration-300`}
    >
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Search Bar */}
      <div
        className={`flex items-center ${
          darkMode ? "bg-gray-700" : "bg-gray-100"
        } px-4 py-2 rounded-lg shadow-md`}
      >
        <AiOutlineSearch className={`text-${darkMode ? "gray-300" : "gray-500"}`} />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="ml-2 bg-transparent outline-none placeholder-opacity-70"
          placeholder="Search..."
        />
      </div>
      
      {/* User Profile and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          JD
        </div>
        <span className="font-semibold">Jane Doe</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 p-2 rounded-full text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? "🌞" : "🌜"}
        </button>
      </div>
    </header>
  );
};

export default Header;
