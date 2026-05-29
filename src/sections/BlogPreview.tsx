import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogPreview: React.FC = () => {
  const posts = [
    {
      title: 'Maximizing App Speed: A Deep Dive into Headless Commerce',
      desc: 'Discover how decoupling frontend visuals from backend database cores reduces load speeds, improves search ranks, and increases conversions.',
      category: 'E-Commerce',
      date: 'May 24, 2026',
      readTime: '5 min read',
      gradient: 'from-violet-600 to-indigo-500',
    },
    {
      title: 'Why TypeScript is Essential for Scaling Startup Engineering Teams',
      desc: 'Explore the compounding utility of strict type systems, self-documenting parameters, and runtime exception reduction in agile teams.',
      category: 'Engineering',
      date: 'May 18, 2026',
      readTime: '4 min read',
      gradient: 'from-indigo-600 to-cyan-500',
    },
    {
      title: 'Migrating to Azure Serverless: Key Architectures & Pitfalls',
      desc: 'Understand the cold-start behaviors, horizontal scaling limits, and cost management patterns of cloud database triggers.',
      category: 'Cloud Solutions',
      date: 'May 10, 2026',
      readTime: '7 min read',
      gradient: 'from-cyan-500 to-emerald-500',
    },
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Resources & Blog
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Insights on Modern Engineering
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            We regularly write about app performance, cloud security, and startup engineering frameworks to help you scale productively.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl glass-card border border-slate-200/50 dark:border-white/5 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Visual Header */}
                <div className={`h-40 w-full bg-gradient-to-tr ${post.gradient} relative overflow-hidden flex items-center justify-center p-6 text-white`}>
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                  <div className="relative font-outfit text-center font-bold tracking-tight text-lg drop-shadow-md">
                    {post.category}
                  </div>
                  {/* Glowing background bubble */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white/20 blur-xl group-hover:scale-125 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] sm:text-xs text-slate-400 dark:text-zinc-500 font-semibold">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-outfit font-bold text-lg text-slate-800 dark:text-white leading-snug group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {post.desc}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 mt-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-cyan-400 group-hover:gap-2.5 transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogPreview;
