import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { NavLink } from "react-router-dom";

export function EmptyPendingPayments() {
  return (
    <div className="bg-gray w-full flex flex-col justify-center items-center gap-6 py-20 text-gray-600 rounded-lg">
      <span className="text-[90px] text-gray-400 leading-none">
        <AttachMoneyIcon fontSize="inherit" />
      </span>

      <div className="text-center">
        <h4 className="text-2xl mb-2">Nenhum pagamento pendente</h4>
      </div>

      <NavLink to="/catalogo">
        <button className="py-2 px-3 bg-primary text-white rounded-lg font-bold cursor-pointer hover:bg-primary-hover transition">
          Começar a comprar
        </button>
      </NavLink>
    </div>
  );
}
