import React from 'react';
import { Code, Globe, Smartphone, Cloud, Palette, Link2, ShoppingCart, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Software Development',
      desc: 'We engineer tailor-made software architectures from scratch to solve your specific workflow constraints and operational challenges.',
      icon: Code,
      glow: 'group-hover:bg-violet-500/10',
      border: 'group-hover:border-violet-500/30',
      iconColor: 'text-violet-500',
    },
    {
      title: 'Web Application Development',
      desc: 'High-performance, secure, responsive web platforms built with modern single page frameworks and robust server rendered backends.',
      icon: Globe,
      glow: 'group-hover:bg-cyan-500/10',
      border: 'group-hover:border-cyan-500/30',
      iconColor: 'text-cyan-500',
    },
    {
      title: 'Mobile App Development',
      desc: 'Bespoke native and cross-platform mobile apps for iOS and Android, offering fluid user experiences and offline access capabilities.',
      icon: Smartphone,
      glow: 'group-hover:bg-indigo-500/10',
      border: 'group-hover:border-indigo-500/30',
      iconColor: 'text-indigo-500',
    },
    {
      title: 'Cloud Solutions',
      desc: 'Cloud deployments, automated migration, serverless API design, and container orchestration using AWS, Azure, and Google Cloud.',
      icon: Cloud,
      glow: 'group-hover:bg-sky-500/10',
      border: 'group-hover:border-sky-500/30',
      iconColor: 'text-sky-500',
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centered mockups, detailed interactive wireframes, and modern layouts styled to optimize customer conversions and satisfaction.',
      icon: Palette,
      glow: 'group-hover:bg-fuchsia-500/10',
      border: 'group-hover:border-fuchsia-500/30',
      iconColor: 'text-fuchsia-500',
    },
    {
      title: 'API Development & Integration',
      desc: 'Building secure RESTful and GraphQL APIs to streamline application interconnectivity, third-party syncing, and data pipelines.',
      icon: Link2,
      glow: 'group-hover:bg-amber-500/10',
      border: 'group-hover:border-amber-500/30',
      iconColor: 'text-amber-500',
    },
    {
      title: 'E-commerce Solutions',
      desc: 'Custom storefront solutions, headless e-commerce API design, secure checkout paths, and dynamic multi-provider payment integrations.',
      icon: ShoppingCart,
      glow: 'group-hover:bg-rose-500/10',
      border: 'group-hover:border-rose-500/30',
      iconColor: 'text-rose-500',
    },
    {
      title: 'Support & Maintenance',
      desc: 'Continuous server monitoring, regular patch implementations, vulnerability checks, performance optimization, and emergency bug fixes.',
      icon: LifeBuoy,
      glow: 'group-hover:bg-emerald-500/10',
      border: 'group-hover:border-emerald-500/30',
      iconColor: 'text-emerald-500',
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-900/30 transition-colors duration-300">
      {/* Background Mesh elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Engineering Solutions for Complex Problems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            We supply end-to-end design, implementation, and maintenance services, selecting the ideal architectures to support your development goals.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative rounded-2xl glass-card p-6 border border-slate-200/50 dark:border-white/5 shadow-md flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Glowing Hover Circle Indicator */}
                <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-transparent transition-all duration-500 blur-2xl pointer-events-none ${service.glow}`} />

                <div>
                  <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                    <IconComponent className={`w-6 h-6 ${service.iconColor} transition-transform duration-300 group-hover:rotate-6`} />
                  </div>

                  <h3 className="font-outfit font-bold text-lg text-slate-800 dark:text-white mb-3 tracking-tight group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-cyan-400 group-hover:gap-2.5 transition-all">
                  <span>Learn more</span>
                  <span className="text-[14px] font-bold">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
