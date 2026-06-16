import { personalInfo } from "@/data/portfolio";

interface EnvelopeIdentityProps {
  showHint?: boolean;
}

export function EnvelopeIdentity({ showHint = true }: EnvelopeIdentityProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center">
      <p className="text-[10px] font-medium tracking-[0.18em] text-[#7a756c]/90 uppercase">
        Portfolio
      </p>
      <h1 className="mt-2 text-xl font-semibold tracking-tight text-[#3a3835] md:text-2xl">
        {personalInfo.name}
      </h1>
      <p className="mt-1 text-xs text-[#6e6a62]">{personalInfo.nameEn}</p>
      <p className="mt-2 text-sm text-[#524f4a]">{personalInfo.role}</p>
      {showHint && (
        <p className="mt-3 text-[11px] leading-relaxed text-[#7a756c]/90">
          목차를 눌러 편지를 꺼내 보세요
        </p>
      )}
    </div>
  );
}
