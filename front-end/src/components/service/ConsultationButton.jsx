import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button for requesting a consultation
 */
const ConsultationButton = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior if no onClick handler is provided
      console.log('Request consultation clicked');
      // You could show a modal or navigate to a contact form
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-wedding-purple text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300 shadow-md"
    >
      Request a Consultation
    </button>
  );
};

ConsultationButton.propTypes = {
  onClick: PropTypes.func
};

export default ConsultationButton;