import { useEffect, useState } from 'react';

// Easter Egg: Konami code (↑ ↑ ↓ ↓ ← → ← → B A)
// Triggers a brief, delightful falling petals animation
export function useKonamiCode() {
  const [activeTriggers, setActiveTriggers] = useState([]);

  useEffect(() => {
    // Simplified Easter Egg sequence: typing "masoom"
    const konamiCode = ['m', 'a', 's', 'o', 'o', 'm'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      const expectedKey = konamiCode[konamiIndex];
      const keyMatches = e.key === expectedKey || 
                         e.key.toLowerCase() === expectedKey.toLowerCase();
                         
      if (keyMatches) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          console.log("🌸 Konami Code Triggered!");
          const id = Date.now();
          setActiveTriggers(prev => [...prev, id]);
          setTimeout(() => {
            setActiveTriggers(prev => prev.filter(t => t !== id));
          }, 4000);
          konamiIndex = 0;
        }
      } else {
        // If wrong key, reset. Check if it matches the first key so we don't drop valid starts.
        const matchesFirst = e.key === konamiCode[0] || e.key.toLowerCase() === konamiCode[0].toLowerCase();
        konamiIndex = matchesFirst ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return activeTriggers;
}
