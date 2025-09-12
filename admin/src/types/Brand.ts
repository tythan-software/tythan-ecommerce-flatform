import Base from "./Base";

export default interface Brand extends Base {
  name: string;
  image: string;
  description?: string;
  website?: string;
  isActive: boolean;
}

export interface CreateOrUpdateBrand {
  name: string;
  image?: File | null;
  description: string;
  website: string;
  isActive?: boolean;
}