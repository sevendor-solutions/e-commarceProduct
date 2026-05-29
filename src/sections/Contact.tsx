import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    'Custom Software',
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'UI/UX Design',
    'API Integration',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Web Development',
        message: '',
      });
      // Reset success state after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Mesh elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-violet-600 dark:text-cyan-400 uppercase tracking-widest"
          >
            Contact Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
          >
            Start Engineering Your Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-zinc-400 leading-relaxed text-base"
          >
            Have an idea or application request? Get in touch with our squad to map out a development timeline.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Details Panel */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-outfit font-bold text-2xl text-slate-800 dark:text-white mb-6">
              Connect With Synapse
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800/60 text-violet-500 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-wider">Email Us</span>
                  <p className="text-slate-800 dark:text-white font-medium text-sm sm:text-base mt-0.5">hello@synapsedigital.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800/60 text-cyan-500 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-wider">Call Us</span>
                  <p className="text-slate-800 dark:text-white font-medium text-sm sm:text-base mt-0.5">+1 (800) 555-0190</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800/60 text-emerald-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-wider">Headquarters</span>
                  <p className="text-slate-800 dark:text-white font-medium text-sm sm:text-base mt-0.5 leading-relaxed">
                    100 Innovation Way, Suite 400,<br />San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Google Maps Vector Placeholder */}
            <div className="pt-6">
              <div className="relative w-full h-56 rounded-2xl bg-slate-50 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-white/5 overflow-hidden flex items-center justify-center bg-grid-pattern shadow-inner">
                <div className="absolute inset-0 bg-radial-glow opacity-60" />
                <div className="absolute w-24 h-24 rounded-full border border-violet-500/10 animate-ping duration-3000" />
                <div className="absolute w-12 h-12 rounded-full border border-cyan-500/25 animate-pulse" />
                <div className="relative flex flex-col items-center">
                  <div className="w-4.5 h-4.5 rounded-full bg-violet-600 dark:bg-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded bg-slate-900 text-white font-mono text-[9px] font-bold shadow-md border border-zinc-850">
                    SYNAPSE_HQ: CA_SF
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl border border-slate-200/50 dark:border-white/5 p-6 sm:p-8 shadow-xl">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-4 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2">
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="font-outfit font-bold text-2xl text-slate-800 dark:text-white">
                      Inquiry Received!
                    </h3>
                    <p className="text-slate-500 dark:text-zinc-400 text-sm max-w-sm leading-relaxed">
                      Thank you for contacting Synapse Digital. A solution architect will review your project specs and respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:border-violet-500 dark:focus:border-cyan-500 outline-none text-sm text-slate-900 dark:text-zinc-100 transition-colors"
                          placeholder="e.g. Sarah Jenkins"
                        />
                        {errors.name && <p className="text-rose-500 text-xs mt-1 pl-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:border-violet-500 dark:focus:border-cyan-500 outline-none text-sm text-slate-900 dark:text-zinc-100 transition-colors"
                          placeholder="e.g. sarah@company.com"
                        />
                        {errors.email && <p className="text-rose-500 text-xs mt-1 pl-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                        Project Interest
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:border-violet-500 dark:focus:border-cyan-500 outline-none text-sm text-slate-700 dark:text-zinc-300 transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                        Project Scope & Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:border-violet-500 dark:focus:border-cyan-500 outline-none text-sm text-slate-900 dark:text-zinc-100 transition-colors resize-none"
                        placeholder="Detail your target applications, features, and key integration milestones..."
                      />
                      {errors.message && <p className="text-rose-500 text-xs mt-1 pl-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending Specs...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Specifications</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
