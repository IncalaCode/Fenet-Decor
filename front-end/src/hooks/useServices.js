import { useState, useEffect } from 'react';
import axios from 'axios';

// Default fallback services if none are found in the backend
const fallbackServices = [
  {
    icon: '💍',
    title: 'Full Wedding Planning',
    description: 'From venue selection to day-of coordination, we handle every detail so you can focus on enjoying your special day.',
    image: '/image/service banner.jpg'
  },
  {
    icon: '🌸',
    title: 'Floral Design',
    description: 'Custom floral arrangements that capture your vision and transform your venue into a romantic paradise.',
    image: './image/service banner.jpg'
  },
  {
    icon: '📸',
    title: 'Photography & Video',
    description: 'Expert photographers and videographers who capture every magical moment of your celebration.',
    image: '/image/service banner.jpg'
  },
  {
    icon: '🍽️',
    title: 'Catering & Cake',
    description: 'Delicious culinary experiences and stunning cake designs tailored to your taste and preferences.',
    image: '/image/service banner.jpg'
  }
];

const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint or somthing else here 
        const response = await axios.get('/api/services');
        
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setServices(response.data);
        } else {
          setServices(fallbackServices);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services');
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};

export default useServices;