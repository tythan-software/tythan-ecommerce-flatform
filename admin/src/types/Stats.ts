import Order from "./Order";
import Product from "./Product";

interface Stats {
  totalProducts: number;
  totalOrders: number;
  totalUsers: number;
  totalRevenue: number;
  recentOrders: Order[];
  topProducts: Product[];
  loading?: boolean;
  error?: string | null;
}

export default Stats;
