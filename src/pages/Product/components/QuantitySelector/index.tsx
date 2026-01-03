import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

interface QuantitySelectorProps {
  variant?: "white" | "gray";
  quantity: number;
  max: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

export function QuantitySelector({
  quantity,
  max,
  variant = "gray",
  onIncreaseQuantity,
  onDecreaseQuantity,
}: QuantitySelectorProps) {
  const VariantColors = {
    white: "bg-white",
    gray: "bg-gray",
  };

  return (
    <div
      className={`flex items-center rounded-lg border border-gray-300 ${VariantColors[variant]}`}
    >
      <button
        onClick={onDecreaseQuantity}
        disabled={quantity <= 1}
        className="p-2 hover:bg-gray-200 active:bg-gray-300 transition border-r border-gray-300 cursor-pointer"
      >
        <RemoveOutlinedIcon fontSize="small" />
      </button>

      <span className="px-4 text-sm font-bold text-gray-800 select-none">
        {quantity}
      </span>

      <button
        onClick={onIncreaseQuantity}
        disabled={quantity >= max}
        className="p-2 hover:bg-gray-200 active:bg-gray-300 transition border-l border-gray-300 cursor-pointer"
      >
        <AddOutlinedIcon fontSize="small" />
      </button>
    </div>
  );
}
