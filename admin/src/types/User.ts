import Base from "./Base";

interface User extends Base {
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export default User;