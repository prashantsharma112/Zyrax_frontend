import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Your API's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  async (error) => {
    // Handle error responses
    if (error.response?.status === 401) {
      // Token expired or unauthorized access
      console.error("Unauthorized access detected. Logging out the user...");

      // Clear tokens from storage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken"); 

      // Optionally trigger login modal or redirect to login page
      window.dispatchEvent(new Event("tokenExpired"));

      return Promise.reject(error);
    }

    // Handle other error types (e.g., 404, 500)
    return Promise.reject(error);
  }
);

export default axiosInstance;
