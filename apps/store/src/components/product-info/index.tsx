import { useContext } from 'react';
import { StoreContext } from '../../providers/store';
import { formatMoney } from '../../core/currency';
import AddToCartButton from '../add-to-cart-button';

function ProductInfo() {
  const { store } = useContext(StoreContext);
  const product = store.products[0]

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto grid gap-4 grid-cols-2 md:grid-cols-2">
        <div>
          <img src={product.images[0]} alt={product.name} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-black text-2xl">{product.name}</h1>
          <p className="mb-8 text-2xl font-bold">{formatMoney(product.price)}</p>
          <p className="pb-3 text-gray-900">{product.description}</p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
