import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fallbackVendorData} from '../data/fallbackServiceDetails';

const useVendorDetails = () => {
  const { id } = useParams();
  const [vendorDetails, setVendorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      setLoading(true);
      try {
        // In a real application, you would fetch from an API
        // const response = await fetch(`/api/vendors/${id}`);
        // if (!response.ok) throw new Error('Failed to fetch vendor details');
        // const data = await response.json();
        
        // Using fallback data for now
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setVendorDetails(fallbackVendorData);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching vendor details');
        setLoading(false);
      }
    };

    if (id) {
      fetchVendorDetails();
    } else {
      setError('Vendor ID is required');
      setLoading(false);
    }
  }, [id]);

  return { vendorDetails, loading, error };
};

export default useVendorDetails;