import axiosInstance from "./axiosInstance";
import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchVideos = async () => {
  const response = await axios.get(`${baseUrl}/videoUrl/`);
  return response.data;
};

export const fetchFaqs = async () => {
  const response = await axios.get(`${baseUrl}/faq/`);
  return response.data;
};


export const fetchProfileData = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) throw new Error("No token found");

    const response = await axiosInstance.get("/profile/details/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Store only the `user.id` in localStorage
    if (response.data?.user?.id) {
      localStorage.setItem("userId", response.data.user.id);
    }

    return response.data;  // Return the full profile data
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};
