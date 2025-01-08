import Customer from "../interface/customer.interface";

const endpoint = 'http://localhost:3003/api/v1'
const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzI3NDIxLCJpYXQiOjE3MzYzMjM4MjEsInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.bn6xXRPwCyuukwn3uX0_n6Ty4mnuuZPgY9Z0DhSftPg'


export const CustomerApi = {
    create: async (data: Customer) => {
        try {
            const response = await fetch(`${endpoint}/customers`, {
                method: 'POST',
                headers: {
                    'Authorization': auth,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            if(response.ok) {
                return true
            }
        } catch(error) {
            return error
        }
    },
    getAll: async () => {
        try {
            const response = await fetch(`${endpoint}/customers`, {
                headers: {
                    "Authorization": auth
                }
            })
            const result = await response.json()
            return result.data
        } catch(error) {
            return error
        }
    },
    getById: async (id: string) => {
        try {
            const response = await fetch(`${endpoint}/customers/${id}`, {
                headers: {
                    "Authorization": auth
                }
            })
            
            const result = await response.json()
            return result.data
        } catch(error) {
            return error
        }
    } ,
    update: async (data: Customer) => {
        try {
            const response = await fetch(`${endpoint}/customers`, {
                method: 'PUT',
                headers: {
                    'Authorization': auth,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            if(response.ok) {
                return true
            }
        } catch(error) {
            return error
        }
    },
    delete: async (id: string) => {
        try {
            const response = await fetch(`${endpoint}/customers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': auth
                }
            })
    
            if(response.ok) {
                return true
            }
        } catch(error) {
            return error
        }
    }
}