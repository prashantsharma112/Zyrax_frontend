import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="md:flex justify-between">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">Zyrax</h2>
            <p className="text-sm">
            Fitness
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#linkedin" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            &copy; 2024 Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
