import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LanguageSelector = ({ languages = ['English', 'Spanish', 'French'], customElement }) => {
  const [language, setLanguage] = useState(languages[0]);
  
  // If custom element is provided, wrap it in a responsive container
  if (customElement) {
    return (
      <div className="w-full sm:w-auto">
        {React.cloneElement(customElement, {
          className: `${customElement.props.className || ''} w-full sm:w-auto`
        })}
      </div>
    );
  }
  
  return (
    <div className="relative w-full sm:w-auto">
      <select 
        className="py-1 px-2 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-sm w-full appearance-none cursor-pointer dark:text-white pr-8" 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

LanguageSelector.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string),
  customElement: PropTypes.element
};

export default LanguageSelector;
