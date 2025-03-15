
  


import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/subComponents/Button";

const LogoutModal = () => {
  const navigate = useNavigate();

  const handleLogoutConfirm = () => {
    localStorage.removeItem("accessToken"); // ✅ Clear token
    navigate("/logout"); // ✅ Redirect after logout
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-hidden="true"
    >
      <div className="bg-black p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold">Confirm Logout</h2>
        <p className="text-gray-600 mt-2">Are you sure you want to log out?</p>
        <div className="flex justify-end mt-4 space-x-2">
          <Button
            onClick={() => navigate(-1)} // ✅ Go back to previous page
            className="px-4 py-2 "
          >
            Cancel
          </Button>
          <Button
            onClick={handleLogoutConfirm}
            className="px-4 py-2  text-white rounded  transition"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
