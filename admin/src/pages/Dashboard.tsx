import SkeletonLoader from "@/components/layouts/SkeletonLoader";
import StatsCard from "@/components/layouts/StatsCard";
import Button from "@/components/partials/Button";
import Title from "@/components/partials/Title";
import { formatCurrency, formatDate } from "@/helpers/format";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Stats from "@/types/Stats";
import Order from "@/types/Order";
import reportService from "@/services/reportService";

const Dashboard = () => {
  const { token } = useSelector((state: any) => state.auth);

  /** States - Start */

  const [stats, setStats] = useState<Stats>(
    {
      totalProducts: 0,
      totalOrders: 0,
      totalUsers: 0,
      totalRevenue: 0,
      recentOrders: [],
      topProducts: [],
      loading: true,
      error: null,
    }
  );

  /** States - End */

  /** Event handlers - Start */

  const fetchStatistics = useCallback(async () => {
    try {
      setStats((prev: Stats) => ({ ...prev, loading: true, error: null }));

      // Fetch real data from server APIs
      const response = await reportService.getDashboardStats();

      if (response.data.success) {
        const stats: Stats = response.data.stats;

        setStats({
          totalProducts: stats.totalProducts || 0,
          totalOrders: stats.totalOrders || 0,
          totalUsers: stats.totalUsers || 0,
          totalRevenue: stats.totalRevenue || 0,
          recentOrders: stats.recentOrders || [],
          topProducts: stats.topProducts || [],
          loading: false,
        });
      } else {
        throw new Error(response.data.message || "Failed to fetch stats");
      }
    } catch (error: Error | any) {
      console.error("Error fetching statistics:", error);
      setStats((prev) => ({
        ...prev,
        loading: false,
        error: error.message || "Failed to load dashboard data",
      }));
    }
  }, [token]);

  /** Event handlers - End */

  /** Trigger renders - Start */

  useEffect(() => {
    // If you use a function defined outside useEffect, always list it in the dependencies.
    fetchStatistics();
  }, [token, fetchStatistics]);

  /** Trigger renders - End */

  if (stats.loading) {
    return <SkeletonLoader type="dashboard" />;
  }

  if (stats.error) {
    return (
      <div className="space-y-8">
        <div>
          <Title>Dashboard Overview</Title>
          <p className="text-gray-600 mt-2">
            Welcome back! Here&apos;s what&apos;s happening with your store
            today.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            Unable to Load Dashboard Data
          </h3>
          <p className="text-red-600 mb-4">{stats.error}</p>
          <Button
            onClick={fetchStatistics}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Title>Dashboard Overview</Title>
        <p className="text-gray-600 mt-2">
          Welcome back! Here&apos;s what&apos;s happening with your store today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Products"
          value={stats.totalProducts.toLocaleString()}
          change="+12%"
          changeType="positive"
          color="bg-blue-100"
          icon={
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          }
        />

        <StatsCard
          title="Total Orders"
          value={stats.totalOrders.toLocaleString()}
          change="+8%"
          changeType="positive"
          color="bg-green-100"
          icon={
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          }
        />

        <StatsCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          change="+15%"
          changeType="positive"
          color="bg-purple-100"
          icon={
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          }
        />

        <StatsCard
          title="Total Revenue"
          value={formatCurrency(stats.totalRevenue)}
          change="+23%"
          changeType="positive"
          color="bg-orange-100"
          icon={
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          }
        />
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {stats.recentOrders.length > 0 ? (
              stats.recentOrders.map((order: Order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      Order #{order._id?.slice(-8) || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.userId?.name ||
                        order.address?.firstName ||
                        "Customer"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDate(order.date.toString()) || "N/A"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      {formatCurrency(order.amount || 0)}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "shipped"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status || "pending"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No recent orders</p>
            )}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              Popular Products
            </h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {stats.topProducts.length > 0 ? (
              stats.topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {product.name || "Product Name"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {product.category || "Category"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">
                      {formatCurrency(product.price || 0)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Stock: {product.stock || 0}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">
                No products available
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl p-4 text-left">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="font-semibold">Add New Product</span>
            </div>
          </button>

          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl p-4 text-left">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span className="font-semibold">View Orders</span>
            </div>
          </button>

          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl p-4 text-left">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-semibold">Manage Users</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;