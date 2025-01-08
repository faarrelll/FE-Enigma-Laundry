import axiosInstance from "./axiosInstance";

const AuthApi = {
  login: async (username: string, password: string) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  register: async (
    name: string,
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const response = await axiosInstance.post("/auth/register", {
        name,
        email,
        username,
        password,
        role: "employee",
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    try {
      localStorage.removeItem("token");
    } catch (error) {
      throw error;
    }
  },
};

export default AuthApi;
