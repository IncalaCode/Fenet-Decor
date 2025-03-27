import React, { useState } from 'react';

const PackageCard = ({ packageData, onSelect }) => {
  const { name, description, price, features } = packageData;
  const [isHovered, setIsHovered] = useState(false);
  
  // Define color schemes based on package name
  const getColorScheme = () => {
    if (name.toLowerCase().includes('silver')) {
      return {
        bg: 'bg-gray-200',
        border: 'border-gray-400',
        text: 'text-gray-700',
        hover: 'hover:bg-gray-300'
      };
    } else if (name.toLowerCase().includes('gold')) {
      return {
        bg: 'bg-yellow-100',
        border: 'border-yellow-400',
        text: 'text-yellow-800',
        hover: 'hover:bg-yellow-200'
      };
    } else if (name.toLowerCase().includes('platinum')) {
      return {
        bg: 'bg-blue-100',
        border: 'border-blue-400',
        text: 'text-blue-800',
        hover: 'hover:bg-blue-200'
      };
    } else {
      return {
        bg: 'bg-wedding-purple bg-opacity-10',
        border: 'border-wedding-purple',
        text: 'text-wedding-purple',
        hover: 'hover:bg-wedding-purple hover:bg-opacity-20'
      };
    }
  };
  
  const colors = getColorScheme();
  
  // Mock ratings data (in a real app, this would come from the package data)
  const rating = name.toLowerCase().includes('platinum') ? 4.9 : 
                name.toLowerCase().includes('gold') ? 4.7 : 4.5;
  const reviewCount = name.toLowerCase().includes('platinum') ? 87 : 
                     name.toLowerCase().includes('gold') ? 124 : 56;
  
  return (
    <div 
      className={`border-2 ${colors.border} rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-all duration-300 transform ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${colors.bg} p-4 relative`}>
        <h3 className={`text-xl font-bold ${colors.text}`}>{name}</h3>
        <div className="absolute top-0 right-0 mt-2 mr-2">
          {name.toLowerCase().includes('platinum') && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Premium</span>
          )}
          {name.toLowerCase().includes('gold') && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <p className="text-3xl font-bold text-gray-800">${price.toLocaleString()}</p>
          <p className="text-gray-600 mt-1">{description}</p>
          
          {/* Ratings and Reviews */}
          <div className="flex items-center mt-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
            <span className="mx-1 text-gray-400">•</span>
            <span className="text-sm text-gray-600">{reviewCount} reviews</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className={`w-5 h-5 ${colors.text} mr-2 flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Select button that appears on hover */}
        <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => onSelect(packageData)}
            className={`w-full py-2 px-4 ${colors.bg} P${colors.text} border ${colors.border} rounded-md ${colors.hover} transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-wedding-purple focus:ring-opacity-50 font-medium`}
          >
            Select Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
