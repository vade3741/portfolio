import React from "react";
import { FaCode, FaBriefcase } from "react-icons/fa";
import { RevealWrapper } from "../../hooks/useScrollReveal";

const achievements = [
  { icon: <FaBriefcase />, title: "Software Engineer Intern — Mindtickle", description: "Fortunate to secure internships as a Software Engineer at Mindtickle, gaining hands-on experience and contributing to their projects." },
  { icon: <FaCode />, title: "Competitive Programming", description: "Highest rating of 1635 at Leetcode, with 500+ DSA questions solved. Highest rating of 1100 at Codeforces. Active participant on GeeksForGeeks." },
];

function Acheivements() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Recognition</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-16">Achievements</h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <RevealWrapper key={i} delay={i * 100}>
              <div className="card-glow group p-6 bg-dark-800 border border-dark-600 rounded-lg hover:border-accent/30 transition-all duration-300 h-full">
                <span className="text-2xl text-accent mb-4 block group-hover:scale-110 transition-transform origin-left">{a.icon}</span>
                <h3 className="text-lg text-white font-medium mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acheivements;
