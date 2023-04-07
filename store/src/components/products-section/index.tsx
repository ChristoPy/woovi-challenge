import { graphql } from "relay-runtime"
import ProductCard from "../product-card"
import { useLazyLoadQuery } from "react-relay"
import { Product } from "../product-card/index"

export default function ProductsSection() {
  const data = useLazyLoadQuery(
    graphql`
      query productsSectionQuery {
        products {
          _id
          name
          price
          description
          category
          images
          createdAt
          updatedAt
          quantity
        }
      }
    `,
    {}
  )

  return (
    <section className="py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {
          data?.products.map((product: Product) => (
            <ProductCard product={product} key={product._id} />
          ))
        }
      </div>
    </section>
  )
}
