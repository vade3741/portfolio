import React from "react";
import { CgWebsite } from "react-icons/cg";

function ProjectCards({ imgPath, title, description, demoLink, tags }) {
  return (
    <div className="card-glow group bg-dark-800 border border-dark-600 rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
      <div className="aspect-video overflow-hidden bg-dark-700 relative">
        {imgPath ? (
          <img src={imgPath} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-5 sm:p-8 bg-gradient-to-br from-[#17132d] via-dark-800 to-dark-900">
            <div className="w-full max-w-sm rounded-xl border border-dark-500 bg-dark-900/90 p-4 sm:p-5 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between gap-3 border-b border-dark-600 pb-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent text-xl">
                    <CgWebsite aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-white text-sm font-medium">Digital Sales Room</p>
                    <p className="text-gray-500 text-xs">Opportunity workspace</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
                  CRM synced
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="rounded-lg border border-dark-600 bg-dark-800 p-3">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Opportunity</p>
                  <p className="mt-2 text-gray-200 text-xs font-medium">Enterprise deal</p>
                  <p className="mt-1 text-accent text-xs">Microsoft Dynamics</p>
                </div>
                <div className="rounded-lg border border-dark-600 bg-dark-800 p-3">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">Shared room</p>
                  <p className="mt-2 text-gray-200 text-xs font-medium">Draft created</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-dark-600">
                    <div className="h-full w-3/4 rounded-full bg-accent/70" />
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    </div>
  );
}

export default ProjectCards;
