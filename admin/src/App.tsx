import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import Brands from "./pages/Brands";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import ScrollToTop from "./components/layouts/ScrollToTop";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/** Public Routes */}
      <Route path="/login" element={<Login />} />

      {/** Protected Routes */}
      <Route path="/*" element={
        <ProtectedRoute>
              <div className="min-h-screen">
                <Navbar />
                <div className="flex w-full">
                  <div className="w-16 sm:w-64 lg:w-72 min-h-screen bg-white border-r-2 z-10 border-gray-200 fixed">
                    <Sidebar />
                  </div>
                  <div className="flex-1 px-3 sm:px-5 py-2 ml-16 sm:ml-64 lg:ml-72">
                    <ScrollToTop />
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/add-product" element={<AddProduct />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/brands" element={<Brands />} />
                      <Route path="/categories" element={<Categories />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
      } />
    </Route>
  )
);

function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;