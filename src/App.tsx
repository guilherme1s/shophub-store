import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Catalog } from "./pages/catalog";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ProductProvider } from "./contexts/ProductContext";
import { Product } from "./pages/Product";
import { CartProvider } from "./contexts/CartContext";
import { Payment } from "./pages/Payment";

export function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/produto/:id/:slug" element={<Product />} />
              <Route path="/pagamento" element={<Payment />} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
