import { SectionLabel } from "@/components/atoms/SectionLabel";
import { CloseButton } from "@/components/molecules/CloseButton";
import { personalInfo } from "@/data/portfolio";

interface LetterPaperHeaderProps {
  title: string;
  pageNumber: number;
  onClose?: () => void;
}

export function LetterPaperHeader({
  title,
  pageNumber,
  onClose,
}: LetterPaperHeaderProps) {
  return (
    <header className="relative z-10 flex items-start justify-between gap-3 border-b border-[#d4cec4]/90 px-6 pt-5 pb-3 md:px-8">
      <div className="min-w-0 flex-1">
        <SectionLabel>Portfolio</SectionLabel>
        <h2 className="mt-1 text-lg font-semibold text-[#3a3835] md:text-xl">
          {title}
        </h2>
      </div>
      <div className="flex shrink-0 items-start gap-3">
        <div className="text-right">
          <p className="text-[10px] text-[#8a857c]">{personalInfo.nameEn}</p>
          <p className="text-xs text-[#524f4a]">
            {String(pageNumber).padStart(2, "0")}
          </p>
        </div>
        {onClose && <CloseButton variant="inline" onClick={onClose} />}
      </div>
    </header>
  );
}
