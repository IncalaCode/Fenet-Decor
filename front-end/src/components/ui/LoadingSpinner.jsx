import React from 'react';
import PropTypes from 'prop-types';

/**
 * Loading spinner animation
 */
const LoadingSpinner = ({ size = 'medium', color = 'wedding-purple' }) => {
  // Size classes
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div 
        className={`animate-spin rounded-full ${sizeClasses[size]} border-t-2 border-b-2 border-${color}`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string
};

export default LoadingSpinner;