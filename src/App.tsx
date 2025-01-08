import { Routes, Route } from "react-router";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/users" element={<User />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
