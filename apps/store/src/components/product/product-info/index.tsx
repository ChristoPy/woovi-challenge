import { OperationType, graphql } from "relay-runtime"
import { useContext, useState, useEffect, startTransition } from 'react';
import AddToCartButton from '../add-to-cart-button';
import { useParams } from 'react-router';
import { useLazyLoadQuery } from "react-relay";
import { Product } from "data/model/product";
import { useTransition, animated } from "react-spring";
import Loading from "../../loading";
import { formatMoney } from "../../../core/currency";

interface ProductInfoQuery extends OperationType {
  readonly response: ProductInfoQueryResult;
}

interface ProductInfoQueryResult {
  product: Product
}


function ProductInfo() {
  const params = useParams();
  const { product } = useLazyLoadQuery<ProductInfoQuery>(
    graphql`
      query productInfoQuery($productId: String!) {
        product(_id: $productId) {
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
    { productId: params.id }
  )

  const [showSpinner, setShowSpinner] = useState<boolean>(true);
  const transition = useTransition(showSpinner, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    if (product && showSpinner) {
      startTransition(() => {
        setShowSpinner(false);
      })
    }
  }, [product]);

  return (
    <section className="px-4">
      <div className="w-full h-screen flex justify-center items-center">
        {
          transition((style, item) => item && product ? (
            <animated.div style={style}>
              <Loading />
            </animated.div>
          ) : (
            <div className="container mx-auto grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              className="object-cover w-full hover:grow hover:shadow-lg"
              src={product?.images[0]}
              style={{ maxHeight: '336px', maxWidth: '336px' }}
              alt={product?.name}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-black text-2xl">{product.name}</h1>
            <p className="mb-8 text-2xl font-bold">{formatMoney(product.price)}</p>
            <p className="pb-3 text-gray-900">{product.description}</p>

            <AddToCartButton product={product!} />
          </div>
        </div>
          ))
        }
      </div>
    </section>
  );
}

export default ProductInfo;
