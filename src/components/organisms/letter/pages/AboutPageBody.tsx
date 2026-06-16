import { Tag } from "@/components/atoms/Tag";
import { personalInfo } from "@/data/portfolio";

export function AboutPageBody() {
  return (
    <div className="space-y-4">
      <p>{personalInfo.bio}</p>
      <div className="flex flex-wrap gap-2">
        {["React", "Next.js", "TypeScript", "UI/UX"].map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
