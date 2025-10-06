import api from "@/lib/api";

const baseUrl = "/api/products";

// Product service
const productService = {
  getProducts: async () => {
    const response = await api<any>(`${baseUrl}`);
    return response;
  },

  getProduct: async (id: string) => {
    const response = await api<any>(`${baseUrl}/${id}`);
    return response;
  },
};

export default productService;
