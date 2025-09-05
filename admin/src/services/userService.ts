import api from "../config/api";

const baseUrl = "/api/users";

// User service
const userService = {
    // User registration
  userRegister: async (userData: any) => {
    const response = await api.post(`${baseUrl}`, userData);
    return response.data;
  },

  // Get user profile (if needed)
  getUserProfile: async () => {
    const response = await api.get(`${baseUrl}/profile`);
    return response.data;
  },
};

export default userService;
