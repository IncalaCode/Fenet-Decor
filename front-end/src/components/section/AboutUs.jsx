import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Images for the slider
  const images = [
    { src: "/image/venue/5f1889814db54c54ce84efff_weddings.jpg", alt: "Wedding Rings" },
    { src: "/image/venue/5f1889814db54c54ce84efff_weddings.jpg", alt: "Groom and Friends" },
    { src: "/image/venue/5f1889814db54c54ce84efff_weddings.jpg", alt: "Wedding Setup" },
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-16 px-6 md:px-20 lg:px-28 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
        About Us
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Info Card */}
        <div className="bg-white shadow-xl rounded-2xl h-100 p-8 w-full md:w-1/3 transform transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-[Dancing Script] text-gray-900 mb-4">
            About Our Wedding Planner
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dapibus placerat velit. Donec in porttitor elit. Suspendisse
            accumsan iaculis tincidunt.
          </p>

          <Button 
            text="See more" 
            className="mt-6 px-6 py-3 bg-purple-400 text-white rounded-lg shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:shadow-[0_0_35px_rgba(236,72,153,1)] transition"
          />
        </div>

        {/* Image Slider */}
        <div className="relative w-full md:w-2/3 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          {/* Slider container */}
          <div 
            className="absolute w-full h-full flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Slider navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-purple-500 w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          {/* Caption */}
          <div className="absolute bottom-10 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold">
              {images[currentSlide].alt}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
