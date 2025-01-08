import { useState } from "react";
import OrderTable from "../components/ui/OrderTable";

export default function Order() {
  const handleCreateBill = () => {
    // Tambahkan logika untuk membuat tagihan baru
    alert("Create Bill clicked!");
  };

  // const handleGetBillById = () => {
  //   // Tambahkan logika untuk mendapatkan tagihan berdasarkan ID
  //   alert(`Fetching bill with ID: ${billId}`);
  // };

  return (
    <div className="ml-56 min-h-screen bg-secondary-100 p-6">
      <h1 className="text-3xl font-bold text-primary-500 mb-6">Order</h1>

      {/* Create Bill */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-primary-500 mb-4">Create Bill</h2>
        <button
          onClick={handleCreateBill}
          className="px-4 py-2 bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-600"
        >
          Create New Bill
        </button>
      </div>

      {/* List All Bills */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-primary-500 mb-4">All Bills</h2>
        <OrderTable />
      </div>
    </div>
  );
}
