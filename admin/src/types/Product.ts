import Base from "./Base";

interface Product extends Base {
  type: string;
  name: string;
  images?: string[];
  price: number;
  discountedPercentage: number;
  stock: number;
  soldQuantity?: number;
  category: string;
  brand: string;
  badge: boolean;
  isAvailable: boolean;
  offer: boolean;
  description: string;
  tags: string[];
}

export interface CreateOrUpdateProduct {
  type: string;
  name: string;
  images?: string[];
  price: string;
  discountedPercentage: number;
  stock: string;
  soldQuantity?: number;
  category: string;
  brand: string;
  badge: boolean;
  isAvailable: boolean;
  offer: boolean;
  description: string;
  tags: string;
}

export default Product;