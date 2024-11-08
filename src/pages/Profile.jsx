

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/subComponents/Button';
const Profile = ({ profile,  }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const handleEditClick = () => {
    navigate('/edit-profile', { state: profile });
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center p-8">
      {/* Profile Section */}
      <div className="items-center p-6 rounded-lg shadow-md md:mr-6">
        <h1 className="text-3xl font-semibold mb-6">Profile</h1>
        <div className="flex justify-center mb-6">
          <img
            src={profile.profilePicture || 'default-profile-image-url.png'}
            alt="Profile"
            className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover"
          />
        </div>
        <div className="flex justify-around mt-6">
          <Button className="px-4 py-2 rounded-md focus:outline-none" onClick={handleEditClick}>
            Edit Profile
          </Button>
        </div>
        <p><strong>Name:</strong> {profile.profileName || 'Your Name'}</p>
        <p><strong>Bio:</strong> {profile.bio || 'Your bio goes here'}</p>

        <div className="mt-4">
          <button onClick={toggleDetails} className="text-blue-500 underline">
            {showDetails ? 'Show Less' : 'More Details'}
          </button>
        </div>

        {showDetails && (
          <div className="mt-4">
            <p><strong>Phone Number:</strong> {profile.phoneNumber || 'N/A'}</p>
            <p><strong>Address:</strong> {profile.address || 'N/A'}</p>
            <p><strong>Height:</strong> {profile.height || 'N/A'} cm</p>
            <p><strong>Weight:</strong> {profile.weight || 'N/A'} kg</p>
            <p><strong>Gender:</strong> {profile.gender || 'N/A'}</p>
          </div>
        )}
      </div>

    
    </div>
  );
};

export default Profile;

