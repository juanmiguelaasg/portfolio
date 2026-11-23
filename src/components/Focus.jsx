import React from 'react';
import { Workflow, Bot, Activity, Network, ArrowRight, ArrowDown, Target, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const cardMeta = [
  { Icon: Workflow, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { Icon: Bot, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { Icon: Activity, color: 'text-sky-400', bg: 'bg-sky-500/10' },
  { Icon: Network, color: 'text-amber-400', bg: 'bg-amber-500/10' },
];

const Focus = () => {
  const { t } = useLanguage();
  const f = t.focus;

  return (
    <section id="focus" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-20">
      <div className="flex items-center gap-4 mb-3">
        <Target className="text-emerald-500" size={22} />
        <h2 className="text-3xl font-bold text-white">{f.sectionTitle}</h2>
      </div>
      <p className="text-slate-400 text-sm max-w-3xl mb-10">{f.intro}</p>

      <div className="grid sm:grid-cols-2 gap-5">
        {f.cards.map((c, idx) => {
          const { Icon, color, bg } = cardMeta[idx] ?? cardMeta[0];
          return (
            <div key={idx} className="p-5 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-slate-700 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${bg}`}>
                  <Icon size={18} className={color} />
                </div>
                <h3 className="font-bold text-white">{c.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{c.text}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-sky-500/5">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5 text-center">{f.pipelineTitle}</h3>
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-3">
          {f.pipeline.map((step, idx) => (
            <React.Fragment key={step.name}>
              <a
                href="#projects"
                className="flex-1 max-w-xs mx-auto lg:mx-0 w-full text-center px-4 py-4 bg-slate-900/80 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition-all"
              >
                <div className="font-mono font-bold text-emerald-300">{step.name}</div>
                <div className="text-xs text-slate-400 mt-1">{step.role}</div>
              </a>
              {idx < f.pipeline.length - 1 && (
                <div className="flex justify-center text-slate-600">
                  <ArrowRight size={20} className="hidden lg:block" />
                  <ArrowDown size={20} className="lg:hidden" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3 mb-5">
          <Compass className="text-sky-400" size={20} />
          <h3 className="text-xl font-bold text-white">{f.goalsTitle}</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {f.goals.map((goal, idx) => (
            <div
              key={idx}
              className={`flex gap-4 p-4 bg-slate-900/40 border rounded-xl hover:border-sky-500/30 transition-all ${
                idx === 0 ? 'sm:col-span-2 border-sky-500/30' : 'border-slate-800'
              }`}
            >
              <div className="shrink-0 w-7 h-7 rounded-full bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 text-xs font-bold">
                {idx + 1}
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-1">{goal.title}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{goal.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Focus;
