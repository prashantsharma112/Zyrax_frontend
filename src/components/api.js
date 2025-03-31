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
    // Check if profileData exists in localStorage
    const storedProfileData = localStorage.getItem("profileData");
    if (storedProfileData) {
      return JSON.parse(storedProfileData); // Return cached data
    }

    const token = localStorage.getItem("accessToken");
    if (!token) throw new Error("No token found");

    const response = await axiosInstance.get("/profile/details/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Store the profile data in localStorage
    localStorage.setItem("profileData", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};