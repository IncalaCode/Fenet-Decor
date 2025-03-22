import React from 'react';
import PropTypes from 'prop-types';

/**
 * Features section for service details
 */
const ServiceFeatures = ({ features }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's Included</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-wedding-purple mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

ServiceFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ServiceFeatures;