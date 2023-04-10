import { Product } from "./product";

export type Status = 'CREATED' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELED';

export interface Order {
  _id: string;
  status: Status;
  shopper: string;
  products: Product[];
  total: number;
  createdAt: number;
}
