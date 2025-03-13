

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/subComponents/Button";


const ProfileMenu = ({ setIsDropdownOpen }) => {
  const navigate = useNavigate(); // Ensure it's inside a component


  const handleLogout = () => {
    navigate("/logout"); // Redirect to Logout component
  };
  return (
    <div className="p-6 rounded-lg shadow-md flex flex-col space-y-4 mt-6 md:mt-0">
      <Button
        href="/profile"
        className="block px-4 py-2 text-gray-800"
        onClick={() => setIsDropdownOpen(false)}
      >
        View Profile
      </Button>

      <Button
        className="w-full bg-red-500 text-white py-2 rounded-md focus:outline-none"
        onClick={handleLogout} // Calls the function that logs out & redirects
      >
        Logout
      </Button>
    </div>
  );
};

export default ProfileMenu;
