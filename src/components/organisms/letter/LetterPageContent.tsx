import { type ComponentType } from "react";
import { letterPages, type LetterPageId } from "@/data/portfolio";
import { TempPageBanner } from "@/components/molecules/TempPageBanner";
import { LetterPaper } from "@/components/organisms/letter/LetterPaper";
import { IntroPageBody } from "@/components/organisms/letter/pages/IntroPageBody";
import { AboutPageBody } from "@/components/organisms/letter/pages/AboutPageBody";
import { SkillsPageBody } from "@/components/organisms/letter/pages/SkillsPageBody";
import { ExperiencePageBody } from "@/components/organisms/letter/pages/ExperiencePageBody";
import { ProjectsPageBody } from "@/components/organisms/letter/pages/ProjectsPageBody";
import { ContactPageBody } from "@/components/organisms/letter/pages/ContactPageBody";

const tempDescriptions: Record<LetterPageId, string> = {
  intro: "포트폴리오 소개 페이지입니다. 추후 인사말과 CTA를 채울 예정입니다.",
  about: "자기소개와 프로필 사진이 들어갈 임시 페이지입니다.",
  skills: "기술 스택과 숙련도가 표시될 임시 페이지입니다.",
  experience: "경력 타임라인이 들어갈 임시 페이지입니다.",
  projects: "프로젝트 카드 목록이 들어갈 임시 페이지입니다.",
  contact: "연락처와 SNS 링크가 들어갈 임시 페이지입니다.",
};

const pageBodies: Record<LetterPageId, ComponentType> = {
  intro: IntroPageBody,
  about: AboutPageBody,
  skills: SkillsPageBody,
  experience: ExperiencePageBody,
  projects: ProjectsPageBody,
  contact: ContactPageBody,
};

interface LetterPageContentProps {
  pageId: LetterPageId;
  onClose: () => void;
}

export function LetterPageContent({ pageId, onClose }: LetterPageContentProps) {
  const page = letterPages.find((p) => p.id === pageId);
  if (!page) return null;

  const Body = pageBodies[pageId];

  return (
    <LetterPaper
      title={page.title}
      pageNumber={page.index + 1}
      onClose={onClose}
    >
      <TempPageBanner label={page.label} />
      <p className="mb-4 text-sm text-[#6b5d45]">{tempDescriptions[pageId]}</p>
      <Body />
    </LetterPaper>
  );
}
