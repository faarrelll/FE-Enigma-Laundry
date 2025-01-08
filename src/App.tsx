import { Routes, Route } from "react-router";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListCustomer from "./pages/customers/ListCustomer";
import DetailCustomer from "./pages/customers/DetailCustomer";
import CreateCustomer from "./pages/customers/CreateCustomer";
import EditCustomer from "./pages/customers/EditCustomer";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/customers" element={<Customer />}>
          <Route index element={<ListCustomer/>}/>
          <Route path="create" element={<CreateCustomer/>} />
          <Route path=":id/detail" element={<DetailCustomer/>} />
          <Route path=":id/edit" element={<EditCustomer/>} />
        </Route>
        <Route path="/orders" element={<Order />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
