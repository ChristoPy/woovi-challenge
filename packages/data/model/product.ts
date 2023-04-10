export type Category = 'ELECTRONICS' | 'FASHION' | 'HOME' | 'GROCERY' | 'SPORTS' | 'TOYS' | 'BOOKS' | 'OTHER';

export interface ProductParams {
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  createdAt: number;
  updatedAt?: number;
  quantity: number;
}

export interface Product extends ProductParams {
  _id: string;
}
