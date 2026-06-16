import { personalInfo } from "@/data/portfolio";

export function LetterPaperFooter() {
  return (
    <footer className="relative z-10 border-t border-[#e4e4e7] px-8 py-3 md:px-10">
      <p className="text-center text-[10px] tracking-[0.15em] text-[#a1a1aa] uppercase">
        {personalInfo.name}
      </p>
    </footer>
  );
}
