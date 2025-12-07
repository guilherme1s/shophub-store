import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";

export function ShoppingCart() {
    return (
        <NavLink to="/carrinho" title="início">
          <span className="flex gap-1">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </span>
        </NavLink>
    );
}
