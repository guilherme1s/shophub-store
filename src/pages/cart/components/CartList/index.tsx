import { formatPrice } from "../../../../utils/formatPrice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { QuantitySelector } from "../../../Product/components/QuantitySelector";

interface ProductList {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartListProps {
  max: number;
  list: ProductList[];
  onRemoveProduct: (id: number) => void;
  onIncreaseQuantity: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
}

export function CartList({
  max,
  list,
  onRemoveProduct,
  onDecreaseQuantity,
  onIncreaseQuantity,
}: CartListProps) {
  return (
    <div className="bg-gray rounded-xl overflow-hidden h-fit">
      {list.map((product, index) => {
        const isLast = index === list.length - 1;

        return (
          <div
            key={product.id}
            className={`p-8 flex justify-between ${
              !isLast ? "border-b border-gray-300" : ""
            }`}
          >
            <div className="flex gap-4 items-center">
              <div className="hidden md:flex w-20 aspect-square overflow-hidden rounded-lg items-center justify-center bg-white p-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2 text-lg font-bold">
                <h2>{product.title}</h2>
                <p className="text-primary font-extrabold">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => onRemoveProduct(product.id)}
                className="p-2 text-primary hover:bg-primary/20 transition rounded-md cursor-pointer"
              >
                <DeleteOutlineOutlinedIcon fontSize="medium" />
              </button>

              <QuantitySelector
                max={max}
                variant="white"
                quantity={product.quantity}
                onIncreaseQuantity={() => onIncreaseQuantity(product.id)}
                onDecreaseQuantity={() => onDecreaseQuantity(product.id)}
              />

              <p className="text-xl font-bold">
                {formatPrice(product.price * product.quantity)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
