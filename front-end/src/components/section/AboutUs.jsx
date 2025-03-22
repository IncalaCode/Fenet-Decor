import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion for smooth animations

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const images = [
    {
      src: "/image/venue/5f1889814db54c54ce84efff_weddings.jpg",
      alt: "Wedding Rings",
      description: "Creating magical moments that last forever",
    },
    {
      src: "/image/venue/5f1889814db54c54ce84efff_weddings.jpg",
      alt: "Groom and Friends",
      description: "Professional planning for your special day",
    },
    {
      src: "/image/venue/5f1889814db54c54ce84efff_weddings.jpg",
      alt: "Wedding Setup",
      description: "Exceptional attention to every detail",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-center text-4xl md:text-5xl font-[Dancing Script] text-gray-800 mb-16">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Info Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-2xl p-8 w-full lg:w-1/3  bg-white/90"
          >
            <h3 className="text-3xl font-[Dancing Script] text-purple-600 mb-6">
              Your Dream Wedding Awaits
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We specialize in creating unforgettable wedding experiences. Our
              dedicated team of professionals ensures every detail is perfect
              for your special day.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <p className="text-gray-600">Personalized Planning</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <p className="text-gray-600">Expert Coordination</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <p className="text-gray-600">Stunning Venues</p>
              </div>
            </div>
            <Button
              text="Learn More"
              className="mt-8 w-full py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transform transition-all duration-300 hover:shadow-lg"
            />
          </motion.div>

          {/* Image Slider */}
          <div className="relative w-full lg:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold text-white mb-2">
                  {images[currentSlide].alt}
                </h4>
                <p className="text-white/90">
                  {images[currentSlide].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
