import Base from "./Base";
import Order from "./Order";

export default interface User extends Base {
  name: string;
  email: string;
  role: string;
  avatar: string;
  isActive: boolean;
  lastLogin?: Date;
  addresses?: UserAddress[];
  orders?: Order[];
  userCart?: object;
  createdAt: Date;
}

export interface CreateOrUpdateUser {
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  isActive: boolean;
}

export interface UserAddress extends Base {
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface CreateOrUpdateUserAddress {
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
}