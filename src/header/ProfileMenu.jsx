// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../components/subComponents/Button';
// import Logout from './Logout'

// const ProfileMenu = ({ setIsAuthenticated, setIsDropdownOpen, profile }) => {
//   const navigate = useNavigate();

//   const baseUrl = import.meta.env.VITE_API_BASE_URL;


//   useEffect(() => {
//     const fetchSubscriptionData = async () => {
//       const accessToken = localStorage.getItem("accessToken");

//       if (!accessToken) {
//         setError("No authentication data found.");
//         setLoading(false);
//         return;
//       }

//       if (!profile?.user?.id) {
//         console.log("Profile not available yet, retrying...");
//         return; // Wait for profile to load
//       }

//       console.log("Fetching subscription data for user:", profile.user.id);

//       try {
//         const response = await axios.post(
//           `${baseUrl}/fetch-subscription/`,
//           { user_id: profile.user.id },
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const subscriptionData = response.data;
//         localStorage.setItem("subscriptionData", JSON.stringify(subscriptionData));
//         console.log("Fetched subscription data:", subscriptionData);
//         setSubscriptionData(subscriptionData);
//       } catch (err) {
//         console.error("Error fetching subscription:", err);
//         setError("Failed to load subscription data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (profile?.user?.id) {
//       fetchSubscriptionData();
//     }
//   }, [baseUrl, profile]);


//   const handleLogout = () => {
//     Logout(setIsAuthenticated, setIsDropdownOpen); // Call the logout function here
//   };

//   return (
//     <div className=" p-6 rounded-lg shadow-md flex flex-col space-y-4 mt-6 md:mt-0">
//       <Button href="/profile"
//         className="block px-4 py-2 text-gray-800"
//         onClick={() => setIsDropdownOpen(false)}
//       >
//         View Profile

//       </Button>
//       <Button href="/helpsetting"
//         className="block px-4 py-2 text-gray-800"
//         onClick={() => setIsDropdownOpen(false)}
//       >
//         Help&Settings

//       </Button>
//       <Button
//         className="w-full bg-red-500 text-white py-2 rounded-md focus:outline-none"
//         onClick={handleLogout} // Call handleLogout instead of openLogoutmodule
//       >
//         Logout
//       </Button>
    
//     </div>
//   );
// };

// export default ProfileMenu;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Button from "../components/subComponents/Button";
// import Logout from "./Logout";

// const ProfileMenu = ({ setIsAuthenticated, setIsDropdownOpen, profile }) => {
//   const navigate = useNavigate();
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;

//   // State for subscription data
//   const [subscriptionData, setSubscriptionData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSubscriptionData = async () => {
//       const accessToken = localStorage.getItem("accessToken");

//       if (!accessToken) {
//         setError("No authentication data found.");
//         setLoading(false);
//         return;
//       }

//       if (!profile?.user?.id) {
//         console.log("Profile not available yet, retrying...");
//         return; // Wait for profile to load
//       }

//       console.log("Fetching subscription data for user:", profile.user.id);

//       try {
//         const response = await axios.post(
//           `${baseUrl}/fetch-subscription/`,
//           { user_id: profile.user.id },
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         const subscriptionData = response.data;
//         localStorage.setItem("subscriptionData", JSON.stringify(subscriptionData));
//         console.log("Fetched subscription data:", subscriptionData);
//         setSubscriptionData(subscriptionData);
//       } catch (err) {
//         console.error("Error fetching subscription:", err);
//         setError("Failed to load subscription data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (profile?.user?.id) {
//       fetchSubscriptionData();
//     }
//   }, [baseUrl, profile]);

//   const handleLogout = () => {
//     Logout(setIsAuthenticated, setIsDropdownOpen);
//   };

//   return (
//     <div className="p-6 rounded-lg shadow-md flex flex-col space-y-4 mt-6 md:mt-0">
//       <Button
//         href="/profile"
//         className="block px-4 py-2 text-gray-800"
//         onClick={() => setIsDropdownOpen(false)}
//       >
//         View Profile
//       </Button>

//       <Button
//         href="/helpsetting"
//         className="block px-4 py-2 text-gray-800"
//         onClick={() => setIsDropdownOpen(false)}
//       >
//         Help&Settings
//       </Button>

//       <Button
//         className="w-full bg-red-500 text-white py-2 rounded-md focus:outline-none"
//         onClick={handleLogout}
//       >
//         Logout
//       </Button>
//     </div>
//   );
// };

// export default ProfileMenu;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/subComponents/Button";
import Logout from "./Logout";

const ProfileMenu = ({ setIsAuthenticated, setIsDropdownOpen, profile }) => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // State for subscription data
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptionData = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        setError("No authentication data found.");
        setLoading(false);
        return;
      }

      if (!profile?.user?.id) {
        console.log("Profile not available yet, retrying...");
        return; // Wait for profile to load
      }

      console.log("Fetching subscription data for user:", profile.user.id);

      try {
        const response = await axios.post(
          `${baseUrl}/fetch-subscription/`,
          { user_id: profile.user.id },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        const subscriptionData = response.data;
        localStorage.setItem("subscriptionData", JSON.stringify(subscriptionData));
        console.log("Fetched subscription data:", subscriptionData);
        setSubscriptionData(subscriptionData);
      } catch (err) {
        console.error("Error fetching subscription:", err);
        setError("Failed to load subscription data.");
      } finally {
        setLoading(false);
      }
    };

    if (profile?.user?.id) {
      fetchSubscriptionData();
    }
  }, [baseUrl, profile]);

  const handleLogout = () => {
    Logout(setIsAuthenticated, setIsDropdownOpen);
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
        href="/helpsetting"
        className="block px-4 py-2 text-gray-800"
        onClick={() => setIsDropdownOpen(false)}
      >
        Help & Settings
      </Button>

      <Button
        className="w-full bg-red-500 text-white py-2 rounded-md focus:outline-none"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default ProfileMenu;
