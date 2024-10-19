
import React, { useState } from 'react';
import cardBackground from '../assets/benefits/card-3.svg'; // Ensure the background image is correct
import Button from './Button'; // Import the Button component
import ForgotPassword from './ForgotPassword'; // Import the Forgot Password modal

const Login = ({ closeModal, openRegisterModal }) => {
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false); // Manage Forgot Password modal visibility

  // Function to handle Forgot Password modal open/close
  const toggleForgotPasswordModal = (e) => {
    e.preventDefault(); // Prevent form submission
    setForgotPasswordModal(!forgotPasswordModal);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close modal when clicking outside of it
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
        onClick={handleBackdropClick}
      >
        <div
          className="relative p-6 sm:p-8 md:p-12 w-11/12 max-w-[320px] sm:max-w-md mx-auto rounded-lg shadow-lg bg-opacity-80" // Set a lighter opacity to let the background image shine through
          style={{
            backgroundImage: `url(${cardBackground})`,
            // backgroundSize: 'cover', // Ensures the image covers the modal
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl sm:text-3xl text-left font-semibold text-white">Sign In</h2>
          </div>

          <form>
            <div className="mb-2">
              <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm" // Reduced opacity for inputs
                style={{ backdropFilter: 'blur(10px)' }}
              />
            </div>
            <div className="mb-2">
              <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm" // Reduced opacity for inputs
                style={{ backdropFilter: 'blur(10px)' }}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="mb-1">
              <button
                onClick={toggleForgotPasswordModal}
                className="text-purple-300 underline hover:text-purple-500 text-xs sm:text-sm"
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex items-center justify-between">
              {/* Sign In Button */}
              <Button
                className="w-full bg-transparent text-sm sm:text-lg px-2 py-1 sm:py-2"
                onClick={() => { /* Handle sign-in logic here */ }}
                white={false}
              >
                Sign In
              </Button>
            </div>
          </form>

          <div className="text-center mt-3 sm:mt-4 text-white text-xs sm:text-sm">
            Don't have an account? 
            <button onClick={openRegisterModal} className="text-purple-300 underline">
              Register here
            </button>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotPasswordModal && (
        <ForgotPassword closeModal={toggleForgotPasswordModal} />
      )}
    </>
  );
};

export default Login;
