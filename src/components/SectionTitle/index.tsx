import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  hasBorder?: boolean;
  hasIcon?: boolean;
  icon?: ReactNode;
  description?: string;
}

export function SectionTitle({
  title,
  description,
  hasBorder = true,
  hasIcon = false,
  icon = false,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {hasBorder && (
          <span className="w-1 h-8 xl:h-9 bg-primary rounded-full" />
        )}

        {hasIcon && <span className="text-primary">{icon}</span>}

        <h1 className="text-3xl xl:text-4xl font-bold">{title}</h1>
      </div>

      {description && <p className="text-gray-600 text-xl">{description}</p>}
    </div>
  );
}
