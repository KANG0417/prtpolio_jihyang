import { type ReactNode } from "react";
import { LetterPaperHeader } from "@/components/molecules/LetterPaperHeader";
import { LetterPaperFooter } from "@/components/molecules/LetterPaperFooter";

interface LetterPaperProps {
  children: ReactNode;
  title: string;
  pageNumber: number;
  onClose?: () => void;
  className?: string;
}

export function LetterPaper({
  children,
  title,
  pageNumber,
  onClose,
  className = "",
}: LetterPaperProps) {
  return (
    <article
      className={`letter-paper relative flex h-full flex-col overflow-hidden rounded-[2px] ${className}`}
    >
      <LetterPaperHeader
        title={title}
        pageNumber={pageNumber}
        onClose={onClose}
      />
      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 text-sm leading-[1.8] text-[#2c261c] md:px-8 md:text-base">
        {children}
      </div>
      <LetterPaperFooter />
    </article>
  );
}
