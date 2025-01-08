import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAllProducts, deleteProduct } from "../../api/ProductApi";
import { splitUUID } from "../../utils";
import Modal from "./Modal";

const ListProduct = ({
  setIsOpen,
  setSelectedId,
  products,
  setProducts,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  products: any;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [quantities, setQuantities] = useState<
    { productId: string; quantity: number }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data.data);
      } catch (error) {
        console.log("Error while fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleUpdate = (productId: string) => {
    navigate(`/products/update/${productId}`);
  };

  return (
    <div className="relative w-full pr-8 mb-8">
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-lg font-bold text-primary-500">
                ID
              </th>
              <th className="px-6 py-4 text-left text-lg font-bold text-primary-500">
                Name
              </th>
              <th className="px-6 py-4 text-left text-lg font-bold text-primary-500">
                Price
              </th>
              <th className="px-6 py-4 text-left text-lg font-bold text-primary-500">
                Type
              </th>
              <th className="px-6 py-4 text-left text-lg font-bold text-primary-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.length > 0 ? (
              products.map((product: any) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-lg text-gray-800">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-800">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-800">
                    Rp {product.price}
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-800">
                    {product.type}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleUpdate(product.id)}
                        className="h-10 flex items-center justify-center  bg-primary-500 text-white hover:bg-primary-600 transition-colors text-lg px-2 rounded"
                        data-testid={`edit-product-button-${splitUUID(
                          product.id
                        )}`}
                      >
                        Update
                      </button>
                      <button
                        // onClick={() => handleDelete(product.id)}
                        onClick={() => {
                          setSelectedId(product.id);
                          setIsOpen(true);
                        }}
                        className="h-10 flex items-center justify-center  bg-primary-500 text-white hover:bg-primary-600 transition-colors text-lg px-2 rounded"
                        data-testid={`delete-product-button-${splitUUID(
                          product.id
                        )}`}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-8 text-center text-xl text-gray-500 bg-gray-50"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
