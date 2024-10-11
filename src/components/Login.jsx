


import React, { useState } from 'react';
import cardBackground from '../assets/benefits/card-3.svg'; // Ensure the background image is correct
import Button from './Button'; // Import the Button component
import ForgotPassword from './ForgotPassword'; // Import the Forgot Password modal

const Login = ({ closeModal, openRegisterModal }) => {
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false); // Manage Forgot Password modal visibility

  // Function to handle Forgot Password modal open/close
  const toggleForgotPasswordModal = () => {
    setForgotPasswordModal(!forgotPasswordModal);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg" // Blurry background
        onClick={handleBackdropClick} // Handle clicking outside modal
      >
        <div
          className="relative p-12 w-full max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-none" // No blur inside the modal
          style={{
            backgroundImage: `url(${cardBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* Flex container for heading */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl text-left font-semibold text-white">Sign In</h2>
          </div>

          <form>
            <div className="mb-2">
              <label className="block text-white text-sm font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
                style={{ backdropFilter: 'blur(10px)' }}
              />
            </div>
            <div className="mb-2">
              <label className="block text-white text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
                style={{ backdropFilter: 'blur(10px)' }}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="mb-1">
              <button
                onClick={toggleForgotPasswordModal} // Open Forgot Password modal
                className="text-purple-300 underline hover:text-purple-500 text-sm"
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex items-center justify-between">
              {/* Sign In Button */}
              <Button
                className="w-full bg-transparent text-lg" // Ensure the button takes full width
                onClick={() => { /* Handle sign-in logic here */ }} // Add your sign-in logic
                white={false} // Set this based on your design choice
              >
                Sign In
              </Button>
            </div>
          </form>

          <div className="text-center mt-4 text-white">
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
