import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8010/proxy/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlbmlnbWFjYW1wIiwiZXhwIjoxNzM2MzE0MTc3LCJpYXQiOjE3MzYzMTA1NzcsInVzZXJJZCI6ImRhNGFkODhiLTk5YjItNGJkZi04Y2M3LTU2M2Q0NjFkNTBlZSIsInJvbGUiOiJhZG1pbiIsInNlcnZpY2VzIjpudWxsfQ.SLr9JDN5ZRbAKh5Dvt2i4ZAmtwHOC3AtKyjDOPi0tSA";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
