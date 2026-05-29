import React, { useState } from 'react';
import { Send, Github, Linkedin, Twitter, Dribbble, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError('Please provide a valid email');
      return;
    }

    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative border-t border-slate-200/50 dark:border-white/5 bg-slate-50 dark:bg-zinc-950/40 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/20 transition-all">
                <Cpu className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Synapse<span className="text-violet-500 dark:text-cyan-400">Digital</span>
              </span>
            </a>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Engineering cutting-edge software, web applications, and intelligent cloud systems to scale modern businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-cyan-400 transition-colors hover:scale-105 duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-cyan-400 transition-colors hover:scale-105 duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-cyan-400 transition-colors hover:scale-105 duration-300" aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-cyan-400 transition-colors hover:scale-105 duration-300" aria-label="Dribbble">
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Tech Stack', 'Portfolio', 'Pricing'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-500 dark:text-zinc-400 text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-semibold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="space-y-4">
              {['Custom Software', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design', 'API Development'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-500 dark:text-zinc-400 text-sm hover:text-violet-600 dark:hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-outfit font-semibold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">
              Stay Updated
            </h4>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Subscribe to our newsletter for insights on modern technology, product development, and software updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="w-full pl-4 pr-12 py-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 focus:border-violet-500 dark:focus:border-cyan-500 outline-none text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 shadow-sm transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white flex items-center justify-center hover:shadow-md transition-all active:scale-95 animate-gradient-x"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {error && <p className="text-rose-500 text-xs mt-2 pl-3">{error}</p>}
            {subscribed && (
              <p className="text-emerald-500 text-xs mt-2 pl-3 font-medium animate-pulse">
                Successfully subscribed! Check your inbox.
              </p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200/50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} Synapse Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
