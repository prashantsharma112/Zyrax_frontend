import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-1000 py-10 text-gray-400">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* About Section */}
          <div className="w-full pr-10 md:w-1/2 mb-6">
            <h6 className="text-white text-lg uppercase mb-2">About</h6>
            <p className="text-justify">
              At FitLife Wellness, we are dedicated to empowering individuals to lead healthier lives through comprehensive fitness solutions. Our team of certified trainers and nutritionists provides personalized training programs, engaging group classes, and tailored nutritional guidance to help you achieve your fitness goals. We believe in fostering a supportive community where everyone is encouraged to thrive, whether you’re just starting your fitness journey or are a seasoned athlete. Join us to transform your lifestyle, embrace wellness, and become part of a vibrant community committed to fitness and well-being!
            </p>
          </div>

          {/* Categories Section */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h6 className="text-white text-lg uppercase mb-2">Categories</h6>
            <ul className="list-none p-0">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Fitness Challenge</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h6 className="text-white text-lg uppercase mb-2">Quick Links</h6>
            <ul className="list-none p-0">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contribute</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 opacity-50 my-6" />

        {/* Copyright and Social Media Section */}
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Copyright */}
            <div className="w-full md:w-2/3 mb-6">
              <p className="copyright-text text-center md:text-left">
                Copyright &copy; 2024 All Rights Reserved by <a href="#" className="text-gray-400 hover:text-blue-400">Zyrax Fitness</a>.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="w-full md:w-1/3 mb-6">
              <ul className="flex justify-center md:justify-end space-x-4">
                <li>
                  <a
                    className="bg-gray-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                    <span className="sr-only">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    className="bg-gray-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    className="bg-gray-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200"
                    href="#"
                  >
                    <i className="fab fa-dribbble"></i>
                    <span className="sr-only">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a
                    className="bg-white-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
