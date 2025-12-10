import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Catalog } from "./pages/catalog";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}
