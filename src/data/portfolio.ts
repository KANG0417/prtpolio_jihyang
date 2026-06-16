export const personalInfo = {
  name: "지향",
  nameEn: "Ji-hyang",
  role: "Frontend Developer",
  roles: ["Frontend Developer", "Full-stack Learner", "UI Builder"],
  tagline: "주니어에서 시작해, 풀스택으로 성장 중인 프론트엔드 개발자",
  bio: "사용자 경험을 중시하는 프론트엔드 개발자입니다. React와 Next.js를 중심으로 웹 서비스를 설계·구현하며, 필요에 따라 백엔드와 인프라까지 확장해 풀스택으로 성장하고 있습니다. 깔끔한 UI, 세심한 인터랙션, 유지보수 가능한 코드를 지향합니다.",
  email: "hello@jihyang.dev",
  github: "https://github.com/jihyang",
  blog: "https://blog.jihyang.dev",
} as const;

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", note: "시맨틱 마크업 & 접근성" },
      { name: "CSS", note: "반응형 · 애니메이션" },
      { name: "JavaScript", note: "ES6+ · 비동기 처리" },
      { name: "React", note: "컴포넌트 설계 · 상태 관리" },
      { name: "Next.js", note: "App Router · SSR/SSG" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", note: "스키마 설계 · 쿼리 최적화" },
      { name: "Supabase", note: "Auth · Realtime · Storage" },
    ],
  },
] as const;

export const experiences = [
  {
    company: "마더클럽 (Motherclub)",
    badge: "현 직장",
    period: "현재",
    highlights: [
      "Next.js 기반 서비스 신규 개발 (풀스택 단독 개발)",
      "Node.js / Prisma / MySQL / Docker 운영",
      "Claude API 연동, Bunny.net 영상 스트리밍 파이프라인 구축",
    ],
  },
  {
    company: "디지털서커스",
    badge: "",
    period: "",
    highlights: [
      "Adobe Animate / CreateJS 기반 인터랙티브 학습 프로그램 유지보수",
      "HTML/CSS 유지보수 및 크로스브라우저 대응",
    ],
  },
] as const;

export const projects = [
  {
    id: "motherclub",
    name: "마더클럽 (Motherclub)",
    description:
      "EdTech 플랫폼. Next.js 기반 풀스택 서비스로 영상 스트리밍, AI 연동, 학습 콘텐츠 관리를 제공합니다.",
    tags: ["Next.js", "Prisma", "MySQL", "Claude API", "Docker"],
    github: "https://github.com/jihyang/motherclub",
    demo: "https://motherclub.example.com",
    gradient: "from-violet-600/30 to-indigo-600/20",
    featured: true,
  },
  {
    id: "docslingo",
    name: "DocsLingo",
    description:
      "개발자 문서 번역 도구. Claude API와 Supabase를 활용해 기술 문서를 빠르고 정확하게 다국어로 변환합니다.",
    tags: ["Next.js", "Claude API", "Supabase", "TypeScript"],
    github: "https://github.com/jihyang/docslingo",
    demo: "https://docslingo.example.com",
    gradient: "from-cyan-600/25 to-blue-600/15",
    featured: false,
  },
  {
    id: "carbon-dashboard",
    name: "Carbon Emissions Dashboard",
    description:
      "PCF(Product Carbon Footprint) 시각화 대시보드. Recharts와 Supabase로 탄소 배출 데이터를 직관적으로 분석합니다.",
    tags: ["Next.js", "Recharts", "Supabase", "TypeScript"],
    github: "https://github.com/jihyang/carbon-dashboard",
    demo: "https://carbon.example.com",
    gradient: "from-emerald-600/25 to-teal-600/15",
    featured: false,
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const letterPages = [
  { id: "intro", label: "Intro", title: "소개의 글", index: 0 },
  { id: "about", label: "About", title: "저를 소개합니다", index: 1 },
  { id: "skills", label: "Skills", title: "Tech Stack", index: 2 },
  { id: "experience", label: "Experience", title: "경력", index: 3 },
  { id: "projects", label: "Projects", title: "프로젝트", index: 4 },
  { id: "contact", label: "Contact", title: "연락처", index: 5 },
] as const;

export type LetterPageId = (typeof letterPages)[number]["id"];
