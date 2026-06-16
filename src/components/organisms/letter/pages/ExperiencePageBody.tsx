import { experiences } from "@/data/portfolio";

export function ExperiencePageBody() {
  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div key={exp.company} className="border-l-2 border-[#6366f1]/30 pl-3">
          <h3 className="font-bold">{exp.company}</h3>
          <ul className="mt-1 space-y-1 text-xs text-[#71717a]">
            {exp.highlights.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
