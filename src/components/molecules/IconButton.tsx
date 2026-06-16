import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function IconButton({
  children,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
