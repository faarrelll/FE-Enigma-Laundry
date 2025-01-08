import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api/ProductApi";

const CreateProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        type: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createProduct(product);
            navigate("/product");
        } catch (error) {
            console.log("Error while creating product", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value
        }));
    };

    return (
        <div className="ml-56 flex min-h-screen bg-secondary-500">
            <div className="flex-1 bg-white m-4 rounded-lg shadow-md">
                <div className="max-w-2xl mx-auto py-8 px-4">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-primary-500">Create Product</h1>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                data-testid="add-product-button"
                            >
                                Create Product
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

export default CreateProduct;