import { NavLink } from "react-router-dom";
import { Search } from "./Search";

interface MobileMenuProps {
  open: boolean;
}

export function MobileMenu({ open }: MobileMenuProps) {
  if (!open) return null;
  
  return (
    <nav className="p-4 border-b-4 border-primary">
      <Search />

      <div className="flex gap-2 flex-col mt-4 tex-xl">
        <NavLink to="/" title="início">
          <li className="flex gap-1">Iníco</li>
        </NavLink>

        <NavLink to="/catalogo" title="Catálogo">
          <li className="flex gap-1">Catálogo</li>
        </NavLink>
      </div>
    </nav>
  );
}
