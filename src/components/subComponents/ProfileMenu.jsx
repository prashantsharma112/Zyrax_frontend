import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import logout from '../logout'; // Import your logout function

const ProfileMenu = ({ openBMICalculator, setIsAuthenticated, setIsDropdownOpen }) => {
  const navigate = useNavigate();


  const handleLogout = () => {
    logout(setIsAuthenticated, setIsDropdownOpen); // Call the logout function here
  };

  return (
    <div className=" p-6 rounded-lg shadow-md flex flex-col space-y-4 mt-6 md:mt-0">
      <Button href="/profile"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
      <Button
        className="w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none"
        onClick={() => navigate('/attendance-calendar')}
      >
        Attendance Calendar
      </Button>
      <Button
        className="w-full bg-green-500 text-white py-2 rounded-md focus:outline-none"
        onClick={openBMICalculator}
      >
        BMI Calculator
      </Button>
    </div>
  );
};

export default ProfileMenu;
