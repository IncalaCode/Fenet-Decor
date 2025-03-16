import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

/**
 * A reusable section component with a background image, centered content, and scroll indicator
 * 
 * @param {Object} props
 * @param {string} props.backgroundImage - Path to the background image
 * @param {React.ReactNode} props.children - Content to display in the center of the section
 * @param {string} props.height - Height of the section (default: "100vh")
 * @param {string} props.overlayColor - Color of the overlay (default: "rgba(0,0,0,0.4)")
 * @param {string} props.targetId - ID of the element to scroll to when clicking the indicator
 * @param {string} props.className - Additional classes for the section
 */
const ImageSection = ({ 
  backgroundImage, 
  children, 
  height = "100vh", 
  overlayColor = "rgba(0,0,0,0.4)",
  targetId,
  className = ""
}) => {
  // Function to handle scroll to next section
  const handleScroll = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no targetId is provided, scroll down by the height of the viewport
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms]"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />

      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Content Area */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
        {children}
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={handleScroll}
      >
        <FaChevronDown 
          className="text-white text-3xl animate-bounce shadow-lg" 
          style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }}
        />
      </div>
    </section>
  );
};

export default ImageSection;