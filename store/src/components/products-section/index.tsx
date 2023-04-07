import { OperationType, graphql } from "relay-runtime"
import ProductCard from "../product-card"
import { useLazyLoadQuery } from "react-relay"
import { Product } from "../product-card/index"
import { useEffect, useState } from "react"
import { useTransition, animated } from 'react-spring'
import Loading from "../loading"

interface ProductsSectionQuery extends OperationType {
  readonly response: ProductsSectionQueryResult;
}

interface ProductsSectionQueryResult {
  products: Product[]
}


export default function ProductsSection() {
  const { products } = useLazyLoadQuery<ProductsSectionQuery>(
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

  const [showSpinner, setShowSpinner] = useState<boolean>(true);
  const transition = useTransition(showSpinner, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (products) {
      setShowSpinner(false);
    }
  }, [products]);

  return (
    <section className="py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      {transition((style, item) => 
          item ? (
            <animated.div style={style}>
              <Loading />
            </animated.div>
          ) : (
            products?.map((product: Product) => (
              <ProductCard product={product} key={product._id} />
            ))
          )
        )}
      </div>
    </section>
  )
}
