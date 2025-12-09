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
      <header className={`${openMenu ? "" : "border-b-4 border-primary"}`}>
        <div className="text-center text-xs md:text-sm font-semibold py-2 bg-primary text-white">
          Frete Grátis em Compras Acima de R$ 50 | Use o Código BEMVINDO10
        </div>

        <div className="flex items-center justify-between max-w-7xl mx-4 md:mx-8 xl:mx-auto py-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            ShopHub
          </h1>

          <div className="hidden md:flex items-center gap-6 flex-1">
            <div className="w-full ml-4 lg:ml-10">
              <Search />
            </div>
            <NavHeader />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ShoppingCart />
            <button onClick={handleOpenMenu} className="p-2">
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={openMenu} />
    </>
  );
}
