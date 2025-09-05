import { CreateOrUpdateProduct } from "@/types/Product";
import api from "../config/api";

const baseUrl = "/api/products";

// Product service
const productService = {
  getProducts: async () => {
    const response = await api.get(`${baseUrl}`);
    return response.data;
  },

  getProduct: async (id: string) => {
    const response = await api.get(`${baseUrl}/:${id}`);
    return response.data;
  },

  updateProduct: async (id: string, productData: CreateOrUpdateProduct) => {
    const response = await api.put(`${baseUrl}/:${id}`, productData);
    return response.data;
  },

  createProduct: async (productData: CreateOrUpdateProduct) => {
    const response = await api.post(`${baseUrl}`, productData);
    return response.data;
  },

  deleteProduct: async (id: string) => {
    const response = await api.delete(`${baseUrl}/:${id}`);
    return response.data;
  }
};

export default productService;
