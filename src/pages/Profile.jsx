import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePicture from '../assets/testsrc/testImage1.png';
import Button from '../components/Button';

const Profile = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-profile'); // Navigate to the EditProfile page
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50000 py-10">
      <div className="w-full max-w-lg bg-black rounded-lg shadow-md p-6">
        <div className="flex justify-center">
          <img
            src={ProfilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
          <p className="text-gray-600 mt-2">+123 456 7890</p>
        </div>
        <div className="flex justify-center mt-6">
          <Button className="px-4 py-2 rounded-md focus:outline-none" onClick={handleEditClick}>
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
