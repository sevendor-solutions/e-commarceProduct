import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web Apps' | 'Mobile Apps' | 'Enterprise'>('All');

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'Enterprise'] as const;

  const projects = [
    {
      title: 'Aether Analytics',
      desc: 'A real-time telemetry dashboard designed for high-traffic SaaS products. Monitors over 10M events per second with sub-second latency.',
      category: 'Web Apps',
      techs: ['React', 'Node.js', 'AWS', 'TypeScript'],
      link: '#',
      // Custom CSS Visual illustration representing a dashboard
      visual: (
        <div className="absolute inset-0 bg-slate-900 flex flex-col p-3 font-mono text-[9px] text-zinc-400 select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
            <span className="text-cyan-400 font-bold">AETHER_DASH v1.4</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-emerald-400 text-[8px]">LIVE</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-zinc-800/50 p-1.5 rounded border border-zinc-700/30">
              <span className="text-[7px] text-zinc-500 uppercase">Requests</span>
              <div className="text-zinc-100 font-bold mt-0.5 text-xs font-outfit">18.4k</div>
            </div>
            <div className="bg-zinc-800/50 p-1.5 rounded border border-zinc-700/30">
              <span className="text-[7px] text-zinc-500 uppercase">CPU Load</span>
              <div className="text-violet-400 font-bold mt-0.5 text-xs font-outfit">14.2%</div>
            </div>
            <div className="bg-zinc-800/50 p-1.5 rounded border border-zinc-700/30">
              <span className="text-[7px] text-zinc-500 uppercase">Error Rate</span>
              <div className="text-emerald-400 font-bold mt-0.5 text-xs font-outfit">0.02%</div>
            </div>
          </div>
          {/* Simple Chart simulation */}
          <div className="flex-1 bg-zinc-850 rounded border border-zinc-800/50 p-2 flex items-end gap-1 overflow-hidden">
            <div className="bg-cyan-500 h-1/3 flex-1 rounded-t-sm" />
            <div className="bg-violet-500 h-2/3 flex-1 rounded-t-sm animate-pulse" />
            <div className="bg-cyan-500 h-1/2 flex-1 rounded-t-sm" />
            <div className="bg-violet-600 h-4/5 flex-1 rounded-t-sm animate-pulse delay-500" />
            <div className="bg-cyan-400 h-3/5 flex-1 rounded-t-sm" />
          </div>
        </div>
      ),
    },
    {
      title: 'Pulse Health',
      desc: 'A HIPAA-compliant mobile application offering direct patient-doctor teleconferencing, prescription scheduling, and vital logging.',
      category: 'Mobile Apps',
      techs: ['React Native', 'TypeScript', 'Azure', 'Node.js'],
      link: '#',
      visual: (
        <div className="absolute inset-0 bg-indigo-950 flex items-center justify-center p-4">
          <div className="w-[110px] h-[190px] rounded-2xl border-4 border-zinc-800 bg-zinc-900 overflow-hidden flex flex-col p-2 relative shadow-xl">
            <div className="w-12 h-2 rounded-full bg-zinc-800 mx-auto mb-2" />
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-4 h-4 rounded-full bg-rose-500/25 flex items-center justify-center text-rose-500 text-[8px] font-bold">♥</div>
              <span className="text-[8px] text-white font-outfit font-semibold">PulseSync</span>
            </div>
            <div className="flex-1 bg-zinc-950 rounded-lg p-1.5 flex flex-col justify-between">
              <span className="text-[6px] text-zinc-500">USER HEARTBEAT</span>
              <div className="flex items-baseline gap-1 my-1">
                <span className="text-sm font-bold text-rose-500 font-outfit">72</span>
                <span className="text-[6px] text-zinc-400">BPM</span>
              </div>
              <div className="w-full bg-rose-500/10 h-6 rounded flex items-center justify-center overflow-hidden border border-rose-500/10">
                <span className="text-[6px] text-rose-400 animate-pulse font-mono">/\_/\_/\_</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'OmniStore Headless',
      desc: 'Headless e-commerce system featuring multi-currency transactions, full Stripe checkout flow, and inventory syncing APIs.',
      category: 'Web Apps',
      techs: ['React', 'TypeScript', 'SQL Server', 'Stripe'],
      link: '#',
      visual: (
        <div className="absolute inset-0 bg-slate-50 dark:bg-zinc-900 p-4 flex flex-col justify-between border border-slate-200/20">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-800 dark:text-white font-outfit">ApexStore</span>
            <span className="text-[8px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold">Cart: 2</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="border border-slate-200 dark:border-zinc-800 rounded p-1.5 flex flex-col gap-1">
              <div className="bg-slate-200 dark:bg-zinc-800 h-10 w-full rounded" />
              <span className="text-[7px] font-bold dark:text-zinc-300">Neo Glasses</span>
              <span className="text-[6px] text-violet-500 font-bold">$129.00</span>
            </div>
            <div className="border border-slate-200 dark:border-zinc-800 rounded p-1.5 flex flex-col gap-1">
              <div className="bg-slate-200 dark:bg-zinc-800 h-10 w-full rounded" />
              <span className="text-[7px] font-bold dark:text-zinc-300">Quantum Pods</span>
              <span className="text-[6px] text-violet-500 font-bold">$89.00</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Apex Cloud ERP',
      desc: 'A robust resource planning panel built for automated logistical shipping, inventory, invoicing, and auditing pipelines.',
      category: 'Enterprise',
      techs: ['.NET', 'SQL Server', 'Docker', 'React'],
      link: '#',
      visual: (
        <div className="absolute inset-0 bg-[#0F0C1B] p-4 flex flex-col font-mono text-[8px] text-zinc-400">
          <div className="flex justify-between border-b border-zinc-800 pb-2 mb-2">
            <span className="text-violet-400 font-bold flex items-center gap-1">
              <Layers className="w-3 h-3 text-cyan-400" /> APEX_CORE_ERP
            </span>
            <span className="text-zinc-500">node_cluster_3</span>
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex justify-between items-center bg-zinc-900/60 p-1.5 rounded border border-zinc-800/40">
              <span className="text-slate-300">✓ DB_SYNCHRONIZER</span>
              <span className="text-emerald-400">STABLE</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900/60 p-1.5 rounded border border-zinc-800/40">
              <span className="text-slate-300">⚡ GATEWAY_DECRYPT</span>
              <span className="text-cyan-400">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-900/60 p-1.5 rounded border border-zinc-800/40">
              <span className="text-slate-300">⚠ CONTAINER_POOL</span>
              <span className="text-amber-400">OVERLOAD_REALLOC</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Our Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Crafting Real-World Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            Review our latest projects built for scalability, robustness, and visually outstanding client interactions.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 border ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-transparent shadow-lg shadow-violet-500/20'
                  : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid of Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl glass-card border border-slate-200/50 dark:border-white/5 shadow-lg overflow-hidden flex flex-col hover:shadow-xl hover:border-violet-500/20 dark:hover:border-cyan-500/10 transition-all duration-300 cursor-pointer"
              >
                {/* Visual Area */}
                <div className="h-56 relative w-full overflow-hidden border-b border-slate-200/40 dark:border-zinc-800/40 bg-zinc-100 dark:bg-zinc-950">
                  {project.visual}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.link}
                      className="p-3 rounded-full bg-white text-zinc-900 shadow hover:scale-110 active:scale-95 transition-transform"
                      aria-label="View Project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <Sparkles className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-outfit font-bold text-xl text-slate-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Badges Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techs.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-zinc-850 text-slate-600 dark:text-zinc-300 border border-slate-200/40 dark:border-zinc-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Portfolio;
