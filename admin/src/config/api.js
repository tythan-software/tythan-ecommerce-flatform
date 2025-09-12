import authService from "@/services/authService";
import { isTokenExpired } from "@/utils/auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const apiUrl = import.meta.env.VITE_API_URL;

// Create axios instance with base configuration
const api = axios.create({
  baseURL: apiUrl,
});

// Add token to requests if available
api.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("token");
  
  if (isTokenExpired(token)) {
    console.log("Token expired, refreshing...");
    token = await authService.createToken(jwtDecode(token));
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.method) {
    const method = config.method.toLowerCase();

    if (["post", "put", "patch"].includes(method)) {
      // If FormData → multipart/form-data (let browser set boundary)
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      } 
      // Otherwise → JSON
      else {
        config.headers["Content-Type"] = "application/json";
      }
    } else {
      // For GET/DELETE, often no Content-Type is needed
      delete config.headers["Content-Type"];
    }
  }

  return config;
});

export default api;