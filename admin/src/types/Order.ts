import Address from "./Adress";
import Base from "./Base";
import User from "./User";

interface Order extends Base {
  userId: User;
  name: string;
  address: Address;
  date: Date;
  amount: number;
  status: string;
}

export default Order;