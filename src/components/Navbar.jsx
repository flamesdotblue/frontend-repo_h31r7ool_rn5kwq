import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 text-white shadow">
            <Rocket size={18} />
          </div>
          <span className="text-lg tracking-tight">FlowFeed</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#explore" className="hover:text-neutral-900 dark:hover:text-white transition">Explore</a>
          <a href="#create" className="hover:text-neutral-900 dark:hover:text-white transition">Create</a>
          <a href="#early" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            <Star size={14} />
            Early Access
          </a>
        </nav>
      </div>
    </header>
  );
}
