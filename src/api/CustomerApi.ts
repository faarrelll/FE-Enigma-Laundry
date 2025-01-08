import Customer from "../interface/customer.interface";
import axiosInstance from "./axiosInstance";

export const CustomerApi = {
    create: async (data: Customer) => {
        try {
            const response = await axiosInstance.post('/customers', data)
    
            if(response.status === 201) {
                return true
            } else {
                return false
            }
        } catch(error) {
            return error
        }
    },
    getAll: async () => {
        try {
            const response = await axiosInstance.get(`/customers`)
            return response.data.data
        } catch(error) {
            return error
        }
    },
    getById: async (id: string) => {
        try {
            const response = await axiosInstance.get(`/customers/${id}`)
            
            return response.data.data
        } catch(error) {
            return error
        }
    } ,
    update: async (data: Customer) => {
        try {
            const response = await axiosInstance.put('/customers', data)

            if(response.status === 200) {
                return true
            } else {
                return false
            }
        } catch(error) {
            return error
        }
    },
    delete: async (id: string) => {
        try {
            const response = await axiosInstance.delete(`/customers/${id}`)
    
            if(response.status === 204) {
                return true
            } else {
                return false
            }
        } catch(error) {
            return error
        }
    }
}