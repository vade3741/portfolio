import React from "react";
import ProjectCard from "./ProjectCards";
import { RevealWrapper } from "../../hooks/useScrollReveal";

const projects = [
  {
    title: "GitSense AI",
    description:
      "A production-grade AI platform for understanding, indexing, and reasoning over large-scale software repositories — enabling natural language interaction, architectural insights, dependency analysis, documentation generation, and intelligent code discovery.",
    demoLink: "https://gitsense.dharabindal.com/",
    tags: [
      "Multi-Agent RAG",
      "Graph RAG",
      "MCP Tools",
      "FastAPI",
      "Qdrant",
      "Docker",
      "Kubernetes",
    ],
  },
];

function Projects() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Work</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-4">Featured Projects</h2>
          <p className="text-gray-500 mb-12">A selection of things I've built</p>
        </RevealWrapper>

        <div className="max-w-xl mx-auto">
          {projects.map((project, i) => (
            <RevealWrapper key={i} delay={i * 120}>
              <ProjectCard {...project} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
