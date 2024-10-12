

// import React, { useState } from 'react';
// import Button from './Button';
// import VerifyOTP from './VerifyOTP'; // Import VerifyOTP component

// const Register = ({ closeModal, openLoginModal }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isOTPModalOpen, setIsOTPModalOpen] = useState(false); // State to toggle OTP modal

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     // Registration logic here (e.g., send registration data to the server)
//     console.log({ firstName, lastName, phoneNumber, dateOfBirth, password });

//     // After successful registration, show OTP verification modal
//     setIsOTPModalOpen(true);
//   };

//   const handleVerifyOTP = (otp) => {
//     // Logic to verify the OTP
//     console.log('OTP verified:', otp);
//     setIsOTPModalOpen(false);
//     closeModal(); // Close the modal after successful OTP verification
//   };

//   const handleResendOTP = () => {
//     // Logic to resend the OTP
//     console.log('Resend OTP');
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal(); // Close the modal if the background (overlay) is clicked
//     }
//   };

//   return (
//     <div
//       className="fixed mt-11 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
//       onClick={handleOverlayClick} // Handle clicks on the overlay
//     >
//       <div
//         className="relative p-12 w-full max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg"
//         onClick={(e) => e.stopPropagation()} // Prevent modal clicks from closing it
//       >
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

//         <form onSubmit={handleRegister}>
//           {/* First Name Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">First Name</label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="Enter your first name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           {/* Last Name Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Last Name</label>
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Enter your last name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           {/* Phone Number Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Phone Number</label>
//             <input
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               placeholder="Enter your phone number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           {/* Date of Birth Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Date of Birth</label>
//             <input
//               type="date"
//               value={dateOfBirth}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mb-2">
//             <label className="block text-white text-sm font-bold mb-2">Confirm Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           {/* Show Password Checkbox */}
//           <div className="mb-4">
//             <label className="inline-flex items-center text-white">
//               <input
//                 type="checkbox"
//                 checked={showPassword}
//                 onChange={toggleShowPassword}
//                 className="form-checkbox h-4 w-4 text-gray-600"
//               />
//               <span className="ml-2">Show Password</span>
//             </label>
//           </div>

//           {/* Display error message if passwords don't match */}
//           {errorMessage && (
//             <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
//           )}

//           {/* Submit Button */}
//           <div className="flex items-center justify-between">
//             <Button type="submit" className="w-full items-center bg-transparent text-lg">
//               Register
//             </Button>
//           </div>
//         </form>

//         {/* Already have an account? Sign in Link */}
//         <div className="mt-4 text-center">
//           <p className="text-white">
//             Already have an account?{' '}
//             <button className="text-blue-400 hover:underline" onClick={() => {
//               closeModal(); // Close Register modal
//               openLoginModal(); // Open Login modal
//             }}>
//               Sign in
//             </button>
//           </p>
//         </div>
//       </div>

//       {/* OTP Modal */}
//       {isOTPModalOpen && (
//         <VerifyOTP
//           phoneNumber={phoneNumber}
//           onVerify={handleVerifyOTP}
//           onResend={handleResendOTP}
//         />
//       )}
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import VerifyOTP from './VerifyOTP'; // Assuming you have this component for OTP verification
// import Button from './Button'; // Custom Button component (if you have one)

// const Register = ({ closeModal, openLoginModal }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//     } else {
//       // Perform registration logic here
//       setIsOTPModalOpen(true); // Open OTP modal on successful registration
//     }
//   };

//   const toggleShowPassword = () => setShowPassword(!showPassword);

//   const handleOverlayClick = () => {
//     closeModal();
//   };

//   const handleVerifyOTP = () => {
//     // Handle OTP verification
//   };

//   const handleResendOTP = () => {
//     // Handle OTP resend logic
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
//       onClick={handleOverlayClick} // Handle clicks on the overlay
//     >
//       <div
//         className="relative p-4 sm:p-6 md:p-8 w-11/12 max-w-[300px] sm:max-w-xs md:max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg"
//         onClick={(e) => e.stopPropagation()} // Prevent modal clicks from closing it
//       >
//         <div className="flex items-center justify-between mb-4 sm:mb-6">
//           <h2 className="text-2xl sm:text-3xl text-left font-semibold text-white">Register</h2>
//           <button
//             onClick={closeModal}
//             className="text-white text-xl sm:text-2xl hover:text-gray-300"
//             style={{ backgroundColor: 'transparent', border: 'none', marginLeft: '10px' }}
//           >
//             &times;
//           </button>
//         </div>

