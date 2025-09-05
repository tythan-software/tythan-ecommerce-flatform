import api from "../config/api";

const baseUrl = "/api/auth";

// Authentication service
const authService = {
  // Admin login
  adminLogin: async (credentials: any) => {
    const response = await api.post(`${baseUrl}/login/admin`, credentials);
    return response.data;
  },

  // User login
  userLogin: async (credentials: any) => {
    const response = await api.post(`${baseUrl}/login`, credentials);
    return response.data;
  },

  // User registration
  userRegister: async (userData: any) => {
    const response = await api.post("/api/user/register", userData);
    return response.data;
  },

  // Get user profile (if needed)
  getUserProfile: async () => {
    const response = await api.get("/api/user/profile");
    return response.data;
  },
};

export default authService;
