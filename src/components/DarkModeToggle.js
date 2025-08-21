import React from 'react';

function DarkModeToggle({ onToggle, isDarkMode }) {
  return (
    <button
      onClick={onToggle}
      className="dark-mode-toggle bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded-lg text-sm"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
