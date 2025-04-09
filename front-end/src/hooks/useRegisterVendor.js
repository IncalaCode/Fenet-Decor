import { useState } from 'react';
import { toast } from 'react-toastify';
import { z } from 'zod';
import axios from 'axios';
import { AUTH_ENDPOINTS } from '../config/api.config';

const useRegisterVendor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Business Information
    businessName: '',
    businessType: '',
    address: '',
    description: '',
    
    // Step 3: Documents
    workCertificate: null,
    idFront: null,
    idBack: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // File preview URLs
  const [previews, setPreviews] = useState({
    workCertificate: null,
    idFront: null,
    idBack: null
  });

  // Validation schemas for each step
  const step1Schema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    phoneNumber: z.string().regex(/^(\+251|09)/, 'Invalid Ethiopian phone number'),
    password: z.string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

  const step2Schema = z.object({
    businessName: z.string().min(2, 'Business name is required'),
    businessType: z.string().min(1, 'Please select a business type'),
    address: z.string().min(10, 'Please provide a complete address'),
    description: z.string().min(50, 'Please provide a detailed description (minimum 50 characters)')
  });

  const step3Schema = z.object({
    workCertificate: z.any().refine((file) => file !== null, 'Work certificate is required'),
    idFront: z.any().refine((file) => file !== null, 'ID front image is required'),
    idBack: z.any().refine((file) => file !== null, 'ID back image is required')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      // Validate file size (max 5MB)
      if (files[0].size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          [name]: 'File size should not exceed 5MB'
        }));
        return;
      }

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!validTypes.includes(files[0].type)) {
        setErrors(prev => ({
          ...prev,
          [name]: 'Please upload a valid file (JPEG, PNG, or PDF)'
        }));
        return;
      }

      setFormData(prev => ({ ...prev, [name]: files[0] }));
      
      // Create preview URL for images
      if (files[0].type.startsWith('image/')) {
        setPreviews(prev => ({
          ...prev,
          [name]: URL.createObjectURL(files[0])
        }));
      }

      // Clear error
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const validateStep = async (step) => {
    try {
      if (step === 1) {
        await step1Schema.parseAsync(formData);
      } else if (step === 2) {
        await step2Schema.parseAsync(formData);
      } else if (step === 3) {
        await step3Schema.parseAsync(formData);
      }
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach(err => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
        
        toast.error('Please fix the errors in the form', {
          position: "top-right",
          autoClose: 3000
        });
      }
      return false;
    }
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate final step
      const isValid = await validateStep(currentStep);
      if (!isValid) return;

      // Create FormData for file upload
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      // Send registration request
      const response = await axios.post(
        AUTH_ENDPOINTS.REGISTER_VENDOR, 
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      setIsSuccess(true);
      toast.success('Registration successful! Please wait for admin approval.', {
        position: "top-right",
        autoClose: 3000
      });

      // Reset form
      setFormData({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        businessType: '',
        address: '',
        description: '',
        workCertificate: null,
        idFront: null,
        idBack: null
      });
      setPreviews({
        workCertificate: null,
        idFront: null,
        idBack: null
      });
      setCurrentStep(1);

    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message, {
        position: "top-right",
        autoClose: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentStep,
    formData,
    errors,
    isSubmitting,
    isSuccess,
    previews,
    handleChange,
    handleFileChange,
    handleSubmit,
    nextStep,
    prevStep
  };
};

export default useRegisterVendor;
