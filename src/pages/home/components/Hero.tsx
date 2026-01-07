import type { ImgHTMLAttributes } from "react";
import { Chip } from "../../../Components/Chip";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { NavLink } from "react-router-dom";
import { Skeleton } from "../../../Components/Skeleton";

interface HeroProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoading?: boolean;
  isError?: boolean;
  title: string;
  url: string;
}

export function Hero({
  isLoading = false,
  isError = false,
  title,
  url,
  ...props
}: HeroProps) {
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
            <div className="relative w-full aspect-square rounded-2xl bg-white/10 overflow-hidden p-12 hover:p-10 transition">
              {isLoading && <Skeleton />}

              {!isError && !isLoading && (
                <p className="text-white text-center text-md">
                  Não foi possível carregar a imagem
                </p>
              )}

              {isError && !isLoading && (
                <NavLink to={url} title={title}>
                  <img {...props} className="w-full h-full object-contain" />
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
