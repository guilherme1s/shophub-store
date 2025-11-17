import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Catalog } from "./pages/catalog";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
