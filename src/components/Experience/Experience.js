import React from "react";
import { RevealWrapper } from "../../hooks/useScrollReveal";

const experiences = [
  {
    company: "Mindtickle",
    role: "Software Engineer",
    period: "June 2025 — September 2026",
    location: "Pune",
    highlights: [
      "Integrated Auto Room Creation feature for the Digital Sales Room (DSR) product, where we auto-generated draft sales rooms based on CRM opportunity data.",
      "Developed content visibility (hide/unhide) controls for Digital Sales Room using React/TypeScript and backend RPC validation; automated regression testing with Playwright via a reusable MCP test server.",
      "Integrated CRM abstraction layer supporting Microsoft Dynamics from platform on DSR: gRPC/Protobuf contracts and Go Kafka workers for real-time deal, contact, and account ingestion.",
      "Shipped deep linking for sales room sections/assets, migrated the asset picker from iframe to a Module Federation micro-frontend architecture.",
      "Developed EJS email templates and notification payloads for the Notification Hub, integrating with orchestration services via RabbitMQ to deliver dynamic, event-driven emails.",
      "Built internal n8n automations for product managers to reduce manual workflows and improve team productivity.",
    ],
    tech: "Golang, Ruby, Rabbit MQ, Kafka, Redis, CRM, MySQL, React, GraphQL",
  },
  {
    company: "Mindtickle",
    role: "Software Engineer Intern",
    period: "June 2024 — June 2025",
    location: "Pune",
    highlights: [
      "Developed Clone Settings and Export Settings features with JavaScript and Node.js, automating configuration replication and exports across organizations.",
      "Refactored 40+ gRPC services in Go and Java to use Google's standard gRPC health-check protocol, improving interoperability and service monitoring.",
      "Built an end-to-end customer sentiment analysis pipeline to analyze call transcripts, extracting insights into customer feedback, feature adoption, and product sentiment"
    ],
    tech: "Node, Express, Apache Airflow (DAGs), Python",
  },
];

function Experience() {
  return (
    <div className="bg-dark-900 pt-32 pb-20">
      <div className="section-divider max-w-6xl mx-auto mb-0" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <RevealWrapper>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Career</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-16">
            Work Experience
          </h2>
        </RevealWrapper>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-dark-600 to-transparent" />

          {experiences.map((exp, i) => (
            <RevealWrapper key={i} delay={i * 150}>
              <div className="relative pl-8 md:pl-20 mb-16 last:mb-0">
                <div className={`absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-accent -translate-x-[5px] ${i === 0 ? "timeline-dot-active" : ""}`} />

                <div className="card-glow bg-dark-800 border border-dark-600 rounded-lg p-6 md:p-8 hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-white font-medium">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.split(", ").map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded bg-dark-700 text-gray-500 border border-dark-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
