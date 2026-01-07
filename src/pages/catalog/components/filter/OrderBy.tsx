import type { ChangeEvent } from "react";

interface OrderByProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function OrderBy({ options, value, onChange }: OrderByProps) {
  const onChangeSelectedOption = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <p className="text-lg font-bold mb-2">Ordenar por</p>
      <select
        value={value}
        name="orderBy"
        id="orderBy"
        className="w-full bg-white p-2 rounded-lg"
        onChange={onChangeSelectedOption}
      >
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
