import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fallbackServiceDetails, fallbackVendors }from '../data/fallbackServiceDetails';

/**
 * Custom hook for fetching service details including multiple vendors
 * @param {string} selectedService - The name of the selected service
 * @returns {Object} Service details with vendors, loading state, and error state
 */
const useServiceDetails = (selectedService) => {
  const [serviceDetails, setServiceDetails] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedService) {
      navigate("/");
      return;
    }

    const fetchServiceDetails = async () => {
      try {
        setLoading(true);
        
        // Fetch service category details
        const serviceResponse = await axios.get(`/api/services/details?name=${encodeURIComponent(selectedService)}`);
        
        // Fetch vendors for this service category
        const vendorsResponse = await axios.get(`/api/services/vendors?category=${encodeURIComponent(selectedService)}`);
        
        if (serviceResponse.data && serviceResponse.data.title && serviceResponse.data.status === 200) {
          setServiceDetails(serviceResponse.data);
        } else {
          // Use fallback data if API returns invalid response
          setServiceDetails(fallbackServiceDetails[selectedService] || {
            title: selectedService,
            description: 'Details coming soon.',
            features: [],
            pricing: 'Contact for pricing',
            timeline: 'Contact for availability'
          });
        }
        
        // Set vendors if available from API
        if (vendorsResponse.data && Array.isArray(vendorsResponse.data.vendors) && vendorsResponse.data.status === 200) {
          setVendors(vendorsResponse.data.vendors);
        } else {
          // Use fallback vendors if API fails
          setVendors(getFallbackVendors(selectedService));
        }
      } catch (err) {
        console.error('Error fetching service details:', err);
        setError('Failed to load service details');
        
        // Use fallback data on error
        setServiceDetails(fallbackServiceDetails[selectedService] || {
          title: selectedService,
          description: 'Details coming soon.',
          features: [],
          pricing: 'Contact for pricing',
          timeline: 'Contact for availability'
        });
        
        // Use fallback vendors on error
        setVendors(getFallbackVendors(selectedService));
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [selectedService, navigate]);

  /**
   * Get fallback vendors for a service category
   * @param {string} category - Service category name
   * @returns {Array} Array of vendor objects
   */
  const getFallbackVendors = (category) => {
    // Fallback vendors data for each service category
    return fallbackVendors[category] || [];
  };

  return { serviceDetails, vendors, loading, error };
};

export default useServiceDetails;
