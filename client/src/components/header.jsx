import React, { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Language Translation</h2>
        <button
          onClick={toggleTheme}
          className="py-2 px-4 bg-gray-200 dark:bg-gray-600 text-black dark:text-white rounded-lg"
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Header;
