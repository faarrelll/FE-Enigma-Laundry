export type customer = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
};

export type user = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  username: string;
};

export type product = {
  id: string;
  name: string;
  price: number;
  type: string;
};

export type order = {
  id: string;
  billDate: string;
  customer: customer;
  user: user;
  billDetails: {
    id: string;
    product: product;
    qty: number;
    price: number;
  }[];
};
