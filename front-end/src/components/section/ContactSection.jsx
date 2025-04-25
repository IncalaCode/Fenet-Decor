import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Section - Booking Info */}
          <div className="max-w-lg w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Book For An Appointment
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to make your wedding dreams come true? Contact us today to schedule a consultation with our expert wedding planners. We're here to turn your vision into reality.
            </p>

            {/* Contact Form */}
            <form className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-purple"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-purple"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-purple"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-purple"
              ></textarea>
              <button 
                type="submit" 
                className="bg-wedding-purple text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information with proper icons */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-3">Our Info</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-wedding-purple" /> 
                  <span>+11223344556</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-wedding-purple" /> 
                  <span>truelove@wedding.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-wedding-purple" /> 
                  <span>Bandar Lampung</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Google Map */}
          <div className="w-full md:w-1/2 h-96 rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.39071260422!2d105.2135293!3d-5.4204767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db8f75b75325%3A0xe7a450c234877f20!2sBandar%20Lampung%2C%20Lampung%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bandar Lampung Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;