import React from "react";
import { HiShare } from "react-icons/hi";
import {
  SiLinux,
  SiPostman,
  SiVercel,
  SiJupyter,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
} from "react-icons/si";
import { DiGit, DiGithubBadge } from "react-icons/di";

const tools = [
  { icon: <SiLinux />, name: "Linux" },
  { icon: <HiShare />, name: "n8n" },
  { icon: <SiJupyter />, name: "Jupyter" },
  { icon: <DiGit />, name: "Git" },
  { icon: <DiGithubBadge />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiAmazonaws />, name: "AWS" },
];

function Toolstack() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {tools.map((tool, i) => (
        <div key={i} className="group flex flex-col items-center gap-3 p-6 rounded-lg bg-dark-800 border border-dark-600 hover:border-accent/40 transition-all hover:-translate-y-1">
          <span className="text-4xl text-gray-400 group-hover:text-accent transition-colors">{tool.icon}</span>
          <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
