import React from 'react';

const Button = ({ text, onClick, fullWidth = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-3 font-semibold text-white rounded-lg 
        bg-purple-400 transition-all duration-300 ease-in-out 
        shadow-[0_10px_30px_rgba(236,72,153,0.7)]
        hover:shadow-[0_15px_50px_rgba(236,72,153,0.9)]
        hover:-translate-y-1
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
