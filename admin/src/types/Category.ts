import Base from "./Base";

interface Category extends Base {
  name: string;
  image: string;
  description?: string;
  isActive: boolean;
}

export interface CreateOrUpdateCategory {
  name: string;
  image: File | null;
  description: string;
}

export default Category;