import { jwtDecode } from "jwt-decode";

export const AuthExpChecker = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    if (decode.exp && decode.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};
