

// import React, { useState } from "react";
// import Button from "./Button";

// const VerifyOtp = ({ phoneNumber, onOtpVerified, resendOtp, closeModal }) => {
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');

//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     // Add OTP verification logic here (e.g., make a request to the backend to verify OTP)
//     if (otp === "123456") {
//       onOtpVerified();
//     } else {
//       setError("Invalid OTP. Please try again.");
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   return (
//     <>
//       <div
//         className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-500 backdrop-blur-md"
//         onClick={handleBackdropClick}
//       >
//         <div
//           className="relative p-8 w-full max-w-md mx-auto rounded-lg shadow-lg bg-white bg-opacity-20"
//           style={{ backdropFilter: 'blur(15px)' }}
//         >
//           {/* Flex container for heading */}
//           {/* <div className="flex items-center justify-between mb-6"> */}
          
//           <h2 className="text-2xl font-semibold text-center mb-4 text-white">Verify OTP</h2>
//        <p className="text-center text-white mb-4">
//        We've sent an OTP to your phone: <strong>{phoneNumber}</strong>
//         </p>

//           {/* </div> */}

//           <form onSubmit={handleOtpSubmit}>
//             {/* OTP Input Field */}
//             <div className="mb-4">
//               <label className="block text-white text-sm font-bold mb-2">Enter OTP</label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
//                 required
//               />
//             </div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//             {/* Verify OTP Button */}
//             <Button
//               type="submit"
//               className="w-full text-white py-2 rounded transition duration-200"
//             >
//               Verify OTP
//             </Button>
//           </form>

//           {/* Resend OTP Link */}
//           <div className="text-center mt-4">
//             <button
//               onClick={resendOtp}
//               className="text-purple-300 underline hover:text-purple-500"
//             >
//               Resend OTP
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VerifyOtp;

import React, { useState } from "react";
import Button from "./Button";

const VerifyOtp = ({ phoneNumber, onOtpVerified, resendOtp, closeModal }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add OTP verification logic here (e.g., make a request to the backend to verify OTP)
    if (otp === "123456") {
      onOtpVerified();
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleBackdropClick = (e) => {
    // Close modal when clicking outside of the modal frame
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg"
        onClick={handleBackdropClick} // Clicking outside the modal frame closes the modal
      >
        <div
          className="relative p-8 w-full max-w-md mx-auto rounded-lg shadow-lg   bg-opacity-70 backdrop-blur-lg"
          style={{ backdropFilter: 'blur(15px)' }}
        >
          {/* Close Button (cross icon) */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl font-bold focus:outline-none"
          >
            &times;
          </button>

          {/* Modal Heading */}
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">Verify OTP</h2>
          <p className="text-center text-white mb-4">
            We've sent an OTP to your phone: <strong>{phoneNumber}</strong>
          </p>

          <form onSubmit={handleOtpSubmit}>
            {/* OTP Input Field */}
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none bg-transparent text-white"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Verify OTP Button */}
            <Button
              type="submit"
              className="w-full text-white py-2 rounded transition duration-200"
            >
              Verify OTP
            </Button>
          </form>

          {/* Resend OTP Link */}
          <div className="text-center mt-4">
            <button
              onClick={resendOtp}
              className="text-purple-300 underline hover:text-purple-500"
            >
              Resend OTP 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp
