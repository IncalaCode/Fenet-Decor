import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * Component to display a single vendor card with details
 */
const VendorCard = ({ vendor }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/vendor/${vendor.id}`);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Vendor Image */}
        <div className="md:w-1/3 h-48 md:h-auto">
          {vendor.image ? (
            <img 
              src={vendor.image} 
              alt={vendor.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-3xl">📷</span>
            </div>
          )}
        </div>
        
        {/* Vendor Details */}
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-800">{vendor.name}</h3>
            <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm">
              <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{vendor.rating}</span>
              <span className="mx-1 text-gray-400">•</span>
              <span className="text-gray-600">{vendor.reviewCount} reviews</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{vendor.description}</p>
          
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
            <div className="mr-4 mb-2">
              <span className="font-medium">Price:</span> {vendor.pricing}
            </div>
            <div className="mb-2">
              <span className="font-medium">Location:</span> {vendor.location}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={handleViewDetails}
              className="text-wedding-purple hover:text-wedding-purple-dark font-medium text-sm flex items-center"
            >
              View Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button
              className="bg-wedding-purple text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

VendorCard.propTypes = {
  vendor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    pricing: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired
};

export default VendorCard;