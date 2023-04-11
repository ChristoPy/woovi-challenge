export interface AddressParams {
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
}

export interface Address extends AddressParams {
  country: string;
}

export interface ShopperParams {
  name: string;
  email: string;
  phone: string;
  taxID: string;
  address: Address;
}

export interface Shopper extends ShopperParams{
  correlationID: string;
}
