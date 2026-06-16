import { skillGroups } from "@/data/portfolio";

export function SkillsPageBody() {
  return (
    <div className="space-y-4">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h3 className="mb-2 text-xs font-bold tracking-wider text-[#6366f1] uppercase">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded border border-[#e4e4e7] bg-white/60 px-2.5 py-1 text-xs"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
