import Base from "./Base";

export default interface Product extends Base {
  name: string;
  images: string[];
  price: number;
  originalPrice: number;
  discountedPercentage: number;
  isAvailable: boolean;
  category: string;
  description?: string;
  rating: number;
}