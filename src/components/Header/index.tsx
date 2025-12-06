import { Search } from "../Search";
import { NavHeader } from "../NavHeader";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "../ShoppingCart";
import { MobileMenu } from "../MobileMenu";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <header className={`${openMenu ? " " : "border-b-4 border-primary"}`}>
        <div className="text-center text-xs font-bold py-2 bg-primary text-white">
          <p>
            Frete Grátis em Compras Acima de R$ 50 | Use o Código BEMVINDO10
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 lg:px-32 py-3">
          <div className="flex w-full md:w-auto items-center justify-between md:justify-start">
            <h1 className="text-3xl font-bold text-primary">ShopHub</h1>

            <button className="md:hidden flex gap-4">
              <ShoppingCart />

              <button onClick={handleOpenMenu}>
                <MenuIcon fontSize="medium" />
              </button>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 w-full">
            <Search />
            <NavHeader />
          </div>
        </div>
      </header>

      <MobileMenu open={openMenu} />
    </>
  );
}
