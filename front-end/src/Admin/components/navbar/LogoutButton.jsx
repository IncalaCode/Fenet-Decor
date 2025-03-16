import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = ({ customElement, onLogout = () => console.log('Logout clicked') }) => {
  if (customElement) return customElement;
  
  return (
    <button 
      className="bg-gray-100 text-gray-800 border border-gray-200 rounded-md py-2 px-4 cursor-pointer font-medium transition duration-200 hover:bg-gray-200" 
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

LogoutButton.propTypes = {
  customElement: PropTypes.element,
  onLogout: PropTypes.func
};

export default LogoutButton;
