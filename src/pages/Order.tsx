import { useState } from "react";

export default function Order() {
  const [billId, setBillId] = useState("");
  const [bills, setBills] = useState([
    { id: 1, customer: "John Doe", amount: 100, date: "2025-01-01" },
    { id: 2, customer: "Jane Smith", amount: 150, date: "2025-01-05" },
  ]);

  const handleCreateBill = () => {
    // Tambahkan logika untuk membuat tagihan baru
    alert("Create Bill clicked!");
  };

  const handleGetBillById = () => {
    // Tambahkan logika untuk mendapatkan tagihan berdasarkan ID
    alert(`Fetching bill with ID: ${billId}`);
  };

  return (
    <div className="ml-56 min-h-screen bg-secondary-100 p-6">
      <h1 className="text-3xl font-bold text-primary-500 mb-6">Order Management</h1>

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

      {/* Get Bill by ID */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold text-primary-500 mb-4">Get Bill by ID</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={billId}
            onChange={(e) => setBillId(e.target.value)}
            placeholder="Enter Bill ID"
            className="flex-grow px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={handleGetBillById}
            className="px-4 py-2 bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-600"
          >
            Fetch Bill
          </button>
        </div>
      </div>

      {/* List All Bills */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-primary-500 mb-4">All Bills</h2>
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200">ID</th>
              <th className="px-4 py-2 border border-gray-200">Customer</th>
              <th className="px-4 py-2 border border-gray-200">Amount</th>
              <th className="px-4 py-2 border border-gray-200">Date</th>
            </tr>
          </thead>
          <tbody>
            {bills.length > 0 ? (
              bills.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200">{bill.id}</td>
                  <td className="px-4 py-2 border border-gray-200">{bill.customer}</td>
                  <td className="px-4 py-2 border border-gray-200">${bill.amount}</td>
                  <td className="px-4 py-2 border border-gray-200">{bill.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-2 border border-gray-200 text-center text-gray-500"
                >
                  No bills found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
