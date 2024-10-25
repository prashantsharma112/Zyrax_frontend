

import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import cardBackground from '../assets/benefits/card-3.svg'; // Ensure the background image is correct
import Button from './Button'; // Import the Button component
import ForgotPassword from './subComponents/ForgotPassword'; // Import the Forgot Password modal

const Login = ({ closeModal, openRegisterModal, setIsAuthenticated }) => {
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
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

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(''); // Reset error state

    try {
      const response = await axios.post(`${baseUrl}/login/`, {
        username: phoneNumber,
        password: password,
      });

      console.log(response); // Log the entire response to inspect structure
      console.log(response.data); // Log data specifically

      // Check for success in response and store the tokens
      if (response.status === 200 && response.data.access && response.data.refresh) {
        // Store tokens in localStorage
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        
        setIsAuthenticated(true); 

        closeModal(); // Close modal on successful login
      } else {
        setError(response.data.message || 'Invalid phone number or password.'); // Set error based on backend message
      }
    } catch (err) {
      console.error('Login error:', err); // Log the error for debugging purposes
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
        onClick={handleBackdropClick}
      >
        <div
          className="relative p-6 sm:p-8 md:p-12 w-11/12 max-w-[320px] sm:max-w-md mx-auto rounded-lg shadow-lg bg-opacity-80"
          style={{
            backgroundImage: `url(${cardBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl sm:text-3xl text-left font-semibold text-white">Sign In</h2>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} // Update state on change
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm"
                style={{ backdropFilter: 'blur(10px)' }}
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm"
                style={{ backdropFilter: 'blur(10px)' }}
                required
              />
            </div>

            {/* Error message display */}
            {error && <div className="text-red-500 text-xs mb-2">{error}</div>}

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
                type="submit" // Set the button type to submit
                white={false}
              >
                Sign In
              </Button>
            </div>
          </form>

          <div className="text-center mt-3 sm:mt-4 text-white text-xs sm:text-sm">
            Don't have an account?{' '}
            <button onClick={openRegisterModal} className="text-purple-300 underline">
              Register here
            </button>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotPasswordModal && <ForgotPassword closeModal={toggleForgotPasswordModal} />}
    </>
  );
};

export default Login;
