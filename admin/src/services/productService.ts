import { CreateOrUpdateProduct } from "@/types/Product";
import api from "../config/api";
import { objectToFormData } from "@/utils/formData";

const baseUrl = "/api/products";

// Product service
const productService = {
  getProducts: async () => {
    const response = await api.get(`${baseUrl}`);
    return response.data;
  },

  getProduct: async (id: string) => {
    const response = await api.get(`${baseUrl}/${id}`);
    return response.data;
  },

  updateProduct: async (id: string, data: CreateOrUpdateProduct) => {
    const formData = objectToFormData(data);
    const response = await api.put(`${baseUrl}/${id}`, formData);
    return response.data;
  },

  createProduct: async (data: CreateOrUpdateProduct) => {
    const formData = objectToFormData(data);
    const response = await api.post(`${baseUrl}`, formData);
    return response.data;
  },

  deleteProduct: async (id: string) => {
    const response = await api.delete(`${baseUrl}/${id}`);
    return response.data;
  }
};

export default productService;
