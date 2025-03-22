import React, { useState } from "react";
import PropTypes from "prop-types";
import VendorCard from "./VendorCard";

/**
 * Component to display a list of vendors with filtering and sorting options
 */
const VendorsList = ({ vendors, serviceTitle }) => {
  const [sortBy, setSortBy] = useState("rating");
  const [filterRating, setFilterRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = vendor.rating >= filterRating;
    return matchesSearch && matchesRating;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Helper function to extract numeric price from string
  const extractPrice = (priceString) => {
    const match = priceString.match(/\$?([\d,]+)/);
    return match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-5 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          {serviceTitle} Vendors
        </h2>
      </div>

      {/* Filters and Search Section */}
      <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search vendors..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wedding-purple focus:border-wedding-purple transition duration-150 ease-in-out"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Filters Group */}
          <div className="flex flex-col sm:flex-row gap-3">
            <select
              className="form-select w-full sm:w-48 py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wedding-purple focus:border-wedding-purple bg-white shadow-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Highest Rating</option>
              <option value="reviews">Most Reviews</option>
              <option value="name">Name: A-Z</option>
            </select>

            <select
              className="form-select w-full sm:w-48 py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wedding-purple focus:border-wedding-purple bg-white shadow-sm"
              value={filterRating}
              onChange={(e) => setFilterRating(Number(e.target.value))}
            >
              <option value="0">All Ratings</option>
              <option value="4.5">4.5+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3.5">3.5+ Stars</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-600">
          {sortedVendors.length}{" "}
          {sortedVendors.length === 1 ? "vendor" : "vendors"} found
        </p>
        {(searchTerm || filterRating > 0) && (
          <button
            className="text-sm text-wedding-purple hover:text-wedding-purple-dark transition-colors duration-150 ease-in-out"
            onClick={() => {
              setSearchTerm("");
              setFilterRating(0);
              setSortBy("rating");
            }}
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Vendors Grid */}
      {sortedVendors.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {sortedVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-600 mb-2">
            No vendors match your search criteria.
          </p>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-wedding-purple hover:bg-wedding-purple-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wedding-purple transition-colors duration-150 ease-in-out"
            onClick={() => {
              setSearchTerm("");
              setFilterRating(0);
              setSortBy("rating");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

VendorsList.propTypes = {
  vendors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      reviewCount: PropTypes.number.isRequired,
      pricing: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }),
  ).isRequired,
  serviceTitle: PropTypes.string.isRequired,
};

export default VendorsList;
