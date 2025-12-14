import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Rating } from "../Rating";
import type { ImgHTMLAttributes } from "react";

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
    <div className="w-full flex flex-col gap-2  max-w-56">
      <div className="flex-1 justify-end flex">
        {offBadge && (
          <span className="py-2 m-2 p-1 rounded-xl absolute w-auto bg-primary text-white font-bold">
            -{offBadgeValue}%
          </span>
        )}
        <img {...props} className="rounded-xl" />
      </div>

      <div>
        <h4 className="font-bold text-xl">{title}</h4>
        <Rating value={rating} reviews={reviews} />
      </div>

      <div className="flex gap-2 flex-col md:flex-row items-baseline">
        <p className="text-primary font-bold text-xl">R$ {price}</p>
        {oldPrice && (
          <p className="line-through text-gray-600 text-sm">R$ {oldPrice}</p>
        )}
      </div>

      {sellCount ? (
        <p className="text-gray-600">{sellCount} vendidos</p>
      ) : (
        <p className="text-gray-600">{sellCount}0 vendidos</p>
      )}

      <button className="bg-primary text-white w-full rounded-lg py-1 font-bold cursor-pointer hover:bg-primary-hover">
        <div className="flex gap-2 justify-center items-center">
          <ShoppingCartOutlinedIcon fontSize="small" />
          Adicionar
        </div>
      </button>
    </div>
  );
}
