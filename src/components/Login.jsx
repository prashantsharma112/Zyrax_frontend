
// import React from 'react';
// import cardBackground from '../assets/benefits/card-3.svg'; // Ensure the background image is correct
// import Button from './Button'; // Import the Button component

// const Login = ({ closeModal, openRegisterModal }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div
//         className="relative p-12 w-full max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg"
//         style={{
//           backgroundImage: `url(${cardBackground})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Flex container for heading and close button */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-4xl text-left font-semibold text-white">Sign In</h2>
//           <button
//             onClick={closeModal}
//             className="text-white text-2xl hover:text-gray-300"
//             style={{
//               backgroundColor: 'transparent', // Transparent background for button
//               border: 'none', // Remove default button border
//               marginLeft: '10px', // Adjust the margin-left to move it closer to the heading
//             }}
//           >
//             &times; {/* The cross symbol */}
//           </button>
//         </div>

//         <form>
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Phone Number</label>
//             <input
//               type="tel"
//               placeholder="Enter your phone number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//             />
//           </div>
//           {/* "Forgot Password?" link styled to look like a link, aligned to the left, and with smaller font size */}
//           <div className="mb-1">
//             <a href="#forgot-password" className="text-purple-300 underline hover:text-purple-500 text-sm">
//               Forgot Password?
//             </a>
//           </div>
//           <div className="flex items-center justify-between">
//             {/* Using the Button component for the Sign In button */}
//             <Button 
//               className="w-full bg-transparent text-lg" // Ensure the button takes full width
//               onClick={() => { /* Handle sign-in logic here */ }} // Add your sign-in logic
//               white={false} // Set this based on your design choice
//             >
//               Sign In
//             </Button>
//           </div>
//         </form>
//         <div className="text-center mt-4 text-white">
//           Don't have an account? 
//           <button onClick={openRegisterModal} className="text-purple-300 underline">
//             Register here
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

 
import React from 'react';
import cardBackground from '../assets/benefits/card-3.svg'; // Ensure the background image is correct
import Button from './Button'; // Import the Button component

const Login = ({ closeModal, openRegisterModal }) => {
  const handleBackdropClick = (e) => {
    // Close modal if the clicked area is the backdrop (not the modal content)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
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
          {/* "Forgot Password?" link styled to look like a link, aligned to the left, and with smaller font size */}
          <div className="mb-1">
            <a href="#forgot-password" className="text-purple-300 underline hover:text-purple-500 text-sm">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-between">
            {/* Using the Button component for the Sign In button */}
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
  );
};

export default Login;
