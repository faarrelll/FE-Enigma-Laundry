import { Routes, Route } from "react-router";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import CreateOrder from "./pages/Order/CreateOrder";
import AuthPage from "./pages/AuthPage";
import { PublicRoute } from "./components/ui/AuthRoute";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/orders" element={<Order />} />
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
