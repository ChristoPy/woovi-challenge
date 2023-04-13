import { Product } from "data/model/product";

export interface ProductImageProps {
  name: string;
  images: Product['images']
}

export default function ProductImage({ name, images }: ProductImageProps) {
  return (
    <img
      className="object-cover w-full hover:grow hover:shadow-lg"
      src={images[0]}
      style={{ maxHeight: '336px', maxWidth: '336px' }}
      alt={name}
    />
  )
}
