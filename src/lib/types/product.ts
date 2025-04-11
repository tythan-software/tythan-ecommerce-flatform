import { QueryParams } from "./query";

// A single product
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
}
  
// A collection of products with additional response info
export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type ProductsQueryParams = QueryParams & { category?: string | null;}