import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeToggle = ({ customElement }) => {
  // Initialize state from localStorage or default to light
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('admin-theme');
    return savedTheme === 'dark';
  });
  
  // Apply theme to document when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('admin-theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  
  const toggleTheme = () => {
    setIsDark(prevState => !prevState);
  };
  
  // If custom element is provided, wrap it in a responsive container
  if (customElement) {
    return (
      <div className="flex items-center justify-center">
        {React.cloneElement(customElement, {
          onClick: toggleTheme,
          'aria-label': `Switch to ${isDark ? 'light' : 'dark'} mode`,
          className: `${customElement.props.className || ''}`
        })}
      </div>
    );
  }
  
  return (
    <button 
      className={`bg-transparent border-none cursor-pointer p-1 rounded-full w-8 h-8 flex items-center justify-center transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${isDark ? 'text-blue-500' : 'text-yellow-500'}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
};

ThemeToggle.propTypes = {
  customElement: PropTypes.element
};

export default ThemeToggle;
