import React from 'react';
import { Code2, Workflow, Server, Cpu, Sigma, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Fixed ordered styles – order matches the 6 categories in every language
const categoryMeta = [
  { Icon: Code2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { Icon: Workflow, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { Icon: Server, color: 'text-sky-400', bg: 'bg-sky-500/10' },
  { Icon: Cpu, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { Icon: Sigma, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { Icon: Users, color: 'text-teal-400', bg: 'bg-teal-500/10' },
];

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-16 bg-slate-900/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-slate-700" />
          <h2 className="text-3xl font-bold text-white">{t.skills.sectionTitle}</h2>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-slate-700" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(t.skills.categories).map(([category, items], idx) => {
            const { Icon, color, bg } = categoryMeta[idx] ?? categoryMeta[0];
            return (
              <div key={category} className="flex flex-col bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 hover:bg-slate-900/70 transition-all">
                <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg ${bg}`}>
                      <Icon size={13} className={color} />
                    </div>
                    <h3 className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">{category}</h3>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-600 tabular-nums">{items.length}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 p-4">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-slate-800 border border-slate-700/60 rounded-md text-[10px] font-semibold text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
