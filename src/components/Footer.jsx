// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8 w-full">
//       <div className="container mx-auto px-4">
//         {/* Footer Top Section */}
//         <div className="md:flex justify-between">
//           {/* Company Info */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">Zyrax</h2>
//             <p className="text-sm">
//             Fitness
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div className="mt-6 md:mt-0">
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="" className="hover:underline">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="hover:underline">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:underline">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div className="mt-6 md:mt-0">
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="#facebook" className="hover:text-gray-400">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#twitter" className="hover:text-gray-400">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#linkedin" className="hover:text-gray-400">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="mt-8 border-t border-gray-700 pt-4">
//           <p className="text-center text-sm">
//             &copy; 2024 Company Name. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-1000 py-10  text-gray-400">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full pr-10 md:w-1/2 mb-6">
            <h6 className="text-white text-lg uppercase mb-2">About</h6>
            <p className="text-justify">
            At FitLife Wellness, we are dedicated to empowering individuals to lead healthier lives through comprehensive fitness solutions. Our team of certified trainers and nutritionists provides personalized training programs, engaging group classes, and tailored nutritional guidance to help you achieve your fitness goals. We believe in fostering a supportive community where everyone is encouraged to thrive, whether you’re just starting your fitness journey or are a seasoned athlete. Join us to transform your lifestyle, embrace wellness, and become part of a vibrant community committed to fitness and well-being!
            </p>
          </div>

          <div className="w-1/2 md:w-1/4 mb-6">
            <h6 className="text-white text-lg uppercase mb-2">Categories</h6>
            <ul className="list-none p-0">
              <li><a href="http://scanfcode.com/category/c-language/" className="text-gray-400 hover:text-blue-400">Fitness challenge</a></li>
             
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4 mb-6">
            <h6 className="text-white text-lg uppercase mb-2">Quick Links</h6>
            <ul className="list-none p-0">
              <li><a href="http://scanfcode.com/about/" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/" className="text-gray-400 hover:text-blue-400">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/" className="text-gray-400 hover:text-blue-400">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/" className="text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/" className="text-gray-400 hover:text-blue-400">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 opacity-50 my-6" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-6">
            <p className="copyright-text text-center md:text-left">
              Copyright &copy; 2017 All Rights Reserved by <a href="#" className="text-gray-400 hover:text-blue-400">Scanfcode</a>.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <ul className="flex justify-center md:justify-end">
              <li><a className="bg-gray-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200" href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="bg-gray-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200" href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a className="bg-gray-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200" href="#"><i className="fab fa-dribbble"></i></a></li>
              <li><a className="bg-gray-600 hover:bg-blue-500 text-gray-400 h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200" href="#"><i className="fab fa-linkedin-in"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
