import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { updateProduct, getProduct } from "../api/ProductApi";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    type: "",
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await getProduct(id as string);
        const data = {
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          type: response.data.type,
        };
        setProduct(data);
      } catch (error) {
        console.log("Error while fetching product data", error);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProduct(product);
      navigate("/products");
    } catch (error) {
      console.log("Error while updating product", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  return (
    <div className="ml-56 flex min-h-screen bg-secondary-500">
      <div className="flex-1 bg-white m-4 rounded-lg shadow-md">
        <div className="max-w-2xl mx-auto py-8 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary-500">
              Update Product
            </h1>
          </div>

          <form
            onSubmit={handleUpdate}
            className="space-y-6"
            data-testid="add-product-modal"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl font-medium text-gray-700 mb-2"
                >
                  Product Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={product.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter product name"
                  data-testid="product-name-input"
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-xl font-medium text-gray-700 mb-2"
                >
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  required
                  value={product.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter price"
                  data-testid="product-price-input"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-xl font-medium text-gray-700 mb-2"
                >
                  Product Type
                </label>
                <input
                  id="type"
                  name="type"
                  type="text"
                  required
                  value={product.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter product type"
                  data-testid="product-type-input"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-primary-500 text-white text-xl py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                data-testid="submit-add-product"
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={() => navigate("/products")}
                className="flex-1 bg-gray-100 text-gray-700 text-xl py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                data-testid="close-add-product-modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
