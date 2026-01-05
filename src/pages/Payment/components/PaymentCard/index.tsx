import { type ReactNode } from "react";

interface PaymentCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onSelected: () => void;
}

export function PaymentCard({
  description,
  icon,
  title,
  checked,
  onSelected,
}: PaymentCardProps) {
  return (
    <label
      className={`flex gap-4 ${
        checked ? "bg-primary/5" : "bg-gray"
      } p-4 w-full border items-center ${
        checked ? " border-primary border-2" : "border-gray-300"
      } rounded-xl cursor-pointer hover:border-primary transition`}
    >
      <input
        type="radio"
        name="paymentMethod"
        className="hidden"
        checked={checked}
        onChange={onSelected}
      />

      <span className="text-primary text-xl">{icon}</span>

      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-md text-gray-600">{description}</p>
      </div>
    </label>
  );
}
