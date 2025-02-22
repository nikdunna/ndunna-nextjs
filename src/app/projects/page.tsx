import PageWrapper from "@/components/PageWrapper";
import ContentWrapper from "@/components/ContentWrapper";

const projects = [
  {
    title: "Project 1",
    description:
      "Description of your first project. What it does, technologies used, and your role.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description:
      "Description of your second project. Highlight the key features and challenges overcome.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description:
      "Description of your third project. Focus on the impact and lessons learned.",
    tech: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/yourusername/project3",
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h1 className="text-4xl md:text-6xl font-doto text-alabaster-400 mb-8 animate-glow-pulse">
          Projects
        </h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-fern_green-500/20 rounded-lg p-6 hover:border-fern_green-500/40 transition-colors duration-300"
            >
              <h2 className="text-2xl font-doto text-fern_green-400 mb-3">
                {project.title}
              </h2>
              <p className="text-alabaster-400/80 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm font-doto text-alabaster-400/60 border border-alabaster-400/20 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fern_green-400 hover:text-fern_green-300 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
