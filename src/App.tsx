import { Routes, Route } from "react-router";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import CreateOrder from "./pages/Order/CreateOrder";
import AuthPage from "./pages/AuthPage";
import { PublicRoute } from "./components/ui/AuthRoute";
import User from "./pages/User";
import DetailOrder from "./pages/Order/DetailOrder";
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
        <Route path="/orders/create" element={<CreateOrder />} />
        <Route path="/orders/:id" element={<DetailOrder />} />
        <Route path="/users" element={<User />} />
      </Route>

      <Route
        path="/login"
        element={
          <PublicRoute>
            <AuthPage />{" "}
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
