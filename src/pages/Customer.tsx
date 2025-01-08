import { Route, Routes } from "react-router";
import ListCustomer from "./customers/ListCustomer";

export default function Customer() {
  return (
    <Routes>
      <Route index element={<ListCustomer/>}/>
    </Routes>
  )
}