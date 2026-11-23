import React from 'react';
import { Github, Linkedin, Mail, BrainCircuit, MapPin, Workflow, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/portfolioData';

const iconBtn =
  'p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 transition-all';

const Hero = () => {
  const { t, lang } = useLanguage();
  const h = t.hero;
  const cvUrl = profile.cv?.[lang];

  return (
    <section id="about" className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 blur-[130px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-20 right-1/4 w-[400px] h-[500px] bg-cyan-600/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {h.badge}
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">{h.name}</h1>

          <p className="text-xl font-medium bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            {h.title}
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={13} className="text-emerald-500 shrink-0" />
            {h.facts[h.facts.length - 1]}
          </div>

          <p className="text-base text-slate-400 max-w-lg leading-relaxed">{h.summary}</p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#projects" className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-emerald-600/25 text-sm">
              {h.btnProjects}
            </a>
            <a href="#contact" className="px-7 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all text-sm border border-slate-700">
              {h.btnContact}
            </a>
            {cvUrl && (
              <a href={cvUrl} download hrefLang={lang} className="px-7 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all text-sm border border-slate-700 flex items-center gap-2">
                <Download size={15} />
                {h.btnCV}
              </a>
            )}
          </div>

          <div className="flex gap-3 pt-1">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconBtn}>
                <Github size={17} />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconBtn}>
                <Linkedin size={17} />
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} aria-label="Email" className={iconBtn}>
                <Mail size={17} />
              </a>
            )}
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative mx-auto w-72 md:w-full aspect-square max-w-sm">
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 via-cyan-500 to-sky-500 rounded-3xl blur-sm opacity-25"></div>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
              {profile.photo ? (
                <img src={profile.photo} alt={h.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl font-extrabold text-emerald-300">
                  {profile.initials}
                </div>
              )}
            </div>

            <div className="absolute -bottom-5 -left-5 bg-slate-900/95 backdrop-blur-sm border border-slate-700 px-4 py-3 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/15 rounded-lg text-emerald-400">
                  <BrainCircuit size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">{h.gpaLabel}</div>
                  <div className="text-base font-bold text-white">4.2 / 5.0</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 px-4 py-3 rounded-2xl shadow-xl">
              <div className="text-[10px] text-slate-500 uppercase tracking-wide font-medium mb-1">{h.currentRole}</div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <Workflow size={12} className="shrink-0" />
                {h.currentRoleValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
