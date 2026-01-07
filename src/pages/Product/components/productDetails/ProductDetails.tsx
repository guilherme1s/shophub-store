import { type ImgHTMLAttributes } from "react";
import { Rating } from "../../../../Components/product/Rating";
import { formatPrice } from "../../../../utils/formatPrice";
import { ProductBenefits } from "./ProductBenefits";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { QuantitySelector } from "../QuantitySelector";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { NavLink } from "react-router-dom";

interface ProductDetailsProps extends ImgHTMLAttributes<HTMLImageElement> {
  category: string;
  title: string;
  rate: number;
  price: number;
  reviews: number;
  off?: boolean;
  description: string;
  offPrice?: number;
  quantity: number;
  max: number;
  added: boolean;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onAddProductToCart: () => void;
}

export function ProductDetails({
  category,
  title,
  rate,
  price,
  offPrice,
  reviews,
  added,
  description,
  off = false,
  quantity,
  max,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onAddProductToCart,
  ...props
}: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-gray rounded-2xl p-6 flex items-center justify-center">
        <div className="w-full h-[420px] flex items-center justify-center">
          <img
            {...props}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primary">
            {category.toUpperCase()}
          </span>

          {off && (
            <span className="text-sm font-semibold text-green-600">
              Desconto
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 border-b border-gray-300 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {title}
          </h1>

          <Rating value={rate} reviews={reviews} />
        </div>

        <div className="flex items-baseline gap-4">
          <p className="text-4xl font-extrabold text-primary">
            {formatPrice(price)}
          </p>
          {offPrice && (
            <p className="text-xl text-gray-500 line-through">
              {formatPrice(offPrice)}
            </p>
          )}
        </div>

        <div>
          <p className="text-gray-600">{description}</p>
        </div>

        <div>
          <ProductBenefits />
        </div>

        <div className="mt-2 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="font-bold">Quantidade: </p>
            <QuantitySelector
              quantity={quantity}
              max={max}
              onDecreaseQuantity={onDecreaseQuantity}
              onIncreaseQuantity={onIncreaseQuantity}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <button
              className="p-3 items-center bg-white border border-primary text-primary rounded-lg flex gap-2 w-full justify-center cursor-pointer transition"
              onClick={onAddProductToCart}
              disabled={added}
            >
              {added ? (
                <CheckIcon fontSize="medium" />
              ) : (
                <ShoppingCartOutlinedIcon fontSize="small" />
              )}
              <span className="font-bold">
                {added ? "Adicionado" : "Adicionar ao carrinho"}
              </span>
            </button>

            <NavLink to="/carrinho" className="w-full">
              <button
                className="p-3 bg-primary text-white rounded-lg flex gap-2 items-center justify-center w-full cursor-pointer hover:bg-primary-hover transition"
                onClick={() => onAddProductToCart()}
              >
                <ShoppingBagOutlinedIcon fontSize="small" />
                <span className="font-bold">Comprar</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
