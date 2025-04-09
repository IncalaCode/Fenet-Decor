import React from 'react';
import useRegisterVendor from '../../hooks/useRegisterVendor';
import Button from '../ui/Button';
import PhoneInput from '../ui/PhoneInput';
import { motion, AnimatePresence } from 'framer-motion';

const RegisterVendor = () => {
  const {
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
    prevStep,
    setFormData,
    setPreviews
  } = useRegisterVendor();

  const stepVariants = {
    enter: {
      x: '100%',
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: '-100%',
      opacity: 0
    }
  };

  const renderStep1 = () => (
    <motion.div
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Personal Information
      </h2>

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

      {/* Phone Number Field */}
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

      {/* Next Button */}
      <div className="pt-4">
        <Button
          text="Next"
          onClick={nextStep}
          fullWidth
        />
      </div>
    </motion.div>
  );

  // Step 2: Business Information
  const renderStep2 = () => (
    <motion.div
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Business Information
      </h2>

      {/* Business Name */}
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
          Business Name
        </label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          value={formData.businessName || ""}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                    ${errors.businessName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
          placeholder="Enter your business name"
        />
        {errors.businessName && (
          <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
        )}
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
          Business Type
        </label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType || ""}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                    ${errors.businessType ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
        >
          <option value="">Select business type</option>
          <option value="venue">Venue</option>
          <option value="catering">Catering</option>
          <option value="photography">Photography</option>
          <option value="decoration">Decoration</option>
          <option value="music">Music & Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="other">Other</option>
        </select>
        {errors.businessType && (
          <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
        )}
      </div>

      {/* Business Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Business Address
        </label>
        <textarea
          id="address"
          name="address"
          rows="3"
          value={formData.address || ""}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                    ${errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
          placeholder="Enter your business address"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address}</p>
        )}
      </div>

      {/* Business Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Business Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description || ""}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                    ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
          placeholder="Describe your business and services"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description}</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 pt-4">
        <Button
          text="Back"
          onClick={prevStep}
          className="flex-1 bg-gray-500 hover:bg-gray-600"
        />
        <Button
          text="Next"
          onClick={nextStep}
          className="flex-1"
        />
      </div>
    </motion.div>
  );

  // Step 3: Document Upload
  const renderStep3 = () => (
    <motion.div
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Document Upload
      </h2>

      {/* Work Certificate Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Work Certificate
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            {previews.workCertificate ? (
              <div className="relative">
                <img
                  src={previews.workCertificate}
                  alt="Work Certificate Preview"
                  className="mx-auto h-32 w-auto"
                />
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, workCertificate: null }));
                    setPreviews(prev => ({ ...prev, workCertificate: null }));
                  }}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  ×
                </button>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="workCertificate"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="workCertificate"
                      name="workCertificate"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF up to 5MB
                </p>
              </>
            )}
          </div>
        </div>
        {errors.workCertificate && (
          <p className="mt-1 text-sm text-red-600">{errors.workCertificate}</p>
        )}
      </div>

      {/* ID Front Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ID Card (Front)
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            {previews.idFront ? (
              <div className="relative">
                <img
                  src={previews.idFront}
                  alt="ID Front Preview"
                  className="mx-auto h-32 w-auto"
                />
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, idFront: null }));
                    setPreviews(prev => ({ ...prev, idFront: null }));
                  }}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  ×
                </button>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="idFront"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="idFront"
                      name="idFront"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 5MB
                </p>
              </>
            )}
          </div>
        </div>
        {errors.idFront && (
          <p className="mt-1 text-sm text-red-600">{errors.idFront}</p>
        )}
      </div>

      {/* ID Back Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ID Card (Back)
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            {previews.idBack ? (
              <div className="relative">
                <img
                  src={previews.idBack}
                  alt="ID Back Preview"
                  className="mx-auto h-32 w-auto"
                />
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, idBack: null }));
                    setPreviews(prev => ({ ...prev, idBack: null }));
                  }}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  ×
                </button>
              </div>
            ) : (
              <>
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="idBack"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="idBack"
                      name="idBack"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 5MB
                </p>
              </>
            )}
          </div>
        </div>
        {errors.idBack && (
          <p className="mt-1 text-sm text-red-600">{errors.idBack}</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 pt-4">
        <Button
          text="Back"
          onClick={prevStep}
          className="flex-1 bg-gray-500 hover:bg-gray-600"
        />
        <Button
          text={isSubmitting ? "Registering..." : "Register"}
          onClick={handleSubmit}
          className="flex-1"
          disabled={isSubmitting}
        />
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-md mx-auto">
      {isSuccess ? (
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Registration Successful!
          </h3>
          <p className="text-green-600">
            Your vendor registration has been submitted. Please wait for admin approval.
            You will receive an email once your account is approved.
          </p>
          <Button
            text="Back to Login"
            onClick={() => window.location.href = '/login'}
            className="mt-4"
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-8 w-full">
  <div className="relative w-full">
    {/* Progress Line Background */}
    <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0"></div>

    {/* Active Progress Line */}
    <div 
      className="absolute top-4 left-0 h-1 bg-purple-600 z-10 transition-all duration-300"
      style={{
        width: `${((currentStep - 1) / 2) * 100}%`
      }}
    ></div>

    {/* Steps */}
    <div className="flex justify-between relative z-20">
      {[
        { step: 1, label: "Personal" },
        { step: 2, label: "Business" },
        { step: 3, label: "Documents" },
      ].map(({ step, label }) => (
        <div key={step} className="flex flex-col items-center w-1/3">
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center 
              ${currentStep >= step ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}
              transition-all duration-300`}
          >
            {step}
          </div>
          <span
            className={`mt-2 text-xs font-medium ${
              currentStep >= step ? 'text-purple-600' : 'text-gray-500'
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>


          <AnimatePresence mode="wait">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
};

export default RegisterVendor;
