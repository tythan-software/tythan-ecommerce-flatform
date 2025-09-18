import Base from "./Base";
import User from "./User";

export default interface Order extends Base {
  userId: User;
  name: string;
  address: OrderAddress;
  date: Date;
  amount: number;
  status: string;
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