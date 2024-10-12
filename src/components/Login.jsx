
// import React, { useState } from 'react';
// import cardBackground from '../assets/benefits/card-3.svg'; // Ensure the background image is correct
// import Button from './Button'; // Import the Button component
// import ForgotPassword from './ForgotPassword'; // Import the Forgot Password modal

// const Login = ({ closeModal, openRegisterModal }) => {
//   const [forgotPasswordModal, setForgotPasswordModal] = useState(false); // Manage Forgot Password modal visibility

//   // Function to handle Forgot Password modal open/close
//   const toggleForgotPasswordModal = (e) => {
//     e.preventDefault(); // Prevent form submission
//     setForgotPasswordModal(!forgotPasswordModal);
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal(); // Close modal when clicking outside of it
//     }
//   };

//   return (
//     <>
//       <div
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
//         onClick={handleBackdropClick}
//       >
//         <div
//           className="relative p-6 sm:p-8 md:p-12 w-11/12 max-w-[320px] sm:max-w-md mx-auto rounded-lg shadow-lg bg-opacity-80" // Set a lighter opacity to let the background image shine through
//           style={{
//             backgroundImage: `url(${cardBackground})`,
//             // backgroundSize: 'cover', // Ensures the image covers the modal
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl sm:text-3xl text-left font-semibold text-white">Sign In</h2>
//           </div>

//           <form>
//             <div className="mb-2">
//               <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">Phone Number</label>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm" // Reduced opacity for inputs
//                 style={{ backdropFilter: 'blur(10px)' }}
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-white text-xs sm:text-sm font-bold mb-1 sm:mb-2">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full px-2 sm:px-3 py-1 sm:py-2 border border-gray-300 rounded-lg focus:outline-none bg-black bg-opacity-40 text-white text-xs sm:text-sm" // Reduced opacity for inputs
//                 style={{ backdropFilter: 'blur(10px)' }}
//               />
//             </div>

//             {/* Forgot Password Link */}
//             <div className="mb-1">
//               <button
//                 onClick={toggleForgotPasswordModal}
//                 className="text-purple-300 underline hover:text-purple-500 text-xs sm:text-sm"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             <div className="flex items-center justify-between">
//               {/* Sign In Button */}
//               <Button
//                 className="w-full bg-transparent text-sm sm:text-lg px-2 py-1 sm:py-2"
//                 onClick={() => { /* Handle sign-in logic here */ }}
//                 white={false}
//               >
//                 Sign In
//               </Button>
//             </div>
//           </form>

//           <div className="text-center mt-3 sm:mt-4 text-white text-xs sm:text-sm">
//             Don't have an account? 
//             <button onClick={openRegisterModal} className="text-purple-300 underline">
//               Register here
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {forgotPasswordModal && (
//         <ForgotPassword closeModal={toggleForgotPasswordModal} />
//       )}
//     </>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import cardBackground from '../assets/benefits/card-3.svg'; // Ensure the background image is correct
import Button from './Button'; // Import the Button component
import ForgotPassword from './ForgotPassword'; // Import the Forgot Password modal

const Login = ({ closeModal, openRegisterModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
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
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl sm:text-3xl text-left font-semibold text-white">Sign In</h2>
            <button
              onClick={closeModal}
              className="text-white text-xl sm:text-2xl hover:text-gray-300"
              style={{ backgroundColor: 'transparent', border: 'none', marginLeft: '10px' }}
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-white text-sm sm:text-md font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
                style={{ backdropFilter: 'blur(10px)' }}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm sm:text-md font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
                style={{ backdropFilter: 'blur(10px)' }}
                required
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <button type="submit" className="w-full bg-transparent text-lg">
                Login
              </button>
              <button
                onClick={toggleForgotPasswordModal}
                className="text-blue-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-white">
              Don't have an account?{' '}
              <button
                className="text-blue-400 hover:underline"
                onClick={() => {
                  closeModal(); // Close Login modal
                  openRegisterModal(); // Open Register modal
                }}
              >
                Sign up
              </button>
            </p>
          </div>

          {forgotPasswordModal && (
            <ForgotPassword
              closeModal={() => setForgotPasswordModal(false)}
              // Add any other props needed for the ForgotPassword component
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
