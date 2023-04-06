import { createContext, useState } from 'react';
import { Store, Product, ShoppingCartItem } from '../data/store';

interface StoreContextValue {
  store: Store;
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isOnCart: (productId: string) => boolean;
}

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreContext = createContext<StoreContextValue>({
  store: { products: [], shoppingCart: { items: [] } },
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  isOnCart: () => false,
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
      };

      const updatedItems = store.shoppingCart.items.map((item) =>
        item.productId === productId ? updatedItem : item
      );

      setStore({
        ...store,
        shoppingCart: { items: updatedItems },
      });
    } else {
      const newItem: ShoppingCartItem = {
        productId: productId,
        quantity,
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

  const contextValue: StoreContextValue = {
    store,
    addToCart,
    removeFromCart,
    clearCart,
    isOnCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
