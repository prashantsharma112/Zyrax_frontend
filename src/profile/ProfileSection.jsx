

import React, { useState } from "react";
import axios from "axios";
import { FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ImageModal from "./ImageModal"; 
import Button from "../components/subComponents/Button";

const ProfileSection = ({ profile }) => {
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const userId = profile?.user?.id;

  if (!profile) {
    return <div>Loading...</div>;
  }
  
  console.log(profile);

  const { first_name, last_name, phone_number, date_of_birth } = profile;
  const profile_picture =
    newProfilePicture || profile?.additional_info?.profile_picture;

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profile_picture", file);

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${baseUrl}/user-profile/${userId}/additional-info/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setNewProfilePicture(response.data.profile_picture);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleViewProfilePicture = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-950 w-full p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="relative">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img
            src={profile_picture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute bottom-2 right-2 bg-gray-800 p-2 rounded-full"
            onClick={handleMenuToggle}
          >
            <FiCamera size={24} className="text-white" />
          </button>
        </div>

        {showMenu && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md">
            <ul className="text-left">
              <li
                className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                onClick={handleViewProfilePicture}
              >
                See profile picture
              </li>
              <li className="p-2 text-black hover:bg-gray-100 cursor-pointer">
                <label htmlFor="profilePictureInput" className="cursor-pointer">
                  Choose profile picture
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  id="profilePictureInput"
                  className="hidden"
                />
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="text-center mt-4">
        <h1 className="text-lg text-gray-300 font-semibold">{`${first_name} ${last_name}`}</h1>
        <p className="text-gray-100 text-sm">{phone_number}</p>
        <p className="text-gray-100 text-sm">{date_of_birth}</p>
      </div>

      {/* Subscription & Help & Support Button */}
      <Button
        className="mt-4 px-4 py-2  font-bold rounded-lg"
        onClick={() => navigate("/helpsetting")}
      >
        Subscription Details
      </Button>

      {showModal && (
        <ImageModal imageUrl={profile_picture} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProfileSection;
