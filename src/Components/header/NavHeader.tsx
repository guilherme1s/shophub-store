import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";

interface NavHeaderProps {
  productsCount?: number;
}

export function NavHeader({ productsCount = 0 }: NavHeaderProps) {
  return (
    <nav>
      <ul className="flex gap-4 text-xl">
        <NavLink to="/" title="início">
          <li className="flex gap-1 items-center hover:text-primary transition">
            <HomeOutlinedIcon fontSize="medium" />
            Iníco
          </li>
        </NavLink>

        <NavLink to="/catalogo" title="Catálogo">
          <li className="flex gap-1 items-center hover:text-primary transition">
            <LocalOfferOutlinedIcon fontSize="medium" />
            Catálogo
          </li>
        </NavLink>

        <ShoppingCart productsCount={productsCount} />
      </ul>
    </nav>
  );
}
