import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import EarlyAccessForm from './components/EarlyAccessForm';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <EarlyAccessForm />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
        Built for builders. © {new Date().getFullYear()} FlowFeed
      </footer>
    </div>
  );
}

export default App;
