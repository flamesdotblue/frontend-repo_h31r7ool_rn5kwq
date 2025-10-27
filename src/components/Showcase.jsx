import { Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const examples = [
  {
    title: 'MERN Stack Journey',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
  },
  {
    title: 'DSA Roadmap 2025',
    tags: ['Arrays', 'DP', 'Graphs'],
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
  },
  {
    title: 'Next.js Mastery',
    tags: ['App Router', 'SSR', 'Edge'],
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
  },
  {
    title: 'Frontend Career Path',
    tags: ['HTML', 'CSS', 'JS', 'Frameworks'],
    gradient: 'from-amber-400 via-orange-500 to-red-500',
  },
];

export default function Showcase() {
  return (
    <section id="explore" className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Explore visual roadmaps
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Swipe through community-built flows. Click any card to view the interactive version, like it, or remix it as your own.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((ex, idx) => (
            <motion.article
              key={ex.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className={`h-36 w-full bg-gradient-to-br ${ex.gradient} relative`}> 
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_30%,white,transparent_40%)]" />
                <div className="absolute -bottom-6 right-6 h-16 w-16 rounded-lg bg-white/80 dark:bg-neutral-950/70 backdrop-blur border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-xs font-medium">
                  Flowchart
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white line-clamp-1">{ex.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {ex.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="inline-flex items-center gap-1.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">
                    <Heart size={16} />
                    Like
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
