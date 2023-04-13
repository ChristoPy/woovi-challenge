import { useContext, useEffect, useState } from 'react';
import Button from '../../button';
import { StoreContext } from '../../../providers/store';
import { ShoppingCartItem } from '../../../data/store';
import { formatMoney } from '../../../core/currency';

function ProductList() {
  const { store, setQuantity } = useContext(StoreContext);
  const [total, setTotal] = useState(0);

  const caculateTotal = () => {
    return store.shoppingCart.items.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0)
  };


  const handleQuantityChange = (productId: string, quantity: number) => {
    setQuantity(productId, quantity);
  };


  useEffect(() => {
    setTotal(caculateTotal());
  }, [store.shoppingCart.items]);

  return (
    <section className="py-8 mt-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-black text-2xl my-4 mb-4">Carrinho</h1>
        <ul className="grid gap-4">
          {store.shoppingCart.items.map((product: ShoppingCartItem) => (
            <li
              key={product.productId}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <p>{product.name}</p>
                <p>{formatMoney(product.price)}</p>
              </div>
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
        <div className="flex justify-end items-center mt-4">
          <p className="text-2xl font-bold">Total: {formatMoney(total)}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
