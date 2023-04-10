import { Product } from 'data/model/product';

export interface ShoppingCartItem {
  productId: string;
  quantity: number;
  name: string;
  price: number;
}

export interface ShoppingCart {
  items: ShoppingCartItem[];
}

export interface Store {
  products: Product[];
  shoppingCart: ShoppingCart;
}
