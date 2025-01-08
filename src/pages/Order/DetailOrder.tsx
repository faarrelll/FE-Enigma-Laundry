import { useEffect, useState } from "react";
import { order } from "../../types";
import { useParams } from "react-router";
import axiosInstance from "../../api/axiosInstance";

const fetchDetailOrder = async (
  id: string,
  setter: React.Dispatch<React.SetStateAction<order | null>>
) => {
  try {
    const response = await axiosInstance.get(`/bills/${id}`);
    setter(response.data.data);
    console.log(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export default function DetailOrder() {
  const [billData, setBillData] = useState<order | null>(null);
  const params = useParams<{ id: string }>();
  const id = params.id as string;

  useEffect(() => {
    fetchDetailOrder(id, setBillData);
  }, []);

  return (
    <div className="ml-56 min-h-screen bg-secondary-100 p-6">
      <h1 className="text-3xl font-bold text-primary-500 mb-4">Order Detail</h1>

      {/* Bill Information */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl text-primary-500 font-semibold mb-4">
          Bill Information
        </h2>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Bill Date:</strong>{" "}
          {new Date(billData?.billDate as string).toLocaleString()}
        </p>
      </div>

      {/* Customer Information */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl text-primary-500 font-semibold mb-4">
          Customer Information
        </h2>
        <p>
          <strong>Name:</strong> {billData?.customer.name}
        </p>
        <p>
          <strong>Phone:</strong> {billData?.customer.phoneNumber}
        </p>
        <p>
          <strong>Address:</strong> {billData?.customer.address}
        </p>
      </div>

      {/* Bill Details */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl text-primary-500 font-semibold mb-4">
          Bill Details
        </h2>
        <table
          className="w-full border-collapse border border-gray-200
text-left"
        >
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200">Product</th>
              <th className="px-4 py-2 border border-gray-200">Qty</th>
              <th className="px-4 py-2 border border-gray-200">Price</th>
              <th className="px-4 py-2 border border-gray-200">Total</th>
            </tr>
          </thead>
          <tbody>
            {billData?.billDetails.map((detail) => (
              <tr key={detail.id} className="hover:bg-gray-50">
                <td
                  className="px-4 py-2 border
border-gray-200"
                >
                  {detail.product.name}
                </td>
                <td
                  className="px-4 py-2 border
border-gray-200"
                >
                  {detail.qty}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  Rp {detail.price.toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  Rp{" "}
                  {(detail.qty * detail.product.price).toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
