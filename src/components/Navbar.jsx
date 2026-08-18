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
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-serif text-foreground font-medium tracking-wide">
              MASOOM
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
              className="text-foreground hover:text-accent transition-colors"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <a
              href="#get-access"
              className="px-6 py-2.5 rounded-full bg-foreground text-background font-medium hover:bg-accent transition-colors"
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
              className="text-left text-foreground text-lg py-2"
            >
              Dark Mode: {isDark ? 'On' : 'Off'}
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
