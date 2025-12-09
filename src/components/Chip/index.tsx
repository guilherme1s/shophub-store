interface ChipProps {
  backgroundColor: string;
  fontColor: string;
  text: string;
  hasIcon?: boolean;
  icon?: React.ElementType;
}

export function Chip({
  backgroundColor,
  fontColor,
  text,
  hasIcon = false,
  icon: Icon,
}: ChipProps) {
  return (
    <div
      className={`py-2 px-4 w-fit rounded-full text-sm font-bold flex items-center gap-1 ${backgroundColor} ${fontColor}`}
    >
      {hasIcon && Icon && <Icon fontSize="small" />}
      {text}
    </div>
  );
}
