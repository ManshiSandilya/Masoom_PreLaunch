function Footer() {
  return (
    <footer className="bg-card border-t border-border transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
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
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              A private space designed for women's health — bringing cycle tracking, health resources, doctor consultations, and community support into one place.
            </p>
            <p className="text-xs text-muted/60 italic">
              Currently in pre-launch. We're building in the open.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium text-sm uppercase tracking-wider mb-5">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted text-sm hover:text-accent transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="text-muted text-sm hover:text-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#get-access" className="text-muted text-sm hover:text-accent transition-colors">Get Early Access</a>
              </li>
            </ul>
          </div>

          {/* Legal & Connect */}
          <div>
            <h4 className="text-foreground font-medium text-sm uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted text-sm hover:text-accent transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted text-sm hover:text-accent transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted text-sm hover:text-accent transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} MASOOM. Built as a pre-launch product concept.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter / X" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
    </footer>
  );
}

export default Footer;

