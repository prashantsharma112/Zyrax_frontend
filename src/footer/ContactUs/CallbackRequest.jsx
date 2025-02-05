

import React, { useState } from 'react';
import axios from 'axios';
import Logo from "../../assets/Zyrax.svg"
import Button from '../../components/subComponents/Button';

const CallbackRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredCallbackTime: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const callbackData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      preferred_callback_time: formatDateTime(formData.preferredCallbackTime)
    };

    try {
      // Send a POST request to the callback API
      const response = await axios.post(`${baseUrl}/callback/`, callbackData);
      console.log('Callback request submitted successfully:', response.data);

      // Handle successful submission
      alert('Callback request submitted successfully!');
      setErrorMessage('');

      // Reload the page
      window.location.reload();
    } catch (error) {
      // Handle error, set error message
      console.error('Error during callback request:', error.response?.data);
      setErrorMessage('Failed to submit callback request. Please try again.');
    }
  };

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-[#5e57ff] to-[#3d3abf]"
    >
      <div className="w-full max-w-lg bg-black shadow-md rounded-lg p-8">
        <div className="relative mb-6">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-16 mx-auto rounded-full border-4 border-white shadow-md"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-700 text-center">Callback Request</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="preferredCallbackTime">
              Preferred Callback Time
            </label>
            <input
              type="datetime-local"
              id="preferredCallbackTime"
              name="preferredCallbackTime"
              value={formData.preferredCallbackTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-6 py-2 text-black rounded-md focus:outline-none"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallbackRequest;
