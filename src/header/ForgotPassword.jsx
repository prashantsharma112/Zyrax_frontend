import React, { useState } from 'react';
import Button from '../components/subComponents/Button';

const ForgotPassword = ({ closeModal }) => {
  const [step, setStep] = useState(1); // Step 1: Phone number input, Step 2: OTP and new password input
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle phone number submission (move to step 2)
  const handleSendOTP = (e) => {
    e.preventDefault();
    // Logic to send OTP to the phone number
    setStep(2);
  };

  // Function to handle password update submission
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    // Logic to verify OTP and update password
    if (newPassword === confirmPassword) {
      console.log('Password updated successfully!');
      // Logic to close modal or give feedback to the user
      closeModal();
    } else {
      alert("Passwords don't match");
    }
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-12 w-full max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          &times;
        </button>

        {/* Step 1: Enter Phone Number */}
        {step === 1 && (
          <>
            <h2 className="text-3xl text-white mb-6 text-center">Forgot Password</h2>
            <form onSubmit={handleSendOTP}>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="phoneNumber">
                  Enter Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <Button type="submit" className="w-full items-center bg-transparent text-lg">
                Send OTP
              </Button>
            </form>
          </>
        )}

        {/* Step 2: Enter OTP and New Password */}
        {step === 2 && (
          <>
            <h2 className="text-3xl text-white mb-6 text-center">Reset Password</h2>
            <form onSubmit={handleUpdatePassword}>
              {/* OTP Input */}
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="otp">
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                  placeholder="Enter the OTP sent to your phone"
                  required
                />
              </div>

              {/* New Password Field */}
              <div className="mb-4 relative">
                <label className="block text-white mb-2" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                  placeholder="Enter your new password"
                  required
                />
                {/* Toggle Password Visibility */}
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-white" />
                  ) : (
                    <FaEye className="text-white" />
                  )}
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4 relative">
                <label className="block text-white mb-2" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                  placeholder="Confirm your new password"
                  required
                />
                {/* Toggle Password Visibility */}
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-white" />
                  ) : (
                    <FaEye className="text-white" />
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full items-center bg-transparent text-lg">
                Update Password
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
