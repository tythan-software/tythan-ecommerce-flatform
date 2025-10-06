import Base from "./Base";

export default interface Category extends Base {
  name: string;
  image: string;
  description?: string;
  productCount: number;
}