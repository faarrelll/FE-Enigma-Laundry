import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAllProducts, deleteProduct } from "../../api/ProductApi";

const ListProduct = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [quantities, setQuantities] = useState<{ productId: string; quantity: number }[]>([]);
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

    const handleIncrement = (productId: string) => {
        setQuantities((prevQuantities) => {
            const existingItem = prevQuantities.find((q) => q.productId === productId);
            if (existingItem) {
                return prevQuantities.map((q) =>
                    q.productId === productId ? { ...q, quantity: q.quantity + 1 } : q
                );
            }
            return [...prevQuantities, { productId, quantity: 1 }];
        });
    };

    const handleDecrement = (productId: string) => {
        setQuantities((prevQuantities) => {
            const existingItem = prevQuantities.find((q) => q.productId === productId);
            if (!existingItem) return prevQuantities;
            
            if (existingItem.quantity === 1) {
                return prevQuantities.filter((q) => q.productId !== productId);
            }
            
            return prevQuantities.map((q) =>
                q.productId === productId ? { ...q, quantity: q.quantity - 1 } : q
            );
        });
    };

    const handleUpdate = (productId: string) => {
        navigate(`/products/update/${productId}`);
    }

    const handleDelete = async (productId: string) => {
        try {
            await deleteProduct(productId);
            setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId));
        } catch (error) {
            console.log("Error while deleting product", error);
        }
    };

    return (
        <div className="w-full pr-8 mb-8">
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-4 text-left text-3xl font-bold text-primary-500">Name</th>
                            <th className="px-6 py-4 text-left text-3xl font-bold text-primary-500">Price</th>
                            <th className="px-6 py-4 text-left text-3xl font-bold text-primary-500">Type</th>
                            <th className="px-6 py-4 text-left text-3xl font-bold text-primary-500">Quantity</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {products.length > 0 ? (
                            products.map((product: any) => (
                                <tr key={product.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-3xl text-gray-800">{product.name}</td>
                                    <td className="px-6 py-4 text-3xl text-gray-800">Rp {product.price}</td>
                                    <td className="px-6 py-4 text-3xl text-gray-800">{product.type}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-4">
                                            <button 
                                                onClick={() => handleDecrement(product.id)}
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors text-2xl"
                                            >
                                                -
                                            </button>
                                            <span className="text-3xl text-gray-800 w-10 text-center">
                                                {quantities.find((q) => q.productId === product.id)?.quantity || 0}
                                            </span>
                                            <button 
                                                onClick={() => handleIncrement(product.id)}
                                                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors text-2xl"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4"></td>
                                        <div className="flex items-center space-x-4">
                                            <button 
                                                onClick={() => handleUpdate(product.id)}
                                                className="h-10 flex items-center justify-center  bg-primary-500 text-white hover:bg-primary-600 transition-colors text-2xl px-2 rounded"
                                            >
                                                Update
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(product.id)}
                                                className="h-10 flex items-center justify-center  bg-primary-500 text-white hover:bg-primary-600 transition-colors text-2xl px-2 rounded"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-6 py-8 text-center text-3xl text-gray-500 bg-gray-50"
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