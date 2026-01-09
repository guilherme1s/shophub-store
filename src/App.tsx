import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import { ScrollToTop } from "./Components/ScrollToTop";
import { Router } from "./Router";

export function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <DefaultLayout>
            <Router />
          </DefaultLayout>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
