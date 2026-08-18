import { useState } from 'react';

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // Simulate submission
      setSubmitted(true);
    }
  };

  return (
    <section id="get-access" className="py-24 bg-card border-t border-border transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {!submitted ? (
          <>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
              Be there when MASOOM launches.
            </h2>
            <p className="text-lg text-muted mb-10">
              We're building in the open. Be first to know when we launch.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-grow px-6 py-4 rounded-full bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-accent transition-colors whitespace-nowrap"
              >
                Get Early Access
              </button>
            </form>
          </>
        ) : (
          <div className="animate-in fade-in duration-500 py-8">
            <div className="text-5xl text-accent mb-6">✓</div>
            <h2 className="text-3xl font-serif text-foreground mb-4">
              You're on the list.
            </h2>
            <p className="text-lg text-muted">
              We'll let you know when MASOOM is ready.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Waitlist;
