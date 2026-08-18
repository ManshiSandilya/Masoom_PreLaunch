import { useState } from 'react';

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
    }
  };

  return (
    <section id="get-access" className="py-24 lg:py-32 bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          
          {/* Subtle floating shapes inside card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[50px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-light/20 blur-[50px] rounded-full pointer-events-none"></div>

          <div className="flex-1 text-left relative z-10">
            {!submitted ? (
              <div className="animate-in fade-in duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Accepting Early Access
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
                  Be there when <br/>MASOOM launches.
                </h2>
                <p className="text-lg text-muted mb-8 max-w-md leading-relaxed">
                  Interact with the preview modules on this page, then join our early-access waitlist to help us shape the future of women's health.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-grow px-6 py-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-muted"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-foreground text-background font-medium hover:bg-accent transition-colors whitespace-nowrap shadow-md"
                  >
                    Join Waitlist
                  </button>
                </form>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl text-accent mb-6 border border-accent/20 shadow-sm">✓</div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-4">
                  You're on the list!
                </h2>
                <p className="text-lg text-muted max-w-md">
                  Thank you for joining. We'll send an invite to <strong className="text-foreground">{email}</strong> as soon as MASOOM is ready for you.
                </p>
              </div>
            )}
          </div>
          
          <div className="flex-1 w-full relative hidden md:block">
            {/* Visual element for the right side */}
            <div className="relative w-full aspect-square max-w-[400px] mx-auto ml-auto mr-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-[3rem] rotate-3 blur-md"></div>
              <div className="absolute inset-2 bg-background border border-border rounded-[3rem] -rotate-3 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--color-accent)_0%,transparent_60%)] opacity-10"></div>
                <span className="text-[120px] opacity-90">🌸</span>
                <p className="font-serif text-foreground text-xl mt-4 opacity-70">A Private Space</p>
              </div>
              
              {/* Static badges */}
              <div className="absolute top-10 -left-8 bg-card border border-border p-4 rounded-2xl shadow-xl">
                <span className="text-2xl">🩺</span>
              </div>
              <div className="absolute bottom-20 -right-6 bg-card border border-border p-4 rounded-2xl shadow-xl">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 bg-card border border-border p-4 rounded-2xl shadow-xl">
                <span className="text-2xl">🛡️</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Waitlist;
