


import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const EditProfile = ({ onSave }) => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");
  const [cycleStartDate, setCycleStartDate] = useState(new Date());
  const [nextCycleDate, setNextCycleDate] = useState(null);
  const [profileName, setProfileName] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [address, setAddress] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const cycleLength = 28;
    const nextDate = new Date(cycleStartDate);
    nextDate.setDate(cycleStartDate.getDate() + cycleLength);
    setNextCycleDate(nextDate);
  }, [cycleStartDate]);

  const checkForReminder = () => {
    const today = new Date();
    const daysLeft = (nextCycleDate - today) / (1000 * 60 * 60 * 24);

    if (daysLeft <= 3 && daysLeft > 0) {
      return <div className="text-red-500 mb-4">Your next cycle is approaching in {Math.ceil(daysLeft)} days.</div>;
    }
    return null;
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      profileName,
      bio,
      phoneNumber,
      address,
      height,
      weight,
      gender,
      cycleStartDate,
      profilePicture,
    });
    navigate('/profile');
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
         <h1 className="text-3xl font-semibold text-center mb-6">Edit Profile</h1>

       <div className="flex justify-center mb-6">
         <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
           {profilePicture ? (
             <img src={profilePicture} alt="Profile" className="w-full h-full rounded-full object-cover" />
           ) : (
             <span>Profile Pic</span>
          )}
        </div>
      </div>

      {/* Upload Profile Picture Button */}
      <div className="flex justify-center mb-4 relative">
        <input 
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="mt-1 block border border-gray-300 rounded-md shadow-sm p-2 opacity-0 absolute w-full h-full cursor-pointer" 
        />
        <Button 
          onClick={() => document.querySelector('input[type="file"]').click()}
          className="bg-blue-500 text-white py-2 rounded-md z-10">
          Upload Picture
        </Button>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        {/* Profile Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Profile Name</label>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="+91"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Height */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Gender Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Menstruation Cycle Date Picker (If Female) */}
        {gender === "female" && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Menstruation Cycle</h2>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select the start date of your last cycle
            </label>
            <DatePicker
              selected={cycleStartDate}
              onChange={(date) => setCycleStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />

            <div className="mt-4 text-gray-700">
              <p>Expected next cycle date: {nextCycleDate ? nextCycleDate.toDateString() : "Calculating..."}</p>
              {checkForReminder()}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center mb-4">
          <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
            Save Changes
          </Button>
        </div>
      </form>

    </div>
  );
};

export default EditProfile;
