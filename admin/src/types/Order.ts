import Address from "./Adress";
import User from "./User";

interface Order {
  _id: string;
  userId: User;
  name: string;
  address: Address;
  date: Date;
  amount: number;
  status: string;
}

export default Order;