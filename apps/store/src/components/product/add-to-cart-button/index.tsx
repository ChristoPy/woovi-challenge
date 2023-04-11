import { MouseEvent, useContext } from "react"
import { Product } from 'data/model/product';
import { StoreContext } from "../../../providers/store"
import Button from "../../button"

interface AddToCartButtonParams {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonParams) {
  const { addToCart, isOnCart } = useContext(StoreContext);

  const onclick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addToCart(product._id, 1)
  }

  return (
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
  )
}
