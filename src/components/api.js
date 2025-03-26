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