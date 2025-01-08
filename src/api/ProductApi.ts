import axiosInstance from "./axiosInstance";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.log("Error while fetching products", error);
  }
};

export const getProduct = async (productId: string) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log("Error while fetching product", error);
  }
};

export const createProduct = async (product: any) => {
  try {
    const response = await axiosInstance.post("/products", product);
    return response.data;
  } catch (error) {
    console.log("Error while creating product", error);
  }
};

export const updateProduct = async (product: any) => {
  try {
    const response = await axiosInstance.put(`/products/`, product);
    return response.data;
  } catch (error) {
    console.log("Error while updating product", error);
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await axiosInstance.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log("Error while deleting product", error);
  }
};
