import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
