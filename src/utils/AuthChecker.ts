export const AuthChecker = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};
