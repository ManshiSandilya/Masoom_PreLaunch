import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveExplorer from './components/InteractiveExplorer';
import FeatureShowcase from './components/FeatureShowcase';
import About from './components/About';
import PrivacySection from './components/PrivacySection';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent/20">
      <Navbar />
      <main>
        <Hero />
        <InteractiveExplorer />
        <FeatureShowcase />
        <About />
        <PrivacySection />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
