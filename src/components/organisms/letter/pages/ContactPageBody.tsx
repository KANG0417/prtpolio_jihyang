import { personalInfo } from "@/data/portfolio";

export function ContactPageBody() {
  return (
    <div className="space-y-3">
      <p className="text-[#71717a]">언제든 연락 주세요.</p>
      <p className="text-sm">
        <span className="text-[#a1a1aa]">Email · </span>
        {personalInfo.email}
      </p>
      <p className="text-sm">
        <span className="text-[#a1a1aa]">GitHub · </span>
        github.com/jihyang
      </p>
    </div>
  );
}
