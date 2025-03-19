import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/subComponents/Button';

const ForgotPassword = ({ closeModal, openLoginModal }) => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // Handle sending OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/forgot-password/`, { phone_number: phoneNumber });
      localStorage.setItem('phone_number', phoneNumber);
      setStep(2);
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  // Handle password reset
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const storedPhoneNumber = localStorage.getItem('phone_number');
      await axios.post(`${baseUrl}/reset_password/`, {
        phone_number: storedPhoneNumber,
        otp,
        new_password: newPassword,
      });
      alert('Password updated successfully!');
      openLoginModal()
        } catch (error) {
      console.error('Error updating password:', error);
      alert('Failed to update password. Please check OTP and try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-12 w-full max-w-md mx-auto rounded-lg shadow-lg backdrop-blur-lg">
        <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300">&times;</button>
        {step === 1 ? (
          <>
            <h2 className="text-3xl text-white mb-6 text-center">Forgot Password</h2>
            <form onSubmit={handleSendOTP}>
              <label className="block text-white mb-2">Enter Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.startsWith('91')) {
                    value = '+91' + value.slice(2);
                  } else {
                    value = '+91' + value;
                  }
                  setPhoneNumber(value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                placeholder="Enter your phone number"
                required
              />
              <Button type="submit" className="w-full bg-blue-500 text-white mt-4">Send OTP</Button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl text-white mb-6 text-center">Reset Password</h2>
            <form onSubmit={handleUpdatePassword}>
              <label className="block text-white mb-2">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                placeholder="Enter the OTP sent to your phone"
                required
              />
              <label className="block text-white mt-4">New Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                placeholder="Enter your new password"
                required
              />
              <label className="block text-white mt-4">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-transparent text-white"
                placeholder="Confirm your new password"
                required
              />
              <Button type="submit" onClick={openLoginModal()} className="w-full bg-green-500 text-white mt-4">Update Password</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
