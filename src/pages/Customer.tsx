import { Outlet } from "react-router";
export default function Customer() {
  return (
    <div className="ml-56 flex justify-start items-start min-h-screen bg-secondary-500 flex-col overflow-hidden">
      <h1
        className="text-3xl font-bold text-primary-500 m-2 ms-4 mt-4"
        data-testid="customer-title"
      >
        Customer
      </h1>
      <Outlet />
    </div>
  );
}
