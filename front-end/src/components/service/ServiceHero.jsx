import React from 'react';
import PropTypes from 'prop-types';

/**
 * Hero section for service details with image and title overlay
 */
const ServiceHero = ({ title, image, icon }) => {
  return (
    <div className="relative h-64 md:h-96">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-5xl">{icon || '📷'}</span>
        </div>
      )}
      <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
};

ServiceHero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  icon: PropTypes.string
};

export default ServiceHero;