import { Product } from "./product";
import { Shopper, ShopperParams } from "./shopper";

export type Status = 'CREATED' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELED';

export interface Order {
  _id: string;
  status: Status;
  shopper: Shopper;
  products: Product[];
  total: number;
  createdAt: number;
  updatedAt?: number;
  processedAt?: number;
}

export interface OrderParams {
  shopper: ShopperParams;
  products: Product[];
}

export interface ChooseInstallmentParams {
  secret: string;
  count: number;
}
