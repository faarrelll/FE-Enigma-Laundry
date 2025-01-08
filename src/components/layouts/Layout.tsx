import { ProtectedRoute } from "../ui/AuthRoute";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <ProtectedRoute>
      <div>
        <div>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}
