import type { ImgHTMLAttributes } from "react";
import { Rating } from "./Rating";
import { formatPrice } from "../../utils/formatPrice";

interface ProductCardProps extends ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  price: number;
  oldPrice?: number;
  sellCount?: number;
  offBadge?: boolean;
  offBadgeValue?: number;
  rating: number;
  reviews?: number;
}

export function ProductCard({
  title,
  price,
  oldPrice,
  sellCount,
  offBadge = false,
  offBadgeValue,
  rating,
  reviews,
  ...props
}: ProductCardProps) {
  return (
    <div className="w-full flex flex-col gap-2 max-w-56 justify-between">
      <div className="relative w-full aspect-square p-4 hover:p-3 transition cursor-pointer rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
        {offBadge && (
          <span className="absolute top-2 left-2 py-1 px-2 rounded-lg bg-primary text-white font-bold z-10">
            -{offBadgeValue}%
          </span>
        )}

        <img {...props} className="max-w-full max-h-full object-contain" />
      </div>

      <div>
        <h4 className="font-bold text-xl">{title}</h4>
        <Rating value={rating} reviews={reviews} />
      </div>

      <div className="flex gap-2 flex-col md:flex-row items-baseline">
        <p className="text-primary font-bold text-xl">{formatPrice(price)}</p>
        {oldPrice && (
          <p className="line-through text-gray-600 text-sm">
            {formatPrice(oldPrice)}
          </p>
        )}
      </div>

      {sellCount && <p className="text-gray-600">{sellCount} vendidos</p>}

      <button
        className="bg-primary text-white w-full rounded-lg py-1 font-bold cursor-pointer hover:bg-primary-hover"
      >
        <div className="flex gap-2 justify-center items-center">
          Comprar
        </div>
      </button>
    </div>
  );
}
