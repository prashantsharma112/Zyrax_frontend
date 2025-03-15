
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/subComponents/Button";

const ProfileMenu = ({ setIsDropdownOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 rounded-lg shadow-md flex flex-col space-y-4 mt-6 md:mt-0  w-64">
      {/* View Profile Button */}
      <Button
        href="/profile"
        className="block w-full text-left px-4 py-2 text-gray-800  rounded"
        onClick={() => setIsDropdownOpen(false)}
      >
        View Profile
      </Button>

      {/* Logout Button - Redirects to LogoutModal page */}
      <Button
        className="w-full bg-red-500 text-white py-2 rounded-md transition"
        onClick={() => navigate("/logoutmodel")} // ✅ Redirect instead of opening modal
      >
        Logout
      </Button>
    </div>
  );
};

export default ProfileMenu;
