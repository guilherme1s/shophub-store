interface StepTitleProps {
  step: number;
  title: string;
}

export function StepTitle({ step, title }: StepTitleProps) {
  return (
    <div className="flex gap-3">
      <span className="bg-primary font-bold text-white rounded-full w-8 h-8 flex items-center justify-center">
        {step}
      </span>

      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
