interface TempPageBannerProps {
  label: string;
}

export function TempPageBanner({ label }: TempPageBannerProps) {
  return (
    <div className="mb-5 rounded-md border border-dashed border-[#6366f1]/30 bg-[#6366f1]/5 px-3 py-2 text-xs text-[#6366f1]">
      임시 페이지 · {label}
    </div>
  );
}
