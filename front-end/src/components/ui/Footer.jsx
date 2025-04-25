
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/staticImage/logo.png"
              alt="Fenet Decor Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <h4 className="font-bold text-lg text-gray-800">Fenet Decor</h4>
            <p className="text-gray-600 text-sm max-w-xs mt-2">
              Creating unforgettable wedding experiences with elegance and style.
              Your dream wedding is our passion.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors" aria-label="Twitter">
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-center md:text-left text-gray-800">Quick Links</h5>
            <ul className="space-y-2 text-gray-600 text-center md:text-left">
              <li><a href="/" className="hover:text-wedding-purple transition-colors">Home</a></li>
              <li><a href="/about-us" className="hover:text-wedding-purple transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-wedding-purple transition-colors">Services</a></li>
              <li><a href="/Testimonal" className="hover:text-wedding-purple transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-wedding-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-center md:text-left text-gray-800">Contact Us</h5>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaPhone className="text-wedding-purple" /> 
                <span>+11223344556</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaEnvelope className="text-wedding-purple" /> 
                <span>truelove@wedding.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaMapMarkerAlt className="text-wedding-purple" /> 
                <span>Bandar Lampung</span>
              </li>
            </ul>
            
            {/* Mini Map Preview */}
            <div className="mt-4 w-full h-32 rounded-lg shadow-sm overflow-hidden">
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

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-6"></div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()}, Fenet Decor All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
