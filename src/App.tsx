import { Routes, Route } from "react-router";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import CreateOrder from "./pages/Order/CreateOrder";
import AuthPage from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";
import DetailOrder from "./pages/Order/DetailOrder";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/orders/create" element={<CreateOrder />} />
          <Route path="/orders/:id" element={<DetailOrder />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
