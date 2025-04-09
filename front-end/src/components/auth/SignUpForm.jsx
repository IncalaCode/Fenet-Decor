import React from 'react';
import useSignUpForm from '../../hooks/useSignUpForm';
import Button from '../ui/Button';
import PhoneInput from '../ui/PhoneInput';

const SignUpForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit
  } = useSignUpForm();

  return (
    <>
      {isSuccess && (
        
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Account created successfully! You can now sign in.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username Field */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                      ${errors.username ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username}</p>
          )}
        </div>

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

        {/* Phone Number Field with Ethiopian Flag */}
        <PhoneInput
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
        />

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                      ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
            placeholder="Create a password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                      ${errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            text={isSubmitting ? "Creating Account..." : "Sign Up"}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
          />
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 hover:text-purple-800 font-medium">
              Sign In
            </a>
          </p>
          <p className="text-sm text-gray-600">
              Want to become a vendor?{" "}
              <a href="/register-vendor" className="text-purple-600 hover:text-purple-800 font-medium">
                Register as Vendor
              </a>
            </p>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
