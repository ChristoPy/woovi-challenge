import { useContext, useState } from 'react';
import Button from '../button';
import { StoreContext } from '../../providers/store';
import { ShoppingCartItem } from '../../data/store';

function ProductList() {
  const { store, setQuantity } = useContext(StoreContext);

  const handleQuantityChange = (productId: string, quantity: number) => {
    setQuantity(productId, quantity);
  };

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-black text-2xl my-4 mb-4">Carrinho</h1>
        <ul className="grid gap-4">
          {store.shoppingCart.items.map((product: ShoppingCartItem) => (
            <li
              key={product.productId}
              className="flex items-center justify-between border-b py-4"
            >
              <p>{product.name}</p>
              <div className="flex justify-center items-center space-x-2">
                <Button
                  text="-"
                  onClick={() =>
                    handleQuantityChange(product.productId, product.quantity - 1)
                  }
                />
                <span>{product.quantity}</span>
                <Button
                  text="+"
                  onClick={() =>
                    handleQuantityChange(product.productId, product.quantity + 1)
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductList;
