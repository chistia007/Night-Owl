import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// Default API URL
const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

// Determine the API URL from the environment variables
const api = axios.create({
  baseURL: import.meta.env.MODE === "production" 
    ? import.meta.env.VITE_API_URL_PROD 
    : (import.meta.env.VITE_API_URL || apiUrl),
});

// Request interceptor to add the Authorization token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
