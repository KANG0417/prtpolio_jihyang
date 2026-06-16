import { personalInfo } from "@/data/portfolio";

export function IntroPageBody() {
  return (
    <div className="space-y-4">
      <p className="text-[#71717a]">Dear Visitor,</p>
      <p className="font-semibold text-[#27272a]">
        안녕하세요, {personalInfo.name} ({personalInfo.nameEn})입니다.
      </p>
      <p>{personalInfo.tagline}</p>
      <p className="text-[#71717a]">{personalInfo.role}</p>
    </div>
  );
}
