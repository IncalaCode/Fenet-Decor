import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ customElement, onSearch, placeholder = "Search..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // If custom element is provided, wrap it in a responsive container
  if (customElement) {
    return (
      <div className="w-full max-w-full overflow-hidden">
        {React.cloneElement(customElement, {
          className: `${customElement.props.className || ''} w-full`
        })}
      </div>
    );
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };
  
  return (
    <form className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1 w-full" onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="border-none bg-transparent py-2 px-3 outline-none w-full min-w-[60px] dark:text-white text-sm md:text-base" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="bg-transparent border-none cursor-pointer p-1 text-gray-500 dark:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  customElement: PropTypes.element,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchBar;
