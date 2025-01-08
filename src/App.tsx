import { Routes, Route } from "react-router";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateProduct from "./pages/UpdateProducts";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/update/:id" element={<UpdateProduct />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/orders" element={<Order />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
