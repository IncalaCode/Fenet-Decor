/**
 * API Configuration
 * This file contains all API-related configuration settings
 */

// Base API URL - reads from environment variables with fallback
export const API_URL = 'https://api.yourweddingapp.com';

// Auth endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  REGISTER: `${API_URL}/auth/register`,
  // FORGOT_PASSWORD: `${API_URL}/auth/forgot-password`,
  // RESET_PASSWORD: `${API_URL}/auth/reset-password`,
  // VERIFY_EMAIL: `${API_URL}/auth/verify-email`,
};

// User endpoints
export const USER_ENDPOINTS = {
  PROFILE: `${API_URL}/users/profile`,
  UPDATE_PROFILE: `${API_URL}/users/profile`,
};

// Wedding endpoints
export const WEDDING_ENDPOINTS = {
  LIST: `${API_URL}/weddings`,
  DETAILS: (id) => `${API_URL}/weddings/${id}`,
  CREATE: `${API_URL}/weddings`,
  UPDATE: (id) => `${API_URL}/weddings/${id}`,
  DELETE: (id) => `${API_URL}/weddings/${id}`,
};

export default {
  API_URL,
  AUTH_ENDPOINTS,
  USER_ENDPOINTS,
  WEDDING_ENDPOINTS,
};