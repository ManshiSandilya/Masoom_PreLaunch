function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-foreground font-medium tracking-wide mb-2">MASOOM</h3>
            <p className="text-sm text-muted">A private space for women's health.</p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">Contact</a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center md:text-left">
          <p className="text-xs text-muted">
            &copy; 2026 MASOOM. Built as a pre-launch product concept.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
