import React, { useState } from 'react';
import { Code, Github, GraduationCap, User } from 'lucide-react';
import { projects as projectsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';
import { categoryIcon, categoryColor, categoryBanner } from './categories';

const TypeBadge = ({ project, labels }) =>
  project.ops ? (
    <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/15 text-emerald-300 text-[9px] font-bold rounded uppercase border border-emerald-500/30 backdrop-blur-sm">
      <User size={9} /> {labels.opsLabel}
    </span>
  ) : (
    <span className="flex items-center gap-1 px-2 py-0.5 bg-slate-900/70 text-slate-300 text-[9px] font-bold rounded uppercase border border-slate-700 backdrop-blur-sm">
      <GraduationCap size={10} /> {labels.universityLabel}
    </span>
  );

const ProjectCard = ({ project, labels, onOpen }) => (
  <div
    className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 hover:bg-slate-900/70 transition-all hover:-translate-y-0.5 cursor-pointer"
    onClick={onOpen}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
  >
    <div className="relative h-40 overflow-hidden">
      {project.image ? (
        <>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`w-full h-full object-cover ${project.imagePosition ?? 'object-center'} group-hover:scale-105 transition-transform duration-700`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/80" />
        </>
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${categoryBanner[project.category]}`} />
      )}
      <div className={`absolute bottom-3 left-4 p-2 rounded-lg border backdrop-blur-sm ${categoryColor[project.category]}`}>
        {categoryIcon(project.category, 16)}
      </div>
      <div className="absolute top-3 right-3">
        <TypeBadge project={project} labels={labels} />
      </div>
    </div>
    <div className="flex flex-col flex-1 p-5">
      <div className="flex justify-between items-start gap-2 mb-1.5">
        <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">{project.title}</h3>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={(e) => e.stopPropagation()} className="text-slate-500 hover:text-white transition-colors shrink-0">
            <Github size={14} />
          </a>
        )}
      </div>
      <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="text-[9px] font-semibold px-1.5 py-0.5 bg-slate-800 text-slate-500 rounded">
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && <span className="text-[9px] text-slate-600 px-1.5 py-0.5">+{project.tags.length - 4}</span>}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selected, setSelected] = useState(null);
  const { t } = useLanguage();
  const { sectionTitle, subtitle, tabs, items, ...labels } = t.projects;

  const projects = projectsData.map((p, i) => ({ ...p, ...items[i] }));
  const filtered = activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <Code className="text-emerald-500" size={22} />
              <h2 className="text-3xl font-bold text-white">{sectionTitle}</h2>
            </div>
            <p className="text-slate-400 text-sm">{subtitle}</p>
          </div>

          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 shrink-0 flex-wrap gap-1">
            {Object.entries(tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === key ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} labels={labels} onOpen={() => setSelected(project)} />
          ))}
        </div>

        {selected && <ProjectModal project={selected} labels={labels} onClose={() => setSelected(null)} />}
      </div>
    </section>
  );
};

export default Projects;
