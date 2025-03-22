import React from 'react';
import PropTypes from 'prop-types';

/**
 * Overview section for service details
 */
const ServiceOverview = ({ description }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

ServiceOverview.propTypes = {
  description: PropTypes.string.isRequired
};

export default ServiceOverview;