import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { order } from "../../types";
import { useNavigate } from "react-router";

const fetchOrders = async (
  setter: React.Dispatch<React.SetStateAction<order[]>>
) => {
  try {
    const response = await axiosInstance.get("/bills");
    setter(response.data.data);
  } catch (error) {
    console.error("Error fetching orders: ", error);
  }
};

export default function OrderTable() {
  const [orders, setOrders] = useState<order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders(setOrders);
  }, []);

  return (
    <table className="w-full border-collapse border border-gray-200 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border border-gray-200">ID</th>
          <th className="px-4 py-2 border border-gray-200">Customer Name</th>
          <th className="px-4 py-2 border border-gray-200">Product</th>
          <th className="px-4 py-2 border border-gray-200">Date</th>
          <th className="px-4 py-2 border border-gray-200 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200">{index + 1}</td>
              <td className="px-4 py-2 border border-gray-200">
                {order.customer.name}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {order.billDetails[0].product.name}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {new Date(order.billDate as string).toLocaleString()}
              </td>
              <td className="px-4 py-2 border border-gray-200 text-center">
                <button
                  onClick={() => navigate(`/orders/${order.id}`)}
                  className="px-4 py-2 bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-600"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={5}
              className="px-4 py-2 border border-gray-200 text-center text-gray-500"
            >
              No orders found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
