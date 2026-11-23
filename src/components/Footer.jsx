import React from 'react';
import { Mail, Smartphone, Github, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile, imageCredits } from '../data/portfolioData';

const card =
  'flex items-center justify-center gap-3 px-6 py-4 bg-slate-900/80 rounded-2xl border border-slate-800 transition-all';

const Footer = () => {
  const { t, lang } = useLanguage();
  const f = t.footer;

  return (
    <footer id="contact" className="relative py-16 overflow-hidden border-t border-slate-900 scroll-mt-20">
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-emerald-950/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-semibold uppercase tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          {f.availableLabel}
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">{f.heading}</h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto text-base leading-relaxed">{f.description}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 flex-wrap">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className={`${card} hover:border-emerald-500/50 hover:bg-emerald-500/5 group`}>
              <Mail size={18} className="text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
              <span className="font-medium text-sm">{profile.email}</span>
            </a>
          )}
          {profile.phone && (
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className={`${card} hover:border-cyan-500/50`}>
              <Smartphone size={18} className="text-cyan-400 shrink-0" />
              <span className="font-medium text-sm">{profile.phone}</span>
            </a>
          )}
          <div className={`${card} cursor-default`}>
            <MapPin size={18} className="text-sky-400 shrink-0" />
            <span className="font-medium text-sm text-slate-400">{f.location}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-slate-900 text-slate-600 text-xs flex-wrap gap-4">
          <p>{f.copyright}</p>
          <div className="flex gap-5">
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors flex items-center gap-1.5">
                <Linkedin size={13} /> LinkedIn
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors flex items-center gap-1.5">
                <Github size={13} /> GitHub
              </a>
            )}
          </div>
        </div>

        {imageCredits.length > 0 && (
          <details className="mt-6 text-left text-[10px] text-slate-600">
            <summary className="cursor-pointer hover:text-slate-400 w-fit">
              {lang === 'hu' ? 'Képek forrása' : 'Image credits'}
            </summary>
            <ul className="mt-2 space-y-0.5">
              {imageCredits.map((c) => (
                <li key={c.url}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">{c.title}</a> — {c.author}, {c.license}
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </footer>
  );
};

export default Footer;
