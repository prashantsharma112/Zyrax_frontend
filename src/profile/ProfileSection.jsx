

import React from 'react';

const ProfileSection = ({ profile }) => {
  if (!profile) {
    return <div>Loading...</div>; 
  }

  const { first_name, last_name, phone_number, date_of_birth } = profile;
  const profile_picture = profile?.additional_info?.profile_picture;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center ">
      {/* Profile Picture */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center w-full mb-4">
        <img
          src={profile_picture}
          alt="Profile"
          className="w-50 h-40 rounded-full mb-4 lg:mb-0 lg:mr-4"
        />

        {/* User Information */}
        <div className="text-center ">
          <h2 className="text=xl  text-gray-600 font-semibold">{`${first_name} ${last_name}`}</h2>
          <p className="text-gray-600 text-sm">{phone_number}</p>
          <p className="text-gray-600 text-sm">{date_of_birth}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
