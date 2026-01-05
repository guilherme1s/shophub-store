import type { ReactNode } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface DefaultDialogProps {
  children: ReactNode;
  closeIcon?: boolean;
  onCloseDialog: () => void;
}

export function DefaultDialog({
  children,
  closeIcon = true,
  onCloseDialog,
}: DefaultDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative bg-white w-full max-w-lg rounded-xl shadow-xl p-6 z-10">
        <header className="flex justify-end">
          {closeIcon && (
            <button
              onClick={onCloseDialog}
              className="text-gray-500 hover:text-primary transition cursor-pointer p-2 hover:bg-primary/10 rounded-lg"
            >
              <CloseOutlinedIcon />
            </button>
          )}
        </header>

        <main className="mt-2">{children}</main>
      </div>
    </div>
  );
}
