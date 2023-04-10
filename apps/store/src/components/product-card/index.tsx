import { MouseEvent, useContext } from "react"
import { Link } from "react-router-dom"
import { Product } from 'data/model/product';
import { StoreContext } from "../../providers/store"
import { formatMoney } from "../../core/currency"
import Button from "../button"

interface ProductCardParams {
  product: Product
}

export default function ProductCard({ product }: ProductCardParams) {
  const { addToCart, isOnCart } = useContext(StoreContext);

  const onclick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addToCart(product._id, 1)
  }

  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <Link to={`/produto/${product._id}`}>
        <img className="hover:grow hover:shadow-lg" src={product.images[0]} />
        <div className="pt-3 flex items-center justify-between">
          <p>{product.name}</p>
        </div>

        <p className="pt-1 pb-3 text-gray-900">{formatMoney(product.price)}</p>

        <Button full text="Por no Carrinho" onClick={onclick} iconRight={<>
          {
            isOnCart(product._id) ? (<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            )
          }
        </>} />
      </Link>
    </div>
  )
}
