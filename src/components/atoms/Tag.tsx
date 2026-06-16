import { type ReactNode } from "react";

interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-[#e4e4e7] bg-[#f4f4f5] px-3 py-1 text-xs text-[#3f3f46]">
      {children}
    </span>
  );
}
