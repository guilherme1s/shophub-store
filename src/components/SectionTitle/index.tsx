interface SectionTitleProps {
  title: string;
  description?: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div>
      <div className="flex items-start gap-2">
        <span className="w-1 h-8 xl:h-9 bg-primary rounded-full" />
        <h1 className="text-3xl xl:text-4xl font-bold">{title}</h1>
      </div>

      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
