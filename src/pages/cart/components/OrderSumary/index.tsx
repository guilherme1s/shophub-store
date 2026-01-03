import { NavLink } from "react-router-dom";
import { formatPrice } from "../../../../utils/formatPrice";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

interface OrderSumaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export function OrderSumary({ subtotal, shipping, total }: OrderSumaryProps) {
  return (
    <div className="bg-primary w-full rounded-xl p-8 h-fit text-white flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Resumo do pedido</h1>

      <div className="flex gap-2 flex-col border-b border-white/40">
        <div className="flex justify-between">
          <p className="text-gray">Subtotal</p>
          <p className="font-bold">{formatPrice(subtotal)}</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray">Frete</p>
          <p className="font-bold">{formatPrice(shipping)}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex justify-between text-2xl font-bold">
          <p className="text-gray">Total</p>
          <p className="font-bold">{formatPrice(total)}</p>
        </div>

        <NavLink to="#">
          <button className="p-2 w-full bg-white text-primary rounded-lg text-lg font-bold cursor-pointer">
            Ir Para Pagamento
          </button>
        </NavLink>

        <NavLink to="/catalogo">
          <button className="p-2 w-full flex items-center justify-center gap-1 bg-primary border border-white text-white rounded-lg text-md font-bold cursor-pointer">
            <ArrowBackOutlinedIcon fontSize="small" /> Continuar Comprando
          </button>
        </NavLink>
      </div>
    </div>
  );
}
