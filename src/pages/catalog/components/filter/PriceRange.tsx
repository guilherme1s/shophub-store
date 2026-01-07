import React, { useEffect, useState } from "react";
import { formatPrice } from "../../../../utils/formatPrice";

interface PriceRangeProps {
  min: number;
  max: number;
  step?: number;
  onChangeRange: (value: number) => void;
}

export function PriceRange({
  min,
  max,
  step = 50,
  onChangeRange,
}: PriceRangeProps) {
  const [value, setValue] = useState(max);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChangeRange(newValue);
  };

  useEffect(() => {
    setValue(max);
  }, [max]);

  return (
    <div>
      <p className="text-lg font-bold mb-2">Faixa de preço</p>
      <input
        type="range"
        className="accent-primary w-full"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <p className="text-gray-600">R$ 0,00 - {formatPrice(value)}</p>
    </div>
  );
}
