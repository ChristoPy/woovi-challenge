import { useContext } from "react";
import { StoreContext } from "../../../providers/store";

export default function Badge() {
  const { store } = useContext(StoreContext);

  if (!store.shoppingCart.items.length) return null;

  return (
    <div className="ml-4 mb-8 absolute rounded-full w-3 h-3 bg-green-500 text-white" />
  );
}
