import Base from "./Base";

interface Brand extends Base {
  name: string;
  image: string;
  description?: string;
  website?: string;
  isActive: boolean;
}

export interface CreateOrUpdateBrand {
  name: string;
  image: string | null | File;
  description: string;
  website: string;
}

export default Brand;