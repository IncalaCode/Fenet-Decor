import React from 'react';
import PropTypes from 'prop-types';

/**
 * Error message display
 */
const ErrorMessage = ({ title, message }) => {
  return (
    <div className="text-center py-20">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 className="text-2xl text-red-500 mb-4">{title}</h2>
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default ErrorMessage;