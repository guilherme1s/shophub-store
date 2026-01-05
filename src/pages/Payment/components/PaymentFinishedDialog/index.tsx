import { NavLink } from "react-router-dom";
import { DefaultDialog } from "../../../../components/DefaultDialog";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface PaymentFinishedDialogProps {
  onCloseDialog: () => void;
}

export function PaymentFinishedDialog({
  onCloseDialog,
}: PaymentFinishedDialogProps) {
  return (
    <DefaultDialog onCloseDialog={onCloseDialog} closeIcon={false}>
      <div className="w-full flex flex-col items-center gap-6 p-4 rounded-lg">
        <span className="w-32 h-32 flex items-center justify-center text-[90px] text-success bg-success/10 rounded-full">
          <CheckCircleOutlineIcon fontSize="inherit" />
        </span>

        <div className="text-center">
          <h4 className="text-3xl font-extrabold mb-2">Pedido confirmado!</h4>
          <p className="text-xl text-gray-500">
            Seu pedido foi processado com sucesso.
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <NavLink to="/catalogo">
            <button
              className="p-2 w-full bg-primary text-white rounded-lg font-bold cursor-pointer hover:bg-primary-hover transition"
            >
              Continuar comprando
            </button>
          </NavLink>

          <NavLink to="/">
            <button
              className="p-2 w-full border-primary border text-primary rounded-lg font-bold cursor-pointer hover:bg-primary/10 transition"
            >
              Página inicial
            </button>
          </NavLink>
        </div>
      </div>
    </DefaultDialog>
  );
}
