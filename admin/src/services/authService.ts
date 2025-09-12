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

  // Token creation
  createToken: async (data: any) => {
    const response = await api.get(`${baseUrl}/token`, data);
    return response.data;
  }
};

export default authService;
