import api from "../config/api";

const baseUrl = "/api/users";

// User service
const userService = {
  // User registration
  userRegister: async (userData: any) => {
    const response = await api.post(`${baseUrl}`, userData);
    return response.data;
  },

  // Update user details
  updateUser: async (userId: string, userData: any) => {
    const response = await api.put(`${baseUrl}/${userId}`, userData);
    return response.data;
  },

  // Delete a user
  deleteUser: async (userId: string) => {
    const response = await api.delete(`${baseUrl}/${userId}`);
    return response.data;
  },

  // Get all users (for admin)
  getUsers: async () => {
    const response = await api.get(`${baseUrl}`);
    return response.data;
  },

  // Get user profile (if needed)
  getUserProfile: async () => {
    const response = await api.get(`${baseUrl}/profile`);
    return response.data;
  },

  // Get addresses for a user
  getUserAddresses: async (userId: string) => {
    const response = await api.get(`${baseUrl}/${userId}/addresses`);
    return response.data;
  },

  // Create a new address for a user
  createUserAddress: async (userId: string, addressData: any) => {
    const response = await api.post(`${baseUrl}/${userId}/addresses`, addressData);
    return response.data;
  },
  
  // Update an existing address for a user
  updateUserAddress: async (userId: string, addressId: string, addressData: any) => {
    const response = await api.put(`${baseUrl}/${userId}/addresses/${addressId}`, addressData);
    return response.data;
  },

  // Delete an address for a user
  deleteUserAddress: async (userId: string, addressId: string) => {
    const response = await api.delete(`${baseUrl}/${userId}/addresses/${addressId}`);
    return response.data;
  },

  // Set an address as default for a user
  setUserDefaultAddress: async (userId: string, addressId: string) => {
    const response = await api.put(`${baseUrl}/${userId}/addresses/${addressId}/default`);
    return response.data;
  }
};

export default userService;
