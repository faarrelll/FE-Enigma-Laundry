import { useState, useEffect } from "react";
import { getAllProducts } from "../api/ProductApi";
import { useNavigate } from "react-router";

const Product = () => {
    const [products, setProducts] = useState({});
    const [quantity, setQuantity] = useState(0);
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                setProducts(response);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const handleIncrement = (productId: string) => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = (productId: string) => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <button></button>
            </div>

        </div>
    );
};