import { CreateOrUpdateBrand } from "@/types/Brand";
import api from "../config/api";
import { objectToFormData } from "@/utils/formData";

const baseUrl = "/api/brands";

// Brand service
const brandService = {
  getBrands: async () => {
    const response = await api.get(`${baseUrl}`);
    return response.data;
  },

  getBrand: async (id: string) => {
    const response = await api.get(`${baseUrl}/:${id}`);
    return response.data;
  }, 

  createBrand: async (data: CreateOrUpdateBrand) => {
    data.isActive = data.isActive ?? true; // Default to true if not provided
    const formData = objectToFormData(data);
    const response = await api.post(`${baseUrl}`, formData);
    return response.data;
  },

  updateBrand: async (id: string, data: CreateOrUpdateBrand) => {
    data.isActive = data.isActive ?? true; // Default to true if not provided
    const formData = objectToFormData(data);
    const response = await api.put(`${baseUrl}/:${id}`, formData);
    return response.data;
  },

  deleteBrand: async (id: string) => {
    const response = await api.delete(`${baseUrl}/:${id}`);
    return response.data;
  }
};

export default brandService;
