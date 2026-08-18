import { useState, useEffect } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Check initial dark mode state
  useEffect(() => {
    // If you want to persist, you'd check localStorage here.
    // We are just toggling the class on the html element for simplicity.
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6 text-accent"
                >
                  <path d="M13 16a3 3 0 0 1 2.24 5"/>
                  <path d="M18 12h.01"/>
                  <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/>
                  <path d="M20 8.54V4a2 2 0 1 0-4 0v3"/>
                  <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/>
                </svg>
              </div>
              <span className="text-2xl font-serif text-foreground font-medium tracking-wide">
                MASOOM
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-accent transition-colors">Features</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#get-access" className="text-foreground hover:text-accent transition-colors">Get Access</a>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:text-accent hover:border-accent/50 transition-colors"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" /><path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" /><path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
            <a
              href="#get-access"
              className="px-6 py-2.5 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-[transform,background-color] duration-200 shadow-sm"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open navigation"
              className="text-foreground text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 absolute w-full shadow-lg">
          <div className="flex flex-col gap-4">
            <a href="#features" onClick={closeMenu} className="text-foreground text-lg py-2">Features</a>
            <a href="#about" onClick={closeMenu} className="text-foreground text-lg py-2">About</a>
            <a href="#get-access" onClick={closeMenu} className="text-foreground text-lg py-2">Get Access</a>
            <button
              onClick={() => { toggleDarkMode(); closeMenu(); }}
              className="text-left text-foreground text-lg py-2 flex items-center gap-3"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" /><path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" /><path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href="#get-access"
              onClick={closeMenu}
              className="text-center px-6 py-3 mt-2 rounded-full bg-foreground text-background font-medium"
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
