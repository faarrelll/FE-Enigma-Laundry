import {
  Home,
  ShoppingBag,
  Users,
  UserCircle,
  BringToFront,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getUserId } from "../../utils/JwtDecode";
import axiosInstance from "../../api/axiosInstance";
import { useState, useEffect } from "react";
import AuthApi from "../../api/AuthApi";
import { ToastUtils } from "../../utils/ToastUtils";

function Sidebar() {
  const [profile, setProfile] = useState<{ name?: string; email?: string, role?: string }>({});
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const fetchUserProfile = async () => {
      const decode = getUserId();
      if (decode) {
        try {
          const response = await axiosInstance.get(`/users/${decode.userId}`);
          setProfile(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    ToastUtils({ message: "Logout Success", type: "success" })();
    AuthApi.logout();
  };

  return (
    <aside className="w-56 h-screen fixed top-0 left-0 bg-white border-r shadow-sm flex flex-col">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-2xl font-bold tracking-wide text-primary-500 mx-6">
          Laundry
        </h1>
      </div>

      {/* Navigation */}
      <ul className="mt-6 space-y-2 mx-6 flex-grow">
        <li>
          <Link
            to="/"
            className={`relative flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive("/")
                ? "bg-gray-100 text-primary-500 border-l-4 border-primary-500"
                : "text-secondary-700 hover:text-primary-500 hover:bg-gray-100"
            }`}
          >
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`relative flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive("/products")
                ? "bg-gray-100 text-primary-500 border-l-4 border-primary-500"
                : "text-secondary-700 hover:text-primary-500 hover:bg-gray-100"
            }`}
          >
            <ShoppingBag className="w-5 h-5 mr-3" />
            Product
          </Link>
        </li>
        <li>
          <Link
            to="/customers"
            className={`relative flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive("/customers")
                ? "bg-gray-100 text-primary-500 border-l-4 border-primary-500"
                : "text-secondary-700 hover:text-primary-500 hover:bg-gray-100"
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            Customer
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className={`relative flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive("/orders")
                ? "bg-gray-100 text-primary-500 border-l-4 border-primary-500"
                : "text-secondary-700 hover:text-primary-500 hover:bg-gray-100"
            }`}
          >
            <BringToFront className="w-5 h-5 mr-3" />
            Order
          </Link>
        </li>
        <li>
          {profile.role === "admin" ? (
            <Link
              to="/users"
              className={`relative flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive("/users")
                  ? "bg-gray-100 text-primary-500 border-l-4 border-primary-500"
                  : "text-secondary-700 hover:text-primary-500 hover:bg-gray-100"
              }`}
            >
              <UserCircle className="w-5 h-5 mr-3" />
              User
            </Link>
          ) : (
            <div></div>
          )}
        </li>
      </ul>

      {/* User Login Section */}
      <div className="p-4 border-t space-x-2 border-gray-200">
        <div className="flex items-center gap-1">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">
              {profile.name ? profile.name : "John Doe"}
            </p>
            <p className="text-xs text-gray-500">
              {profile.email ? profile.email : "johndoe@gmail.com"}
            </p>
          </div>
          <LogOut
            className="ml-auto text-gray-500 cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
