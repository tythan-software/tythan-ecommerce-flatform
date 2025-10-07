import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import {
  FaList,
  FaUsers,
  FaBox,
  FaChevronDown,
  FaChevronRight,
  FaTags,
  FaEnvelope,
} from "react-icons/fa";
import { MdDashboard, MdAnalytics } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaGrip, FaFolderOpen } from 'react-icons/fa6';
import { FaStickyNote } from 'react-icons/fa';

interface Item {
  title: string;
  icon: React.ReactNode;
  path: string;
  description?: string;
  badge?: string | null;
  isCategory?: boolean;
}

interface TreeNode extends Item {
  children?: Item[];
}

const Sidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    Products: false,
  });

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !Object.entries(prev).find(([key]) => key === categoryName)?.[1],
    }));
  };

  const sidebarItems: TreeNode[] = [
    {
      title: "Overview",
      icon: <MdDashboard />,
      path: "/",
      description: "Dashboard overview",
      badge: null,
    },
    {
      title: "Agent Support",
      icon: <MdAnalytics />,
      path: "/support",
      description: "AI-powered support",
      badge: "New",
    },
    {
      title: "Products",
      icon: <BiPackage />,
      path: "#",
      isCategory: true,
      children: [
        {
          title: "Add Product",
          icon: <IoMdAdd />,
          path: "/add-product",
          description: "Add new products",
        },
        {
          title: "Product List",
          icon: <FaList />,
          path: "/products",
          description: "Manage all products",
        },
        {
          title: "Categories",
          icon: <FaTags />,
          path: "/categories",
          description: "Manage categories",
        },
        {
          title: "Brands",
          icon: <FaBox />,
          path: "/brands",
          description: "Manage brands",
        },
      ],
    },
    {
      title: "Orders",
      icon: <HiOutlineClipboardList />,
      path: "/orders",
      description: "Manage customer orders",
      badge: null,
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/users",
      description: "User management",
    },
    {
      title: "Contacts",
      icon: <FaEnvelope />,
      path: "/contacts",
      description: "Customer messages & support",
      badge: null,
    },
    {
      title: "Apps",
      icon: <FaGrip />,
      path: "#",
      isCategory: true,
      children: [
        {
          title: "Sticky Notes",
          icon: <FaStickyNote />,
          path: "/notes",
          description: "Manage your sticky notes",
        },
      ],
    },
    {
      title: "Media",
      icon: <FaFolderOpen />,
      path: "/media",
      description: "Manage media files",
      badge: null,
    },
  ];

  const renderNavItem = (item: TreeNode, isChild = false) => {
    if (item.isCategory) {
      const isExpanded = Object.entries(expandedCategories).find(([key]) => key === item.title)?.[1] || false;

      return (
        <div key={item.title} className="mb-2">
          <button
            onClick={() => toggleCategory(item.title)}
            className="w-full flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 mx-1 sm:mx-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 group"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="text-base sm:text-lg transition-transform group-hover:scale-110 flex-shrink-0">
                {item.icon}
              </span>
              <span className="hidden sm:inline-flex font-medium truncate">
                {item.title}
              </span>
            </div>
            <span className="hidden sm:inline-flex flex-shrink-0">
              {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
            </span>
          </button>
          <div
            className={`ml-3 sm:ml-4 space-y-1 transition-all duration-300 overflow-hidden ${
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.children?.map((child) => renderNavItem(child, true))}
          </div>
        </div>
      );
    }

    return (
      <NavLink
        key={item.title}
        to={item.path}
        className={({ isActive }) =>
          `flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 mx-1 sm:mx-2 rounded-lg transition-all duration-200 group ${
            isActive
              ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-50 hover:text-black"
          } ${isChild ? "text-sm" : ""}`
        }
        title={item.description}
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <span
            className={`${
              isChild ? "text-sm sm:text-base" : "text-base sm:text-lg"
            } transition-transform group-hover:scale-110 flex-shrink-0`}
          >
            {item.icon}
          </span>
          <div className="hidden sm:flex flex-col min-w-0 flex-1">
            <span
              className={`font-medium truncate ${isChild ? "text-sm" : ""}`}
            >
              {item.title}
            </span>
            {!isChild && (
              <span className="text-xs text-gray-400 group-hover:text-gray-600 truncate">
                {item.description}
              </span>
            )}
          </div>
        </div>
        {item.badge && (
          <span className="hidden lg:inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full flex-shrink-0">
            {item.badge}
          </span>
        )}
      </NavLink>
    );
  };

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      {/* Logo/Header */}
      <div className="p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-black to-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <FaBox className="text-white text-sm sm:text-lg" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg sm:text-xl text-gray-900">
              Admin Panel
            </h1>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Dashboard Active
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-2 sm:py-4 overflow-y-auto overflow-x-hidden">
        <div className="space-y-1 px-1 sm:px-0">
          {sidebarItems.map((item) => renderNavItem(item))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
