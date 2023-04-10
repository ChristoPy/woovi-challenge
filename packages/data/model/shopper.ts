export interface Address {
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  country: string;
}

export interface Shopper {
  name: string;
  email: string;
  phone: string;
  taxID: string;
  correlationID: string;
  address: Address;
}
