import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart";

export function NavHeader() {
  return (
    <nav>
      <ul className="flex gap-4">
        <NavLink to="/" title="início">
          <li className="flex gap-1 items-center hover:text-primary transition text-2xl">
            <HomeOutlinedIcon fontSize="large" />
            Iníco
          </li>
        </NavLink>

        <NavLink to="/catalogo" title="Catálogo">
          <li className="flex gap-1 items-center hover:text-primary transition text-2xl">
            <LocalOfferOutlinedIcon fontSize="medium" />
            Catálogo
          </li>
        </NavLink>

        <ShoppingCart />
      </ul>
    </nav>
  );
}
