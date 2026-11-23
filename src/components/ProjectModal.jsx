import React, { useEffect } from 'react';
import { X, Github, GraduationCap, User } from 'lucide-react';
import { categoryIcon, categoryColor, categoryBanner } from './categories';

const ProjectModal = ({ project, labels, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />

      <div
        className="animate-modal-in relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative h-52 sm:h-60 rounded-t-2xl overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className={`w-full h-full object-cover ${project.imagePosition ?? 'object-center'}`} />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${categoryBanner[project.category]}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900" />
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-all z-20"
        >
          <X size={16} />
        </button>

        <div className="p-6 pt-0 -mt-4 relative">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold rounded-lg border bg-slate-900 ${categoryColor[project.category]}`}>
              {categoryIcon(project.category, 14)}
              {labels.categoryLabels[project.category]}
            </span>
            {project.ops ? (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500/10 text-emerald-300 text-[11px] font-bold rounded-lg border border-emerald-500/25 uppercase">
                <User size={11} /> {labels.opsLabel}
              </span>
            ) : (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-slate-800 text-slate-300 text-[11px] font-bold rounded-lg border border-slate-700 uppercase">
                <GraduationCap size={12} /> {labels.universityLabel}
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">{project.title}</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {project.details?.length > 0 && (
            <div className="mb-5">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="flex-1 h-px bg-slate-800"></span>
                {labels.detailsLabel}
                <span className="flex-1 h-px bg-slate-800"></span>
              </h4>
              <ul className="space-y-3">
                {project.details.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700/60">
                {tag}
              </span>
            ))}
          </div>

          {project.credit && <p className="text-[10px] text-slate-600 mb-3">📷 {project.credit}</p>}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-sm font-semibold text-white rounded-xl transition-all"
            >
              <Github size={15} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
