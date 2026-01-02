import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

interface QuantitySelectorProps {
  quantity: number;
  max: number;
  onHandleQuantity: (action: string) => void;
}

export function QuantitySelector({
  quantity,
  max,
  onHandleQuantity,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg border border-gray-300">
      <button
        onClick={() => onHandleQuantity("remove")}
        disabled={quantity <= 1}
        className="p-2 hover:bg-gray-200 active:bg-gray-300 transition border-r border-gray-300 cursor-pointer"
      >
        <RemoveOutlinedIcon fontSize="small" />
      </button>

      <span className="px-4 text-sm font-bold text-gray-800 select-none">
        {quantity}
      </span>

      <button
        onClick={() => onHandleQuantity("add")}
        disabled={quantity >= max}
        className="p-2 hover:bg-gray-200 active:bg-gray-300 transition border-l border-gray-300 cursor-pointer"
      >
        <AddOutlinedIcon fontSize="small" />
      </button>
    </div>
  );
}
