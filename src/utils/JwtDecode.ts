import { jwtDecode } from "jwt-decode";

export const getUserId = () => {
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode<{ userId: string }>(token) : null;
  if (decoded) {
    console.log(decoded.userId);
    return decoded;
  }
  return null;
};