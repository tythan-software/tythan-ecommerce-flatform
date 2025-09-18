import { isTokenExpired } from "@/utils/auth";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token || isTokenExpired(token) || !isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
