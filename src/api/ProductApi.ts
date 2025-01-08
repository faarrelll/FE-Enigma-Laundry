import axios from 'axios';

export const getAllProducts = async () => {
    try {
        const response = await axios.get('http://localhost:8010/api/v1/products', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzI4Njg5LCJpYXQiOjE3MzYzMjUwODksInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.cnCmxiT_ZI3iZGhzkD_EmfrDI04sptOH2ouQ3V4t4Q4',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error while fetching products", error);
    }
};

export const getProduct = async (productId: string) => {
    try {
        const response = await axios.get(`http://localhost:8010/api/v1/products/${productId}`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzI4Njg5LCJpYXQiOjE3MzYzMjUwODksInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.cnCmxiT_ZI3iZGhzkD_EmfrDI04sptOH2ouQ3V4t4Q4',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error while fetching product", error);
    }
};

export const createProduct = async (product: any) => {
    try {
        const response = await axios.post('http://localhost:8010/api/v1/products', product, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzI4Njg5LCJpYXQiOjE3MzYzMjUwODksInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.cnCmxiT_ZI3iZGhzkD_EmfrDI04sptOH2ouQ3V4t4Q4',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error while creating product", error);
    }
};

export const updateProduct = async (product: any) => {
    try {
        const response = await axios.put(`http://localhost:8010/api/v1/products/`, product, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzI4Njg5LCJpYXQiOjE3MzYzMjUwODksInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.cnCmxiT_ZI3iZGhzkD_EmfrDI04sptOH2ouQ3V4t4Q4',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error while updating product", error);
    }
};

export const deleteProduct = async (productId: string) => {
    try {
        const response = await axios.delete(`http://localhost:8010/api/v1/products/${productId}`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzI4Njg5LCJpYXQiOjE3MzYzMjUwODksInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.cnCmxiT_ZI3iZGhzkD_EmfrDI04sptOH2ouQ3V4t4Q4',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error while deleting product", error);
    }
};