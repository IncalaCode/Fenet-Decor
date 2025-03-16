import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24">
      {/* Section Title */}
      <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-700 mb-8">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Section - Booking Info */}
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Book For An Appointment
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dapibus placerat velit. Suspendisse accumsan tortor vel.
          </p>

          {/* Contact Information with proper icons */}
          <h4 className="font-semibold text-lg mb-2">Our Info</h4>
          <ul className="space-y-2 text-gray-600">
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

        {/* Right Section - Google Map */}
        <div className="mt-8 md:mt-0 w-full md:w-96 h-56 rounded-lg shadow-lg overflow-hidden">
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

      {/* Footer */}
      <footer className="mt-16 border-t pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/staticImage/logo.png" // Updated with the specified logo path
              alt="Fenet Decor Logo"
              className="w-16 h-16 mb-2 object-contain"
            />
            <h4 className="font-bold text-lg">Fenet Decor</h4>
            <p className="text-gray-600 text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit.
            </p>

            {/* Social Icons with proper icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 mt-8 md:mt-0">
            {/* Menu */}
            <div>
              <h5 className="font-semibold mb-3">Menu</h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><a href="/" className="hover:text-wedding-purple transition-colors">Home</a></li>
                <li><a href="/about-us" className="hover:text-wedding-purple transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-wedding-purple transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-wedding-purple transition-colors">Contact</a></li>
                <li><a href="/Testimonal" className="hover:text-wedding-purple transition-colors">Testimonal</a></li>
              </ul>
            </div>

            {/* Services */}
            {/* <div>
              <h5 className="font-semibold mb-3">Services</h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><a href="#" className="hover:text-wedding-purple transition-colors">Wedding Plan</a></li>
                <li><a href="#" className="hover:text-wedding-purple transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-wedding-purple transition-colors">Decoration</a></li>
                <li><a href="#" className="hover:text-wedding-purple transition-colors">Invitation</a></li>
                <li><a href="#" className="hover:text-wedding-purple transition-colors">Catering</a></li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Copyright © 2025, Fenet Decor All Right Reserved.
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
