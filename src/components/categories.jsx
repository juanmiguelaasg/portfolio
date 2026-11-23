import React from 'react';
import { Workflow, Terminal, Cpu } from 'lucide-react';

export const categoryIcon = (category, size = 22) =>
  ({
    ops: <Workflow size={size} />,
    software: <Terminal size={size} />,
    hardware: <Cpu size={size} />,
  })[category];

export const categoryColor = {
  ops: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  software: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
  hardware: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
};

export const categoryBanner = {
  ops: 'from-emerald-500/25 via-emerald-500/5 to-transparent',
  software: 'from-cyan-500/25 via-cyan-500/5 to-transparent',
  hardware: 'from-amber-500/25 via-amber-500/5 to-transparent',
};
