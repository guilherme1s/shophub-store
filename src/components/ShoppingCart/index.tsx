import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";

interface ShoppingCartProps {
  productsCount?: number;
}

export function ShoppingCart({ productsCount }: ShoppingCartProps) {
  return (
    <NavLink
      to="/carrinho"
      title="Carrinho"
      className="inline-flex items-center"
    >
      <span className="flex gap-1 items-center hover:text-primary">
        <ShoppingCartOutlinedIcon fontSize="medium" />
        <p className="hidden sm:flex">Carrinho</p>
        {productsCount !== undefined && productsCount > 0 && (
          <p className="bg-primary text-white font-bold text-sm py-1 px-2 rounded-full">
            {productsCount}
          </p>
        )}
      </span>
    </NavLink>
  );
}
