export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  createdAt: number;
  updatedAt?: number;
  quantity: number;
}

export interface ShoppingCartItem {
  productId: string;
  quantity: number;
  name: string;
}

export interface ShoppingCart {
  items: ShoppingCartItem[];
}

export interface Store {
  products: Product[];
  shoppingCart: ShoppingCart;
}
