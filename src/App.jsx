import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveExplorer from './components/InteractiveExplorer';
import FeatureShowcase from './components/FeatureShowcase';
import ConsultationWidget from './components/ConsultationWidget';
import BackgroundDecorations from './components/BackgroundDecorations';
import About from './components/About';
import PrivacySection from './components/PrivacySection';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import { useKonamiCode } from './hooks/useKonamiCode';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const activeTriggers = useKonamiCode();
  const [showClue, setShowClue] = useState(false);

  useEffect(() => {
    // If they already closed the clue, don't show it again
    const wasDismissed = sessionStorage.getItem('masoom_clue_dismissed');
    if (wasDismissed) return;

    // Show clue after 45 seconds
    const timer = setTimeout(() => {
      setShowClue(true);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismissClue = () => {
    setShowClue(false);
    sessionStorage.setItem('masoom_clue_dismissed', 'true');
  };

  // If they somehow guessed it before 45s, dismiss clue automatically
  useEffect(() => {
    if (activeTriggers.length > 0) {
      setShowClue(false);
      sessionStorage.setItem('masoom_clue_dismissed', 'true');
    }
  }, [activeTriggers]);

  return (
    <div className="min-h-screen font-sans selection:bg-accent/20 relative">
      <BackgroundDecorations />
      
      <AnimatePresence>
        {activeTriggers.map(triggerId => (
          <div key={triggerId} className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {[...Array(30)].map((_, i) => {
              return (
                <motion.div
                  key={i}
                  className="absolute text-accent opacity-70"
                  style={{ 
                    left: `${Math.random() * 100}vw`,
                    top: -50,
                  }}
                  initial={{ opacity: 0, y: -50, x: 0, rotate: 0, scale: 0.5 + Math.random() * 0.8 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: '110vh',
                    x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
                    rotate: [0, Math.random() * 360, Math.random() * 720]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    ease: "linear",
                    delay: Math.random() * 0.8
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    {[0, 72, 144, 216, 288].map((angle) => (
                      <path
                        key={angle}
                        d="M12 2C10 2 8 6 9 9.5C9.5 11 11 12 12 12C13 12 14.5 11 15 9.5C16 6 14 2 12 2Z"
                        transform={`rotate(${angle} 12 12)`}
                      />
                    ))}
                    <circle cx="12" cy="12" r="2.5" fill="currentColor" className="opacity-50" />
                  </svg>
                </motion.div>
              );
            })}
          </div>
        ))}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <InteractiveExplorer />
        <FeatureShowcase />
        <ConsultationWidget />
        <About />
        <PrivacySection />
        <Waitlist />
      </main>
      <Footer />

      {/* Timed Easter Egg Clue Toast */}
      <div
        className={`fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] bg-card/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl flex gap-3 text-left overflow-hidden transition-all duration-500 ease-out ${
          showClue ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        }`}
      >
        {/* Soft decorative inner color flare */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/20 rounded-full blur-xl pointer-events-none"></div>
        
        <div className="text-xl shrink-0">🌸</div>
        <div className="flex-grow pr-4">
          <h5 className="text-xs font-semibold text-foreground mb-1 uppercase tracking-wider">Secret Discovered</h5>
          <p className="text-[11px] text-muted leading-relaxed">
            Rabbits love flowers. Try typing <span className="font-mono text-accent font-bold bg-accent/10 px-1 rounded select-all">"masoom"</span> on your keyboard to watch the page bloom!
          </p>
        </div>
        
        <button 
          onClick={handleDismissClue}
          className="absolute top-3 right-3 text-muted hover:text-foreground w-6 h-6 flex items-center justify-center rounded-full bg-background border border-border text-xs transition-colors"
          aria-label="Dismiss secret clue"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default App;
