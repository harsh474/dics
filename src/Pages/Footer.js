import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// src/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Information */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold mb-2 text-8xl">DICS</h3>
            <p>
              Real Estate and Interior Design Company 
              <br /> {/* Add a line break here */}
              offering the best services in the industry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/home" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="mb-2"><strong>Email:</strong> info@realestate.com</p>
            <p className="mb-2"><strong>Phone:</strong> +123 456 7890</p>
            <p className="mb-2"><strong>Address:</strong> 123 Main St, Anytown, USA</p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.twitter.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Real Estate and Interior Design Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
