import api from "@/lib/api";

const baseUrl = "/api/categories";

// Category service
const categoryService = {
  getCategories: async () => {
    const response = await api<any>(`${baseUrl}`);
    return response;
  },

  getCategory: async (id: string) => {
    const response = await api<any>(`${baseUrl}/${id}`);
    return response;
  },
};

export default categoryService;
