import { UpdateOrderStatus } from "@/types/Order";
import api from "../config/api";
import { objectToFormData } from "@/utils/formData";

const baseUrl = "/api/orders";

// Order service
const orderService = {
  // Fetch all orders
  getOrders: async () => {
    const response = await api.get(`${baseUrl}`);
    return response.data;
  },

  // Update order status
  updateOrderStatus: async (orderId: string, data: UpdateOrderStatus) => {
    const formData = objectToFormData(data);
    const response = await api.post(`${baseUrl}/${orderId}/update-status`, formData);
    return response.data;
  },

  // Delete order
  deleteOrder: async (orderId: string) => {
    const response = await api.delete(`${baseUrl}/${orderId}`);
    return response.data;
  }
};

export default orderService;
