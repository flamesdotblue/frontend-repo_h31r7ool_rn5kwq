import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[88vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-neutral-900/70 dark:via-neutral-900/70 dark:to-neutral-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow">
            New • Visual roadmaps for developers
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            The place to discover and share developer roadmaps
          </h1>
          <p className="mt-5 text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
            Scroll, create, and remix interactive flowcharts like posts. From MERN to DSA to career paths — learn from the community and publish your own.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#early" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow hover:opacity-90 transition">
              Join Early Access
            </a>
            <a href="#explore" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/70 dark:bg-neutral-800/70 backdrop-blur border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-white/90 dark:hover:bg-neutral-800/90 transition">
              See Examples
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
