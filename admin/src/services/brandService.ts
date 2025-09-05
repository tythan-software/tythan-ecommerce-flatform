import { create } from "domain";
import api from "../config/api";
import { CreateOrUpdateBrand } from "@/types/Brand";
import { get } from "http";

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
    const response = await api.post(`${baseUrl}`, data);
    return response.data;
  },

  updateBrand: async (id: string, data: CreateOrUpdateBrand) => {
    const response = await api.put(`${baseUrl}/:${id}`, data);
    return response.data;
  },

  deleteBrand: async (id: string) => {
    const response = await api.delete(`${baseUrl}/:${id}`);
    return response.data;
  }
};

export default brandService;
