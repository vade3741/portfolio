import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";

function ProjectCards({ imgPath, title, description, demoLink, tags }) {
  return (
    <div className="card-glow group bg-dark-800 border border-dark-600 rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
      <div className="aspect-video overflow-hidden bg-dark-700 relative">
        {imgPath ? (
          <img src={imgPath} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,108,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,108,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-3xl shadow-[0_0_30px_rgba(201,168,108,0.15)]">
              <FaRobot />
            </div>
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">GitSense AI</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/60 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg text-white font-medium mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded bg-dark-700 text-gray-500 border border-dark-600">{tag}</span>
            ))}
          </div>
        )}
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent text-sm hover:text-accent-light transition-colors no-underline group/link">
          <CgWebsite />
          <span className="group-hover/link:translate-x-1 transition-transform">View Project →</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
