import { createContext, useState } from 'react';
import { Store, Product, ShoppingCartItem } from '../../data/store';

interface StoreContextValue {
  store: Store;
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isOnCart: (productId: string) => boolean;
  setProducts: (products: Product[]) => void;
  setQuantity: (productId: string, quantity: number) => void;
}

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreContext = createContext<StoreContextValue>({
  store: { products: [], shoppingCart: { items: [] } },
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
  isOnCart: () => false,
  setProducts: () => { },
  setQuantity: () => { },
});

const initialStore: Store = {
  products: [],
  shoppingCart: { items: [] },
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [store, setStore] = useState<Store>(initialStore);

  const addToCart = (productId: string, quantity: number) => {
    const existingItem = store.shoppingCart.items.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      const updatedItem: ShoppingCartItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
        name: existingItem.name,
      };

      const updatedItems = store.shoppingCart.items.map((item) =>
        item.productId === productId ? updatedItem : item
      );

      setStore({
        ...store,
        shoppingCart: { items: updatedItems },
      });
    } else {
      const product = store.products.find((product) => product._id === productId)!;
      const newItem: ShoppingCartItem = {
        productId: productId,
        quantity,
        name: product.name,
      };

      setStore({
        ...store,
        shoppingCart: {
          items: [...store.shoppingCart.items, newItem],
        },
      });
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedItems = store.shoppingCart.items.filter(
      (item) => item.productId !== productId
    );

    setStore({
      ...store,
      shoppingCart: { items: updatedItems },
    });
  };

  const clearCart = () => {
    setStore({
      ...store,
      shoppingCart: { items: [] },
    });
  };

  const isOnCart = (productId: string) => {
    return store.shoppingCart.items.some(
      (item) => item.productId === productId
    );
  };

  const setQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }

    const updatedItems = store.shoppingCart.items.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );

    setStore({
      ...store,
      shoppingCart: { items: updatedItems },
    });
  };

  const setProducts = (products: Product[]) => {
    setStore({
      ...store,
      products,
    });
  };

  const contextValue: StoreContextValue = {
    store,
    addToCart,
    removeFromCart,
    clearCart,
    isOnCart,
    setProducts,
    setQuantity
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
