import axios from 'axios';

export const getAllProducts = async () => {
    try {
        const response = await axios.get('http://localhost:8888/api/v1/products');
        return response.data;
    } catch (error) {
        console.log("Error while fetching products", error);
    }
};

export const getProduct = async (productId: string) => {
    try {
        const response = await axios.get(`http://localhost:8888/api/v1/products/${productId}`);
        return response.data;
    } catch (error) {
        console.log("Error while fetching product", error);
    }
};

export const createProduct = async (product: any) => {
    try {
        const response = await axios.post('http://localhost:8888/api/v1/products', product);
        return response.data;
    } catch (error) {
        console.log("Error while creating product", error);
    }
};

export const updateProduct = async (product: any) => {
    try {
        const response = await axios.put(`http://localhost:8888/api/v1/products/`, product);
        return response.data;
    } catch (error) {
        console.log("Error while updating product", error);
    }
};

export const deleteProduct = async (productId: string) => {
    try {
        const response = await axios.delete(`http://localhost:8888/api/v1/products/${productId}`);
        return response.data;
    } catch (error) {
        console.log("Error while deleting product", error);
    }
};