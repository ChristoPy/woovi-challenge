import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import ShoppingCart from "./pages/shopping-cart";
import Product from "./pages/product";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="/carrinho" element={<ShoppingCart />} />
      <Route path="/produto/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
