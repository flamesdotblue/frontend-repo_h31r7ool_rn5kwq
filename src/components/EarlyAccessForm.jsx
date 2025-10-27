import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [message, setMessage] = useState('');

  function validateEmail(value) {
    return /\S+@\S+\.\S+/.test(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    // Simulate success for this concept landing page
    setStatus('success');
    setMessage("You're on the list! We'll email you when we launch.");
    try {
      // Non-blocking: stash locally so refresh keeps the state (no backend needed for this demo)
      const list = JSON.parse(localStorage.getItem('flowfeed_early_access') || '[]');
      if (!list.includes(email)) {
        list.push(email);
        localStorage.setItem('flowfeed_early_access', JSON.stringify(list));
      }
    } catch (_) {
      // ignore storage errors
    }
  };

  return (
    <section id="early" className="py-20 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/70 dark:border-neutral-800/70">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Join Early Access
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Be first to try FlowFeed. We’ll invite the earliest signups and share progress updates.
        </p>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
          <div className="w-full sm:w-2/3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@devmail.com"
                className="w-full pl-10 pr-4 py-3 rounded-md bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow hover:opacity-90 transition"
          >
            Get Invite
          </button>
        </form>

        <div className="min-h-[28px] mt-3">
          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm"
              >
                <CheckCircle2 size={16} /> {message}
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center justify-center gap-2 text-rose-600 dark:text-rose-400 text-sm"
              >
                <AlertCircle size={16} /> {message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
