import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Catalog } from "./pages/catalog";
import { Product } from "./pages/Product";
import { Payment } from "./pages/Payment";
import { Cart } from "./pages/cart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/produto/:id/:slug" element={<Product />} />
      <Route path="/pagamento" element={<Payment />} />
    </Routes>
  );
}
