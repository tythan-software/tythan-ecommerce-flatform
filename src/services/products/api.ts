import { PAGINATION_CONFIG } from "../../lib/constants/config/pagination";
import { getProductsByCategoryUrl, getProductsUrl } from "../../lib/helpers/getApiUrls";
import { ProductsQueryParams, ProductsResponse } from "../../lib/types/product";
import { Category } from "../../lib/types/category";

export const productsApi = {
    async getProducts(params?: ProductsQueryParams): Promise<ProductsResponse> {
        const queryParams = new URLSearchParams();
    
        // Add pagination params
        queryParams.append(
            "limit",
            (params?.limit ?? PAGINATION_CONFIG.ITEMS_PER_PAGE).toString()
        );
        queryParams.append(
            "skip",
            (params?.skip ?? PAGINATION_CONFIG.INITIAL_ITEMS_TO_SKIP).toString()
        );
        
        // Add optional sort params
        if (params?.sortBy && params?.order) {
            queryParams.append("sortBy", params.sortBy);
            queryParams.append("order", params.order);
        }
    
        // Pick the right URL
        const url = params?.category
            ? getProductsByCategoryUrl(params.category)
            : getProductsUrl();
            
        const response = await fetch(`${url}?${queryParams}`);

        if (!response.ok) {
            throw new Error(
            `API Error: ${response.status} - failed to load products.`
            );
        }
    
        return response.json() as Promise<ProductsResponse>;
    },

    getAllCategories(): Category[] {
        return [];
    },
};