import { CreateOrUpdateCategory } from "@/types/Category";
import api from "../config/api";
import { objectToFormData } from "@/utils/formData";

const baseUrl = "/api/categories";

// Category service
const categoryService = {
  getCategories: async () => {
    const response = await api.get(`${baseUrl}`);
    return response.data;
  },

  getCategory: async (id: string) => {
    const response = await api.get(`${baseUrl}/:${id}`);
    return response.data;
  },

  updateCategory: async (id: string, categoryData: CreateOrUpdateCategory) => {
    const formData = objectToFormData(categoryData);
    const response = await api.put(`${baseUrl}/:${id}`, formData);
    return response.data;
  },

  createCategory: async (data: CreateOrUpdateCategory) => {
    const formData = objectToFormData(data);
    const response = await api.post(`${baseUrl}`, formData);
    return response.data;
  },

  deleteCategory: async (id: string) => {
    const response = await api.delete(`${baseUrl}/:${id}`);
    return response.data;
  }
};

export default categoryService;
