import { useContext, useEffect, useState } from 'react';
import Button from '../button';
import { StoreContext } from '../../providers/store';
import { ShoppingCartItem } from '../../data/store';
import { formatMoney } from '../../core/currency';

function ProductInfo() {
  const { store } = useContext(StoreContext);
  const product = store.products[0]

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-black text-2xl my-4 mb-4">Carrinho</h1>
        <p className="text-2xl font-bold">{product.name}</p>
        <p>{formatMoney(product.price)}</p>
        <div className="flex justify-end items-center mt-4">
          {/* <p className="text-2xl font-bold">Total: {formatMoney(total)}</p> */}
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
