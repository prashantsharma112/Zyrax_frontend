


// import React, { useState } from 'react';
// import axios from 'axios';
// import { FiCamera } from 'react-icons/fi'; // Camera icon from react-icons

// const ProfileSection = ({ profile }) => {
//   const [newProfilePicture, setNewProfilePicture] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;
//   const userId = profile?.user?.id;

//   if (!profile) {
//     return <div>Loading...</div>; 
//   }

//   const { first_name, last_name, phone_number, date_of_birth } = profile;
//   const profile_picture = newProfilePicture || profile?.additional_info?.profile_picture;

//   const handleImageChange = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('profile_picture', file);

//     try {
//       setIsLoading(true);
//       // Send the image to the backend
//       const response = await axios.post(
//         `${baseUrl}/user-profile/${userId}/additional-info/`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       // Assuming the API returns the new profile picture URL
//       setNewProfilePicture(response.data.profile_picture); // Set the new profile image
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-950 w-full p-6 rounded-lg shadow-md flex flex-col items-center">
//       {/* Profile Picture Container */}
//       <div className="flex flex-col items-center lg:flex-row lg:items-center w-full relative">
//         {/* Profile Picture */}
//         <div className="relative w-40 h-40 rounded-full overflow-hidden">
//           <img
//             src={profile_picture}
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />

//           {/* Camera Icon Overlay (Always Visible) */}
//           <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  opacity-0  hover:opacity-100 transition-opacity">
//             <input
//               type="file"
//               onChange={handleImageChange}
//               accept="image/*"
//               className="hidden"
//               id="profilePictureInput"
//             />
//             <label
//               htmlFor="profilePictureInput"
//               className="cursor-pointer rounded-full p-2"
//             >
//               {isLoading ? (
//                 <span className="text-white">Loading...</span>
//               ) : (
//                 <FiCamera size={32} className="text-white" />
//               )}
//             </label>
//           </div>
//         </div>

//         {/* User Information */}
//         <div className="text-center mt-4 lg:mt-0">
//           <h1 className="text-lg text-gray-300 font-semibold">{`${first_name} ${last_name}`}</h1>
//           <p className="text-gray-100 text-sm">{phone_number}</p>
//           <p className="text-gray-100 text-sm">{date_of_birth}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;




import React, { useState } from "react";
import axios from "axios";
import { FiCamera } from "react-icons/fi";

const ProfileSection = ({ profile }) => {
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State for toggling the dropdown menu
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const userId = profile?.user?.id;

  if (!profile) {
    return <div>Loading...</div>;
  }

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

  return (
    <div className="bg-gray-950 w-full p-6 rounded-lg shadow-md flex flex-col items-center">
      <div className="relative">
        {/* Profile Picture */}
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

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md">
            <ul className="text-left">
              <li
                className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                onClick={() => alert("View profile picture feature not implemented")}
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

      {/* User Information */}
      <div className="text-center mt-4">
        <h1 className="text-lg text-gray-300 font-semibold">{`${first_name} ${last_name}`}</h1>
        <p className="text-gray-100 text-sm">{phone_number}</p>
        <p className="text-gray-100 text-sm">{date_of_birth}</p>
      </div>
    </div>
  );
};

export default ProfileSection;
