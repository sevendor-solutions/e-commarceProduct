import React from 'react';
import { motion } from 'framer-motion';

export const Technologies: React.FC = () => {
  const techStack = [
    {
      name: 'React',
      category: 'Frontend',
      desc: 'Library for building user interfaces.',
      color: 'hover:border-cyan-400/40 hover:shadow-cyan-400/10',
      iconColor: '#61DAFB',
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      category: 'Frontend & Backend',
      desc: 'Typed superset of JavaScript.',
      color: 'hover:border-blue-500/40 hover:shadow-blue-500/10',
      iconColor: '#3178C6',
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 rounded-lg overflow-hidden">
          <rect width="100" height="100" fill="#3178C6" />
          <text x="36" y="78" fill="white" fontSize="42" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      ),
    },
    {
      name: '.NET',
      category: 'Backend & Enterprise',
      desc: 'Framework for building APIs and services.',
      color: 'hover:border-purple-500/40 hover:shadow-purple-500/10',
      iconColor: '#512BD4',
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="45" fill="#512BD4" />
          <text x="50" y="58" fill="white" fontSize="24" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">.NET</text>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      category: 'Backend & APIs',
      desc: 'Server-side JavaScript runtime environment.',
      color: 'hover:border-emerald-500/40 hover:shadow-emerald-500/10',
      iconColor: '#339933',
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="none" stroke="#339933" strokeWidth="8" />
          <polygon points="50,15 82,33 82,67 50,85 18,67 18,33" fill="#339933" opacity="0.8" />
          <text x="50" y="58" fill="white" fontSize="22" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">JS</text>
        </svg>
      ),
    },
    {
      name: 'SQL Server',
      category: 'Database & Data systems',
      desc: 'Microsoft relational database engine.',
      color: 'hover:border-red-500/40 hover:shadow-red-500/10',
      iconColor: '#CC292B',
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M10,25 C10,12 90,12 90,25 L90,45 C90,58 10,58 10,45 Z" fill="#CC292B" />
          <path d="M10,45 C10,58 90,58 90,45 L90,65 C90,78 10,78 10,65 Z" fill="#991f20" />
          <path d="M10,65 C10,78 90,78 90,65 L90,85 C90,98 10,98 10,85 Z" fill="#661415" />
          <ellipse cx="50" cy="25" rx="40" ry="12" fill="#E85E60" />
        </svg>
      ),
    },
    {
      name: 'Azure',
      category: 'Cloud Engineering',
      desc: 'Microsoft enterprise cloud suite.',
      color: 'hover:border-blue-400/40 hover:shadow-blue-400/10',
      iconColor: '#0078D4',
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <path d="M10,80 L40,15 L60,40 L90,80 Z" fill="none" stroke="#0078D4" strokeWidth="8" strokeLinejoin="round" />
          <polygon points="40,15 60,40 25,60" fill="#008AD7" />
          <polygon points="60,40 90,80 40,80" fill="#0078D4" />
        </svg>
      ),
    },
    {
      name: 'AWS',
      category: 'Cloud Engineering',
      desc: 'Amazon web services architecture.',
      color: 'hover:border-amber-500/40 hover:shadow-amber-500/10',
      iconColor: '#FF9900',
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <text x="50" y="55" fill="currentColor" className="text-slate-800 dark:text-white" fontSize="38" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">aws</text>
          <path d="M15,65 Q50,90 85,65" fill="none" stroke="#FF9900" strokeWidth="8" strokeLinecap="round" />
          <polygon points="85,65 82,50 72,60" fill="#FF9900" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      category: 'Container Orchestration',
      desc: 'Container management infrastructure.',
      color: 'hover:border-sky-400/40 hover:shadow-sky-400/10',
      iconColor: '#2496ED',
      svg: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect x="25" y="20" width="10" height="10" fill="#2496ED" rx="2" />
          <rect x="38" y="20" width="10" height="10" fill="#2496ED" rx="2" />
          <rect x="51" y="20" width="10" height="10" fill="#2496ED" rx="2" />
          <rect x="38" y="33" width="10" height="10" fill="#2496ED" rx="2" />
          <rect x="51" y="33" width="10" height="10" fill="#2496ED" rx="2" />
          <rect x="64" y="33" width="10" height="10" fill="#2496ED" rx="2" />
          <path d="M10,60 Q50,75 90,60 L90,55 Q50,70 10,55 Z" fill="#2496ED" />
          <path d="M10,55 C12,45 20,48 24,51 C35,60 55,42 85,55" fill="none" stroke="#2496ED" strokeWidth="4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Our Technology Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Modern Tools for Modern Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            We implement industry-standard frameworks and cloud architectures to assure maximum speed, reliability, and security of your systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl glass-card flex flex-col items-center text-center cursor-pointer ${tech.color}`}
            >
              <div className="mb-4 flex items-center justify-center h-16 w-16 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-slate-200/40 dark:border-zinc-800/60 p-2 shadow-inner group-hover:scale-110 transition-transform">
                {tech.svg}
              </div>
              <h3 className="font-outfit font-bold text-base text-slate-800 dark:text-white mb-1">
                {tech.name}
              </h3>
              <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-wider mb-2">
                {tech.category}
              </span>
              <p className="text-slate-500 dark:text-zinc-400 text-xs leading-relaxed max-w-[160px]">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Technologies;