//         <form onSubmit={handleRegister}>
//           <div className="mb-2">
//             <label className="block text-white text-sm sm:text-md font-bold mb-2">First Name</label>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="Enter your first name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="block text-white text-sm sm:text-md font-bold mb-2">Last Name</label>
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Enter your last name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="block text-white text-sm sm:text-md font-bold mb-2">Phone Number</label>
//             <input
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               placeholder="Enter your phone number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="block text-white text-sm sm:text-md font-bold mb-2">Date of Birth</label>
//             <input
//               type="date"
//               value={dateOfBirth}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="block text-white text-sm sm:text-md font-bold mb-2">Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           <div className="mb-2">
//             <label className="block text-white text-sm sm:text-md font-bold mb-2">Confirm Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//               style={{ backdropFilter: 'blur(10px)' }}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="inline-flex items-center text-white">
//               <input
//                 type="checkbox"
//                 checked={showPassword}
//                 onChange={toggleShowPassword}
//                 className="form-checkbox h-4 w-4 text-gray-600"
//               />
//               <span className="ml-2">Show Password</span>
//             </label>
//           </div>

//           {errorMessage && (
//             <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
//           )}

//           <div className="flex items-center justify-between">
//             <Button type="submit" className="w-full bg-transparent text-lg">
//               Register
//             </Button>
//           </div>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-white">
//             Already have an account?{' '}
//             <button
//               className="text-blue-400 hover:underline"
//               onClick={() => {
//                 closeModal();
//                 openLoginModal();
//               }}
//             >
//               Sign in
//             </button>
//           </p>
//         </div>

//         {isOTPModalOpen && (
//           <VerifyOTP
//             phoneNumber={phoneNumber}
//             onVerify={handleVerifyOTP}
//             onResend={handleResendOTP}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import VerifyOTP from './VerifyOTP'; // Assuming you have this component for OTP verification
import Button from './Button'; // Custom Button component (if you have one)

const Register = ({ closeModal, openLoginModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      // Perform registration logic here
      setIsOTPModalOpen(true); // Open OTP modal on successful registration
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleOverlayClick = () => {
    closeModal();
  };

  const handleVerifyOTP = (otp) => {
     console.log('OTP verified:', otp);
    setIsOTPModalOpen(false);
    closeModal();  // Handle OTP verification
  };

  const handleResendOTP = () => {
    // Handle OTP resend logic
    console.log('Resend OTP');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
      onClick={handleOverlayClick} // Handle clicks on the overlay
    >
      <div
        className="relative p-4 sm:p-6 md:p-8 w-11/12 max-w-[300px] sm:max-w-xs md:max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal clicks from closing it
      >
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl text-left font-semibold text-white">Register</h2>
          <button
            onClick={closeModal}
            className="text-white text-xl sm:text-2xl hover:text-gray-300"
            style={{ backgroundColor: 'transparent', border: 'none', marginLeft: '10px' }}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-2">
            <label className="block text-white text-sm sm:text-md font-bold mb-2">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-white text-sm sm:text-md font-bold mb-2">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-white text-sm sm:text-md font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-white text-sm sm:text-md font-bold mb-2">Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-white text-sm sm:text-md font-bold mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-white text-sm sm:text-md font-bold mb-2">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
              style={{ backdropFilter: 'blur(10px)' }}
              required
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center text-white">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={toggleShowPassword}
                className="form-checkbox h-4 w-4 text-gray-600"
              />
              <span className="ml-2">Show Password</span>
            </label>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <div className="flex items-center justify-between">
            <Button type="submit" className="w-full bg-transparent text-lg">
              Register
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-white">
            Already have an account?{' '}
            <button
              className="text-blue-400 hover:underline"
              onClick={() => {
                closeModal(); // Close Register modal
                openLoginModal(); // Open Login modal
              }}
            >
              Sign in
            </button>
          </p>
        </div>

        {isOTPModalOpen && (
          <VerifyOTP
            phoneNumber={phoneNumber}
            onVerify={handleVerifyOTP}
            onResend={handleResendOTP}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
