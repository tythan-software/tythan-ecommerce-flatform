import api from "../config/api";

const baseUrl = "/api/reports";

// Report service
const reportService = {
  getDashboardStats: async () => {
    const response = await api.get(`${baseUrl}/stats`);
    return response.data;
  },
};

export default reportService;
