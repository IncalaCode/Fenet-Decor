import React from 'react';
import useLoginForm from '../../hooks/useLoginForm';
import Button from '../ui/Button';

const LoginForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    loginError,
    handleChange,
    handleSubmit
  } = useLoginForm();

  return (
    <>
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Login successful! Redirecting...
        </div>
      )}
      
      {loginError && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {loginError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                      ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-800">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                      ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            text={isSubmitting ? "Signing In..." : "Sign In"}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
          />
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/sign-up" className="text-purple-600 hover:text-purple-800 font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;