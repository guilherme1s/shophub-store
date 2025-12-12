import type { ImgHTMLAttributes } from "react";
import { Chip } from "../Chip";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { NavLink } from "react-router-dom";

interface HeroProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Hero({ ...props }: HeroProps) {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="py-16 md:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col gap-6 flex-1">
            <Chip
              fontColor="bg-white"
              text="Promoção relâmpago - Até 80% OFF"
              backgroundColor="bg-white/20"
              hasIcon
              icon={FlashOnIcon}
            />

            <div className="flex gap-6 flex-col">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Maior Venda do Ano
              </h1>

              <p className="text-lg">
                Não perca! Compre milhões de produtos com ofertas exclusivas,
                frete grátis e proteção do comprador.
              </p>

              <NavLink to="/catalogo" title="catalogo">
                <button className="py-2 px-4 w-full md:w-auto cursor-pointer bg-white text-primary text-lg font-bold rounded-md hover:bg-white/90">
                  Comprar agora
                </button>
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex flex-1">
            <div className="relative w-full aspect-square rounded-2xl bg-white/10 overflow-hidden">
              <img {...props} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
