import { projects } from "@/data/portfolio";

export function ProjectsPageBody() {
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="rounded border border-[#e4e4e7] bg-white/50 p-3"
        >
          <h3 className="font-bold">{project.name}</h3>
          <p className="mt-1 text-xs text-[#71717a]">{project.description}</p>
        </div>
      ))}
    </div>
  );
}
