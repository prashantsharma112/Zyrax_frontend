

// import React, { useState } from "react";
// import axios from "axios";
// import Button from "../components/subComponents/Button";

// const VerifyOtp = ({ phoneNumber, onOtpVerified, resendOtp, closeModal }) => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;

//   const handleOtpChange = (value, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Automatically focus the next input field if a digit is entered
//     if (value.length === 1 && index < 5) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     const otpValue = otp.join(""); // Join the OTP array into a single string

//     setLoading(true); // Start loading

//     try {
//       const response = await axios.post(`${baseUrl}/verify-otp/`, {
//         phone_number: phoneNumber,
//         otp: otpValue
//       });

//       console.log(response); // Log the response for debugging

//       if (response.status === 201 && response.data.message === "User created successfully") {
//         setSuccessMessage(response.data.message); // Set success message
//         onOtpVerified(); // Proceed if the user is created successfully
//       } else {
//         setError("OTP verification failed. Please try again.");
//       }
//     } catch (error) {
//       setError("Error verifying OTP. Please try again.");
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg">
//         <div
//           className="relative p-8 w-full max-w-md mx-auto rounded-lg shadow-lg bg-opacity-70 backdrop-blur-lg"
//           style={{ backdropFilter: 'blur(15px)' }}
//         >
//           {/* Close Button (cross icon) */}
//           <button
//             onClick={closeModal}
//             className="absolute top-2 right-2 text-white text-2xl font-bold focus:outline-none"
//           >
//             &times;
//           </button>

//           {/* Modal Heading */}
//           <h2 className="text-2xl font-semibold text-center mb-4 text-white">Verify OTP</h2>
//           <p className="text-center text-white mb-4">
//             We've sent an OTP to your phone: <strong>{phoneNumber}</strong>
//           </p>

//           {/* Success Message */}
//           {successMessage && (
//             <p className="text-green-500 text-sm mb-4 text-center">
//               {successMessage}
//             </p>
//           )}

//           {!successMessage && (
//             <form onSubmit={handleOtpSubmit}>
//               {/* OTP Input Fields */}
//               <div className="flex justify-center space-x-2 mb-4">
//                 {otp.map((value, index) => (
//                   <input
//                     key={index}
//                     id={`otp-${index}`}
//                     type="text"
//                     maxLength="1"
//                     value={value}
//                     onChange={(e) => handleOtpChange(e.target.value, index)}
//                     className="w-12 h-12 border border-gray-300 rounded-lg text-center text-white bg-transparent focus:outline-none"
//                     required
//                   />
//                 ))}
//               </div>

//               {/* Error Message */}
//               {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//               {/* Verify OTP Button */}
//               <Button
//                 type="submit"
//                 className="w-full text-white py-2 rounded transition duration-200"
//                 disabled={loading}
//               >
//                 {loading ? "Verifying..." : "Verify OTP"}
//               </Button>
//             </form>
//           )}

//           {/* Resend OTP Link */}
//           {!successMessage && (
//             <div className="text-center mt-4">
//               <button
//                 onClick={resendOtp}
//                 className="text-purple-300 underline hover:text-purple-500"
//               >
//                 Resend OTP
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default VerifyOtp;



import React, { useState } from "react";
import axios from "axios";
import Button from "../components/subComponents/Button";

const VerifyOtp = ({ phoneNumber, onOtpVerified, resendOtp, closeModal }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input field if a digit is entered
    if (value.length === 1 && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join(""); // Join the OTP array into a single string

    setLoading(true); // Start loading

    try {
      const response = await axios.post(`${baseUrl}/verify-otp/`, {
        phone_number: phoneNumber,
        otp: otpValue,
      });

      console.log(response); // Log the response for debugging

      if (response.status === 201 && response.data.message === "User created successfully") {
        setSuccessMessage(response.data.message); // Set success message
        onOtpVerified(); // Proceed if the user is created successfully
      } else {
        setError("OTP verification failed. Please try again.");
      }
    } catch (error) {
      setError("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg">
        <div
          className="relative p-8 w-full max-w-md mx-auto rounded-lg shadow-lg bg-opacity-70 backdrop-blur-lg"
          style={{ backdropFilter: "blur(15px)" }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500 transition-colors focus:outline-none"
          >
            &times;
          </button>

          {/* Modal Heading */}
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">Verify OTP</h2>
          <p className="text-center text-white mb-4">
            We've sent an OTP to your phone: <strong>{phoneNumber}</strong>
          </p>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-500 text-sm mb-4 text-center">
              {successMessage}
            </p>
          )}

          {!successMessage && (
            <form onSubmit={handleOtpSubmit}>
              {/* OTP Input Fields */}
              <div className="flex justify-center space-x-2 mb-4">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className="w-12 h-12 border border-gray-300 rounded-lg text-center text-white bg-transparent focus:outline-none"
                    required
                  />
                ))}
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              {/* Verify OTP Button */}
              <Button
                type="submit"
                className="w-full text-white py-2 rounded transition duration-200"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
            </form>
          )}

          {/* Resend OTP Link */}
          {!successMessage && (
            <div className="text-center mt-4">
              <button
                onClick={resendOtp}
                className="text-purple-300 underline hover:text-purple-500"
              >
                Resend OTP
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
