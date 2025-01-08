import { ProtectedRoute, JwtExpiredRoute } from "../ui/AuthRoute";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <ProtectedRoute>
      <JwtExpiredRoute>
        <div>
          <div>
            <Sidebar />
            <Outlet />
          </div>
        </div>
      </JwtExpiredRoute>
    </ProtectedRoute>
  );
}
