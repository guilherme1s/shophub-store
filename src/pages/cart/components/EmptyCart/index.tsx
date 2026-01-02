import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { NavLink } from "react-router-dom";

export function EmpryCart() {
  return (
    <div className="bg-gray w-full flex flex-col justify-center items-center gap-6 py-20 text-gray-600 rounded-lg">
      <span className="text-[90px] text-gray-400 leading-none">
        <ShoppingBagOutlinedIcon fontSize="inherit" />
      </span>

      <div className="text-center">
        <h4 className="text-2xl mb-2">Seu carrinho está vazio</h4>
        <p className="text-lg">
          Adicione itens ao seu carrinho e eles aparecerão aqui
        </p>
      </div>

      <NavLink to="/catalogo">
        <button className="py-2 px-3 bg-primary text-white rounded-lg font-bold cursor-pointer hover:bg-primary-hover transition">
          Começar a comprar
        </button>
      </NavLink>
    </div>
  );
}
