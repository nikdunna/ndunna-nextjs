"use client";

import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import ContentWrapper, { ProjectDetail } from "@/components/ContentWrapper";

const projects = [
  {
    title: "Project 1",
    description:
      "Description of your first project. What it does, technologies used, and your role.",
    shortDescription: "A brief overview of Project 1",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/yourusername/project1",
    media: "/path/to/project1-demo.mp4",
    mediaType: "video" as const,
    links: [
      { title: "GitHub", url: "https://github.com/yourusername/project1" },
      { title: "Live Demo", url: "https://project1-demo.com" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Project 2",
    description:
      "Description of your second project. Highlight the key features and challenges overcome.",
    shortDescription: "A brief overview of Project 2",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project2",
    media: "/path/to/project2-screenshot.jpg",
    mediaType: "image" as const,
    links: [
      { title: "GitHub", url: "https://github.com/yourusername/project2" },
      { title: "Documentation", url: "https://docs.project2.com" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Project 3",
    description:
      "Description of your third project. Focus on the impact and lessons learned.",
    shortDescription: "A brief overview of Project 3",
    tech: ["Python", "Django", "PostgreSQL"],
    link: "https://github.com/yourusername/project3",
    media: "/path/to/project3-demo.mp4",
    mediaType: "video" as const,
    links: [
      { title: "GitHub", url: "https://github.com/yourusername/project3" },
      { title: "Case Study", url: "https://case-study.project3.com" },
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    ProjectDetail | undefined
  >(undefined);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject({
      title: project.title,
      description: project.description,
      media: project.media,
      mediaType: project.mediaType,
      links: project.links,
      technologies: project.technologies,
    });
  };

  const handleClose = () => {
    setSelectedProject(undefined);
  };

  return (
    <PageWrapper>
      <ContentWrapper projectDetails={selectedProject} onClose={handleClose}>
        <h1 className="text-4xl md:text-6xl font-doto text-alabaster-400 mb-8 animate-glow-pulse">
          Projects
        </h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-fern_green-500/20 rounded-lg p-6 hover:border-fern_green-500/40 transition-all duration-300 cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              <h2 className="text-2xl font-doto text-fern_green-400 mb-3 group-hover:text-fern_green-300">
                {project.title}
              </h2>
              <p className="text-alabaster-400/80 mb-4">
                {project.shortDescription}
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
              <span className="text-fern_green-400 group-hover:text-fern_green-300 transition-colors duration-300">
                View Details →
              </span>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
