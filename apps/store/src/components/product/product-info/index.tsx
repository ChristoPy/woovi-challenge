import { useContext } from 'react';
import { StoreContext } from '../../../providers/store';
import { formatMoney } from '../../../core/currency';
import AddToCartButton from '../add-to-cart-button';
import { useParams } from 'react-router';

function ProductInfo() {
  const params = useParams();
  const { store } = useContext(StoreContext);
  const product = store.products.find((p) => p._id === params.id)!;

  return (
    <section className="px-4">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="container mx-auto grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img className="object-cover w-full hover:grow hover:shadow-lg" src={product.images[0]} style={{ maxHeight: '336px', maxWidth: '336px' }} alt={product.name}/>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-black text-2xl">{product.name}</h1>
            <p className="mb-8 text-2xl font-bold">{formatMoney(product.price)}</p>
            <p className="pb-3 text-gray-900">{product.description}</p>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
