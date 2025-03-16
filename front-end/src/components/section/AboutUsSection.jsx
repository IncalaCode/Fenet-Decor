import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-white" id="aboutus">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-16">
        About Us
      </h2>

      {/* About Fenet Section - Image on Left */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-12 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* Image Container - Left Side */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-300 rounded-lg"></div>
            <img 
              src="/image/venue/5f1889814db54c54ce84efff_weddings.jpg" 
              alt="Fenet Decor Team" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-[Playwrite US Trad] text-purple-800 mb-4">
            About Fenet
          </h3>
          <p className="text-gray-600 mb-4">
            Founded in 2018, Fenet Decor has quickly established itself as one of the premier wedding planning and decoration services in Ethiopia. Our journey began with a simple passion for creating beautiful, memorable experiences for couples on their special day.
          </p>
          <p className="text-gray-600 mb-4">
            Led by our founder, Fenet Alemu, our team combines creativity, attention to detail, and cultural understanding to create wedding experiences that honor traditions while embracing modern aesthetics.
          </p>
          <p className="text-gray-600">
            We believe that every love story is unique, and we're dedicated to bringing your vision to life with personalized service and exceptional execution.
          </p>
        </div>
      </motion.div>

      {/* Our Philosophy Section - Image on Right */}
      <motion.div 
        className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* Image Container - Right Side */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-purple-300 rounded-lg"></div>
            <img 
              src="/image/venue/5f1889814db54c54ce84efff_weddings.jpg" 
              alt="Wedding Philosophy" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Content - Left Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-[Playwrite US Trad] text-purple-800 mb-4">
            Our Philosophy
          </h3>
          <p className="text-gray-600 mb-4">
            At Fenet Decor, we believe that your wedding day should be a perfect reflection of your love story. Our philosophy centers around three core principles: personalization, excellence, and cultural respect.
          </p>
          <p className="text-gray-600 mb-4">
            We take the time to understand your vision, preferences, and cultural background to create a celebration that feels authentically yours. No two weddings we design are ever the same because no two love stories are identical.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence means that we pay attention to every detail, from the grandest decorations to the smallest accents, ensuring a cohesive and beautiful experience for you and your guests.
          </p>
        </div>
      </motion.div>

      {/* Our Facility Section - Image on Left */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        {/* Image Container - Left Side */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-300 rounded-lg"></div>
            <img 
              src="/image/venue/5f1889814db54c54ce84efff_weddings.jpg" 
              alt="Fenet Decor Facility" 
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-[Playwrite US Trad] text-purple-800 mb-4">
            Our Facility
          </h3>
          <p className="text-gray-600 mb-4">
            Our state-of-the-art facility in Addis Ababa houses our design studio, consultation spaces, and a vast inventory of decor items. This allows us to provide comprehensive services under one roof, from initial planning to day-of execution.
          </p>
          <p className="text-gray-600 mb-4">
            The design studio is where our creative team brings your vision to life, creating custom decorations, floral arrangements, and thematic elements tailored to your preferences.
          </p>
          <p className="text-gray-600">
            Our consultation spaces provide a comfortable environment for clients to explore options, view samples, and work closely with our planners to craft the perfect wedding experience.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;