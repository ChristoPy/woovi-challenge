import { Link } from "react-router-dom"
import { Product } from 'data/model/product';
import { formatMoney } from "../../../core/currency"
import AddToCartButton from "../add-to-cart-button";
import ProductImage from "../product-image";

interface ProductCardParams {
  product: Product
}

export default function ProductCard({ product }: ProductCardParams) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <Link to={`/produto/${product._id}`}>
        <ProductImage name={product.name} images={product.images} />
        <div className="pt-3 flex items-center justify-between">
          <p>{product.name}</p>
        </div>

        <p className="pt-1 pb-3 text-gray-900">{formatMoney(product.price)}</p>
        <AddToCartButton product={product} />
      </Link>
    </div>
  )
}
