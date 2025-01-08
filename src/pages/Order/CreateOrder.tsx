import Select from "react-select";
import axiosInstance from "../../api/axiosInstance";
import { useEffect, useState } from "react";
import { convertCustomerToSelectOption } from "../../utils";
import { product } from "../../types";
import axios from "axios";
import toast from "react-hot-toast";

type option = {
  value: string;
  label: string;
};

const fetchCustomers = async (
  setter: React.Dispatch<React.SetStateAction<option[]>>
) => {
  try {
    const response = await axiosInstance.get("/customers");
    const customers = convertCustomerToSelectOption(response.data.data);
    setter(customers);
  } catch (error) {
    console.error("Error fetching customers: ", error);
  }
};

const fetchProducts = async (
  setter: React.Dispatch<React.SetStateAction<product[]>>
) => {
  try {
    const response = await axiosInstance.get("/products");
    setter(response.data.data);
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};

const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  customer: option | null
) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {
    customerId: customer?.value,
    billDetails: [
      {
        product: {
          id: formData.get("product"),
        },
        quantity: formData.get("quantity"),
      },
    ],
  };

  try {
    const response = await axiosInstance.post("/bills", data);
    console.log("Order created: ", response.data.data);
    toast.success("Order created successfully");
  } catch (error) {
    console.error("Error creating order: ", error);
    toast.error("failed creating order");
  }
};

export default function CreateOrder() {
  const [customers, setCustomers] = useState<option[]>([]);
  const [products, setProducts] = useState<product[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<option | null>(null);

  useEffect(() => {
    fetchCustomers(setCustomers);
    fetchProducts(setProducts);
  }, []);

  return (
    <div className="ml-56 flex justify-center items-center min-h-screen bg-secondary-500">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-primary-500 mb-6 text-center">
          Create Order
        </h1>

        <form
          className="space-y-4"
          onSubmit={(e) => handleSubmit(e, selectedCustomer)}
        >
          {/* Customer Name */}
          <div>
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-700"
            >
              Customer
            </label>
            <Select
              classNamePrefix={"customer-select"}
              isClearable
              isSearchable
              placeholder="Select customer"
              name="color"
              options={customers}
              onChange={setSelectedCustomer}
            />
          </div>

          {/* Product */}
          <div>
            <label
              htmlFor="product"
              className="block text-sm font-medium text-gray-700"
            >
              Product
            </label>
            <select
              id="product"
              name="product"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Enter quantity"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
