import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3003/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzI4NzEyLCJpYXQiOjE3MzYzMjUxMTIsInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.Ht8UGxtWxlCeSctXQrEvUG7AnHRkEWZ-rqJpgJ0gXUo";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
