import { customer } from "../types";

/**
 * function for change
 * {id: 1, name: "john"} to {value: 1, label: "john"}
 *
 */
export const convertCustomerToSelectOption = (customers: customer[]) => {
  return customers.map((customer) => ({
    value: customer.id,
    label: customer.name,
  }));
};
