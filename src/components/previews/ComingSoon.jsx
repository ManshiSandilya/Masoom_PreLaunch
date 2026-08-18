const ComingSoon = () => (
  <div className="mt-8 pt-6 border-t border-border">
    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-wider rounded-full mb-3 uppercase">
      Coming Soon
    </div>
    <p className="text-sm text-muted mb-4">
      We're building this experience as part of MASOOM's early-access launch.
    </p>
    <a 
      href="#get-access" 
      className="inline-flex items-center justify-center px-5 py-2.5 bg-foreground text-background font-medium rounded-full hover:bg-accent transition-colors text-sm w-full sm:w-auto"
    >
      Get Early Access
    </a>
  </div>
);

export default ComingSoon;
