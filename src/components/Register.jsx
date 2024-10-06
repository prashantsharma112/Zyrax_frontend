// import React from 'react';
// import Button from './Button';

// const Register = ({ closeModal }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div
//         className="relative p-12 w-full max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg"
//       >
//         {/* Flex container for heading and close button */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-4xl text-left font-semibold text-white">Register</h2>
//           <button
//             onClick={closeModal}
//             className="text-white text-2xl hover:text-gray-300"
//             style={{
//               backgroundColor: 'transparent',
//               border: 'none',
//               marginLeft: '10px',
//             }}
//           >
//             &times; {/* The cross symbol */}
//           </button>
//         </div>

//         <form>
//           {/* First Name Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">First Name</label>
//             <input
//               type="text"
//               placeholder="Enter your first name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//             />
//           </div>

//           {/* Last Name Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Last Name</label>
//             <input
//               type="text"
//               placeholder="Enter your last name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//             />
//           </div>

//           {/* Phone Number Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Phone Number</label>
//             <input
//               type="tel"
//               placeholder="Enter your phone number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//             />
//           </div>

//           {/* Age Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Age</label>
//             <input
//               type="number"
//               placeholder="Enter your age"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//             />
//           </div>

//           {/* Weight Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Weight (kg)</label>
//             <input
//               type="number"
//               placeholder="Enter your weight in kg"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <Button
//              type="submit" className="w-half items-center  bg-transparent text-lg">Register
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import Button from './Button';

const Register = ({ closeModal }) => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-12 w-full max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg">
        {/* Flex container for heading and close button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl text-left font-semibold text-white">Register</h2>
          <button
            onClick={closeModal}
            className="text-white text-2xl hover:text-gray-300"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              marginLeft: '10px',
            }}
          >
            &times; {/* The cross symbol */}
          </button>
        </div>

        <form>
          {/* First Name Field */}
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
            />
          </div>

          {/* Last Name Field */}
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
            />
          </div>

          {/* Date of Birth Field */}
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2">Date of Birth</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'} // Toggle between password and text
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
            />
          </div>

          {/* Show Password Checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center text-white">
              <input
                type="checkbox"
                checked={showConfirmPassword}
                onChange={toggleShowConfirmPassword}
                className="form-checkbox h-4 w-4 text-gray-600"
              />
              <span className="ml-2">Show Confirm Password</span>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit" className="w-full items-center bg-transparent text-lg">Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
