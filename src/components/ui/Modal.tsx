"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

export function Modal({
  open,
  onCloseAction,
  children,
}: {
  open: boolean;
  onCloseAction: () => void;
  children: ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-charcoal/45 p-4">
      <div className="relative w-full max-w-3xl rounded-lg bg-warm p-4 shadow-soft">
        <Button
          aria-label="Close modal"
          className="absolute right-3 top-3 h-9 w-9 px-0"
          onClick={onCloseAction}
          variant="secondary"
        >
          <X size={16} />
        </Button>
        {children}
      </div>
    </div>
  );
}
