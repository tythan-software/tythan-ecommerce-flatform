import { API_CONFIG } from "../constants/config/api";

export const getProductsUrl = () => API_CONFIG.buildUrl(API_CONFIG.ENDPOINTS.PRODUCTS);
export const getProductsByCategoryUrl = (category: string) => API_CONFIG.buildUrl(API_CONFIG.ENDPOINTS.PRODUCTS_BY_CATEGORY);
export const getAllCategoriesUrl = () => API_CONFIG.buildUrl(API_CONFIG.ENDPOINTS.PRODUCT_CATEGORIES);