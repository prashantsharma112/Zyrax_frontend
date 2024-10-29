


import React, { useState } from 'react';
import axios from 'axios';  // Make sure you import axios for making API calls
import VerifyOTP from './subComponents/VerifyOTP'; 
import Button from './Button'; 

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
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Prepare the data to be sent
    const registrationData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      date_of_birth: dateOfBirth,
      password: password,
      confirm_password:confirmPassword
    };

    try {
      // Send a POST request to the registration API
      const response = await axios.post(`${baseUrl}/register/`, registrationData);
      console.log('Registration successful:', response.data);

      // Handle successful registration, open OTP modal
      setIsOTPModalOpen(true);
      setErrorMessage('');
    } catch (error) {
      // Handle error, set error message
      console.error('Error during registration:', error.response.data);
      setErrorMessage('Phone number already exists');
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
    console.log('Resend OTP');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
      onClick={handleOverlayClick}
    >
      <div
        className="relative p-4 sm:p-6 md:p-8 w-11/12 max-w-[300px] sm:max-w-xs md:max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg"
        onClick={(e) => e.stopPropagation()}
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
                closeModal();
                openLoginModal();
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






// import React, { useState } from 'react';
// import axios from 'axios'; // Make sure you import axios for making API calls
// import VerifyOTP from './subComponents/VerifyOTP';
// import Button from './Button';

// const Register = ({ closeModal, openLoginModal }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('+91'); // Set default phone number with +91
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     // Prepare the data to be sent
//     const registrationData = {
//       first_name: firstName,
//       last_name: lastName,
//       phone_number: phoneNumber,
//       date_of_birth: dateOfBirth,
//       password: password,
//       confirm_password: confirmPassword,
//     };

//     try {
//       // Send a POST request to the registration API
//       const response = await axios.post(`${baseUrl}/register/`, registrationData);
//       console.log('Registration successful:', response.data);

//       // Handle successful registration, open OTP modal
//       setIsOTPModalOpen(true);
//       setErrorMessage('');
//     } catch (error) {
//       // Handle error, set error message
//       console.error('Error during registration:', error.response.data);
//       setErrorMessage('Phone number already exists');
//     }
//   };

//   const toggleShowPassword = () => setShowPassword(!showPassword);

//   const handleOverlayClick = () => {
//     closeModal();
//   };

//   const handleVerifyOTP = (otp) => {
//     console.log('OTP verified:', otp);
//     setIsOTPModalOpen(false);
//     closeModal(); // Handle OTP verification
//   };

//   const handleResendOTP = () => {
//     console.log('Resend OTP');
//   };

//   // Handle input change for phone number
//   const handlePhoneChange = (e) => {
//     const inputValue = e.target.value;
//     // Prevent the user from deleting the +91
//     if (inputValue.length <= 3 || inputValue.startsWith('+91')) {
//       setPhoneNumber(inputValue);
//     } else {
//       setPhoneNumber(`+91${inputValue.replace(/\D/g, '')}`); // Ensure only numbers are included
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
//       onClick={handleOverlayClick}
//     >
//       <div
//         className="relative p-4 sm:p-6 md:p-8 w-11/12 max-w-[300px] sm:max-w-xs md:max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg"
//         onClick={(e) => e.stopPropagation()}
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
//               onChange={handlePhoneChange} // Use the new handler
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
