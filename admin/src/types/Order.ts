import Base from "./Base";
import Product from "./Product";
import User from "./User";

export default interface Order extends Base {
  userId: User;
  name: string;
  items: OrderItem[];
  address: OrderAddress;
  date: Date;
  amount: number;
  status: string;
  paymentMethod: string;
  paymentStatus: string;
}

export interface OrderAddress extends Base {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface OrderItem {
  productId: Product;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface UpdateOrderStatus {
  status: string;
  paymentStatus: string | null;
}