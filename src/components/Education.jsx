import React, { useState } from 'react';
import { GraduationCap, BookOpen, Zap, HeartHandshake, Sparkles, Gamepad2, ChefHat, Mountain, Bike, Book, Tv } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { educationLogos, educationImagePositions } from '../data/portfolioData';

const SideBlock = ({ Icon, iconClass, title, items, accent = 'border-slate-800 hover:border-slate-700' }) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <Icon className={iconClass} size={18} />
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="space-y-2">
      {items.map((x, idx) => (
        <div key={idx} className={`flex items-start justify-between gap-3 p-3 bg-slate-900/50 border rounded-xl transition-all ${accent}`}>
          <div>
            <div className="text-sm font-semibold text-white">{x.name}</div>
            <div className="text-xs text-slate-500">{x.detail}</div>
          </div>
          {x.year && <span className="text-xs font-bold text-amber-400 shrink-0">{x.year}</span>}
        </div>
      ))}
    </div>
  </div>
);

const hobbyIcons = { esport: Gamepad2, cooking: ChefHat, hiking: Mountain, cycling: Bike, reading: Book, series: Tv };

const HobbyBlock = ({ title, items }) => (
  <div className="mt-12">
    <div className="flex items-center gap-3 mb-4">
      <Sparkles className="text-violet-400" size={18} />
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {items.map((h) => {
        const Icon = hobbyIcons[h.icon] ?? Sparkles;
        return (
          <div
            key={h.icon}
            className="group flex flex-col items-center justify-center gap-2 py-5 px-3 bg-slate-900/50 border border-slate-800 hover:border-violet-500/40 hover:bg-violet-500/5 rounded-xl transition-all"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
              <Icon size={20} className="text-violet-400" />
            </span>
            <span className="text-sm font-semibold text-white text-center">{h.name}</span>
          </div>
        );
      })}
    </div>
  </div>
);

// School photo with a graceful fallback when the file is missing or fails to load.
const SchoolImage = ({ src, alt, position }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/15 via-slate-800 to-cyan-500/10">
        <GraduationCap size={36} className="text-slate-500" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full h-full object-cover ${position ?? 'object-center'} group-hover:scale-105 transition-transform duration-700`}
    />
  );
};

const Education = () => {
  const { t } = useLanguage();
  const e = t.education;

  return (
    <section id="education" className="py-16 max-w-6xl mx-auto px-6 scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <GraduationCap className="text-emerald-500" size={22} />
        <h2 className="text-3xl font-bold text-white">{e.sectionTitle}</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5">
          {e.items.map((edu, idx) => {
            const logo = educationLogos[idx];
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row rounded-2xl border overflow-hidden bg-slate-900/40 transition-all ${
                  edu.current ? 'border-emerald-500/30 hover:border-emerald-500/60' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="group relative shrink-0 sm:w-44 h-36 sm:h-auto overflow-hidden bg-slate-800">
                  <SchoolImage key={logo} src={logo} alt={edu.school} position={educationImagePositions[idx]} />
                  {edu.current && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-bold rounded uppercase tracking-wide shadow-lg">
                      {e.currentLabel}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0 p-5 space-y-1.5">
                  <div className="flex flex-wrap justify-between gap-x-3">
                    <h3 className="font-bold text-white text-base leading-tight">{edu.school}</h3>
                    {edu.period && <span className="text-xs text-slate-500 tabular-nums">{edu.period}</span>}
                  </div>
                  <p className="text-emerald-400 font-semibold text-sm">{edu.degree}</p>
                  {edu.field && <p className="text-slate-300 text-xs">{edu.field}</p>}
                  {edu.gpa && (
                    <div className="inline-flex items-center px-2 py-0.5 bg-green-500/15 border border-green-500/30 rounded-lg text-green-400 text-xs font-bold">
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.highlights?.map((h, i) => (
                    <p key={i} className="text-slate-400 text-xs leading-relaxed flex gap-2">
                      <span className="text-emerald-400 shrink-0">›</span>
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <aside className="space-y-8">
          <SideBlock Icon={BookOpen} iconClass="text-cyan-500" title={e.extrasTitle} items={e.extras} />
          <SideBlock Icon={Zap} iconClass="text-amber-400" title={e.hackathonsTitle} items={e.hackathons} accent="border-amber-500/20 hover:border-amber-500/40" />
          <SideBlock Icon={HeartHandshake} iconClass="text-emerald-400" title={e.volunteeringTitle} items={e.volunteering} />
        </aside>
      </div>

      <HobbyBlock title={e.hobbiesTitle} items={e.hobbies} />
    </section>
  );
};

export default Education;
