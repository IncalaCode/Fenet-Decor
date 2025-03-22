import { useLocation } from 'react-router-dom';

/**
 * Custom hook for working with URL query parameters
 * @returns {Object} Methods for getting and setting query parameters
 */
const useQueryParams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  /**
   * Get a query parameter value by name
   * @param {string} name - The name of the query parameter
   * @returns {string|null} The value of the query parameter or null if not found
   */
  const getParam = (name) => {
    return queryParams.get(name);
  };

  /**
   * Get all query parameters as an object
   * @returns {Object} An object containing all query parameters
   */
  const getAllParams = () => {
    const params = {};
    queryParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };

  /**
   * Check if a query parameter exists
   * @param {string} name - The name of the query parameter
   * @returns {boolean} True if the parameter exists, false otherwise
   */
  const hasParam = (name) => {
    return queryParams.has(name);
  };

  return {
    getParam,
    getAllParams,
    hasParam,
    queryParams
  };
};

export default useQueryParams;