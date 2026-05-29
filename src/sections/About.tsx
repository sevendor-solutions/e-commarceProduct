import React from 'react';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: 8, suffix: '+' },
    { label: 'Projects Completed', value: 150, suffix: '+' },
    { label: 'Active Developers', value: 50, suffix: '+' },
    { label: 'Client Satisfaction', value: 99, suffix: '%' },
  ];

  const highlights = [
    { title: 'Agile Product Design', desc: 'We deliver functional prototypes rapidly, iterating closely based on user testing.' },
    { title: 'Robust Security Audited', desc: 'Enterprise-grade encryption and protocol testing baked into every system layer.' },
    { title: 'Expert Dedicated Teams', desc: 'Access senior software engineers, solution architects, and professional designers.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            About Our Company
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Accelerating Digital Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            We are a team of expert engineers, developers, and product creators committed to crafting robust digital ecosystems. We combine architectural excellence with sleek design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Mission & Vision Columns */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-white/5 relative group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-slate-800 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                To build high-performance, intelligent digital products that solve complex business hurdles, empowering startups and enterprise teams to innovate and grow at scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-white/5 relative group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-slate-800 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                To become the global cornerstone of software excellence, setting design and architectural benchmarks for the web, mobile, and cloud environments of tomorrow.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us & Lists */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-outfit font-bold text-2xl text-slate-800 dark:text-white mb-4">
              Why Forward-Thinking Brands Choose Us
            </h3>
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-100/50 dark:hover:bg-zinc-900/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Counter Stats Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-card glass-card-hover text-center"
            >
              <div className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-purple-cyan bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm mt-2 font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
