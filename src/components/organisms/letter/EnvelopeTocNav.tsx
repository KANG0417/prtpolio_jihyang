import { letterPages } from "@/data/portfolio";
import { TocLinkItem } from "@/components/molecules/TocLinkItem";
import type { LetterPageId } from "@/data/portfolio";

interface EnvelopeTocNavProps {
  visitedPages: Set<LetterPageId>;
  disabled?: boolean;
  onSelect: (index: number) => void;
}

export function EnvelopeTocNav({
  visitedPages,
  disabled,
  onSelect,
}: EnvelopeTocNavProps) {
  return (
    <nav
      aria-label="목차"
      className="flex w-[44%] max-w-[190px] shrink-0 flex-col justify-center border-l border-[#c8c2b8]/80 pl-4"
    >
      <p className="mb-2 text-[9px] font-medium tracking-[0.22em] text-[#8a857c]/90 uppercase">
        Contents
      </p>
      <ol className="flex flex-col gap-0.5">
        {letterPages.map((page, index) => (
          <li key={page.id}>
            <TocLinkItem
              index={index}
              label={page.label}
              isVisited={visitedPages.has(page.id)}
              disabled={disabled}
              onClick={() => onSelect(index)}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
}
