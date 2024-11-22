import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/subComponents/Button';
import Logout from './Logout'

const ProfileMenu = ({ openBMICalculator, setIsAuthenticated, setIsDropdownOpen }) => {
  const navigate = useNavigate();


  const handleLogout = () => {
    Logout(setIsAuthenticated, setIsDropdownOpen); // Call the logout function here
  };

  return (
    <div className=" p-6 rounded-lg shadow-md flex flex-col space-y-4 mt-6 md:mt-0">
      <Button href="/profile"
        className="block px-4 py-2 text-gray-800"
        onClick={() => setIsDropdownOpen(false)}
      >
        View Profile

      </Button>
      <Button
        className="w-full bg-red-500 text-white py-2 rounded-md focus:outline-none"
        onClick={handleLogout} // Call handleLogout instead of openLogoutmodule
      >
        Logout
      </Button>
    
    </div>
  );
};

export default ProfileMenu;
