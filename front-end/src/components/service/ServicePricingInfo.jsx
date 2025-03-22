import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pricing and timeline information for service details
 */
const ServicePricingInfo = ({ pricing, timeline }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {pricing && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Pricing</h3>
          <p className="text-wedding-purple text-lg font-medium">{pricing}</p>
        </div>
      )}
      
      {timeline && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Recommended Timeline</h3>
          <p className="text-wedding-purple text-lg font-medium">{timeline}</p>
        </div>
      )}
    </div>
  );
};

ServicePricingInfo.propTypes = {
  pricing: PropTypes.string,
  timeline: PropTypes.string
};

export default ServicePricingInfo;