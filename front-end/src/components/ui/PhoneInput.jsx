import React from 'react';

const PhoneInput = ({ 
  value, 
  onChange, 
  error, 
  id = "phoneNumber",
  name = "phoneNumber",
  label = "Phone Number",
  placeholder = "Enter your phone number"
}) => {
  // Ethiopian flag emoji and country code
  const ethiopiaFlag = "🇪🇹";
  
  // Handle input focus to add country code if empty
  const handleFocus = (e) => {
    if (!e.target.value) {
      // Pre-fill with +251 when the input is focused and empty
      const event = {
        target: {
          name,
          value: '+251'
        }
      };
      onChange(event);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-lg">{ethiopiaFlag}</span>
        </div>
        <input
          id={id}
          name={name}
          type="tel"
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors
                    ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200 focus:border-purple-400'}`}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      <p className="mt-1 text-xs text-gray-500">
        Format: 09XXXXXXXX or +251XXXXXXXXX
      </p>
    </div>
  );
};

export default PhoneInput;