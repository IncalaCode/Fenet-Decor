import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AUTH_ENDPOINTS } from '../config/api.config';


// Define Ethiopian phone number regex
// Matches numbers starting with 09 followed by 8 digits OR +251 followed by 9 digits
const ethiopianPhoneRegex = /^(09[0-9]{8}|\+251[0-9]{9})$/;

// Define validation schema using Zod
export const signUpSchema = z.object({
  username: z.string()
    .min(3, { message: 'Username must be at least 3 characters' })
    .max(50, { message: 'Username must be less than 50 characters' }),
  
  email: z.string()
    .email({ message: 'Please enter a valid email address' }),
  
  phoneNumber: z.string()
    .regex(ethiopianPhoneRegex, { 
      message: 'Please enter a valid Ethiopian phone number (09XXXXXXXX or +251XXXXXXXXX)' 
    }),
  
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
  
  confirmPassword: z.string()
})
.refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});



export const useSignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Check if phone number is valid Ethiopian format
  const isValidEthiopianPhone = (phone) => {
    return ethiopianPhoneRegex.test(phone);
  };

  // Format phone number for display (add spaces for readability)
  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    
    if (phone.startsWith('+251')) {
      // Format as +251 XX XXX XXXX
      return phone.replace(/(\+251)(\d{2})(\d{3})(\d{4})/, '$1 $2 $3 $4');
    } else if (phone.startsWith('09')) {
      // Format as 09XX XXX XXX
      return phone.replace(/(09)(\d{2})(\d{3})(\d{3})/, '$1$2 $3 $4');
    }
    
    return phone;
  };

  // Handle input changes and validate in real-time
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number to allow formatting while typing
    if (name === 'phoneNumber') {
      // Remove any non-digit characters except the + sign at the beginning
      const cleanedValue = value.replace(/[^\d+]/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Validate the field that changed
    try {
      // Create a partial schema for just this field
      const fieldSchema = z.object({ [name]: signUpSchema.shape[name] });
      
      // Special case for confirmPassword which needs password for comparison
      if (name === 'confirmPassword') {
        const result = signUpSchema.safeParse({
          ...formData,
          confirmPassword: value
        });
        
        if (!result.success) {
          const fieldError = result.error.errors.find(err => err.path[0] === 'confirmPassword');
          if (fieldError) {
            setErrors(prev => ({ ...prev, confirmPassword: fieldError.message }));
            return;
          }
        }
        
        // Clear error if validation passes
        setErrors(prev => ({ ...prev, confirmPassword: undefined }));
        return;
      }
      
      // For other fields
      fieldSchema.parse({ [name]: name === 'phoneNumber' ? value.replace(/\s/g, '') : value });
      
      // Clear error if validation passes
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors[0];
        setErrors(prev => ({ ...prev, [name]: fieldError.message }));
      }
    }
  };

  // Register user with the backend API
  const registerUser = async (userData) => {
    try {
      // Prepare the data for the API
      const apiData = {
        username: userData.username,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        password: userData.password
      };
      
      // Make the API call
      const response = await axios.post(AUTH_ENDPOINTS.REGISTER, apiData);
      return response.data;
    } catch (error) {
      // Handle API errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorMessage = error.response.data.message || 'Registration failed';
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Validate all fields
      signUpSchema.parse(formData);
      
      // If validation passes, submit the form
      setIsSubmitting(true);
      
      try {
        // Send data to backend
        const result = await registerUser(formData);
        
        // Handle successful submission
        console.log('Form submitted successfully:', result);
        setIsSuccess(true);
        
        // Show success toast
        toast.success('Account created successfully! Redirecting to login...', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        
        // Reset form after successful submission
        setFormData({
          username: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: ''
        });
        
        // Redirect to login page after a short delay
        setTimeout(() => {
          navigate('/login', { 
            state: { message: 'Registration successful! Please sign in with your new account.' }
          });
        }, 3000);


        // add th token hundeling as well 
        
      } catch (apiError) {
        // Show error toast
        toast.error(apiError.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Map errors to form fields
        const newErrors = {};
        error.errors.forEach(err => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
        
        // Show validation error toast
        toast.error('Please fix the errors in the form', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle phone input focus to add country code
  const handlePhoneFocus = (e) => {
    if (!e.target.value) {
      setFormData(prev => ({ ...prev, phoneNumber: '+251' }));
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    handlePhoneFocus,
    isValidEthiopianPhone,
    formatPhoneNumber
  };
};

export default useSignUpForm;
