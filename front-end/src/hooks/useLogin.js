import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AUTH_ENDPOINTS } from '../config/api.config';

/**
 * Custom hook for handling login functionality
 * @returns {Object} Login state and handlers
 */
const useLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  /**
   * Handle input changes
   * @param {Event} e - The input change event
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (loginError) {
      setLoginError('');
    }
  };

  /**
   * Validate form inputs
   * @returns {boolean} Whether the form is valid
   */
  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Send login request to backend
   * @param {Object} userData - User credentials
   * @returns {Promise<Object>} User data and token
   */
  const loginUser = async (userData) => {
    try {
      // Make the API call using the endpoint from config
      const response = await axios.post(AUTH_ENDPOINTS.LOGIN, {
        email: userData.email,
        password: userData.password
      });
      
      return response.data;
    } catch (error) {
      // Handle API errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.message || 'Invalid email or password';
        throw new Error(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error('No response from server. Please check your internet connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error('Error setting up request. Please try again.');
      }
    }
  };

  /**
   * Handle form submission
   * @param {Event} e - The form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      toast.error('Please fix the errors in the form', {
        position: "top-right",
        autoClose: 3000
      });
      return;
    }
    
    setIsLoading(true);
    setLoginError('');
    
    try {
      // Call login API
      const response = await loginUser(formData);
      
      // Handle successful login
      console.log('Login successful:', response);
      
      // Show success toast
      toast.success('Login successful! Redirecting...', {
        position: "top-right",
        autoClose: 2000
      });
      
      // Store auth token
      localStorage.setItem('authToken', response.token);
      
      // Store user info if remember me is checked
      if (formData.rememberMe) {
        localStorage.setItem('userEmail', formData.email);
      } else {
        localStorage.removeItem('userEmail');
      }
      
      // Redirect to dashboard or home page after a short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError(error.message || 'Login failed. Please try again.');
      
      // Show error toast
      toast.error(error.message || 'Login failed. Please try again.', {
        position: "top-right",
        autoClose: 5000
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    loginError,
    handleChange,
    handleSubmit
  };
};

export default useLogin;