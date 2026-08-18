function About() {
  const steps = [
    { title: "TRACK", desc: "Your cycle" },
    { title: "LEARN", desc: "What matters" },
    { title: "CONSULT", desc: "When needed" },
    { title: "CONNECT", desc: "Privately" },
  ];

  return (
    <section id="about" className="py-24 bg-card border-y border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6 max-w-2xl mx-auto">
          Healthcare should feel less overwhelming.
        </h2>
        <p className="text-lg text-muted max-w-3xl mx-auto mb-16 leading-relaxed">
          MASOOM brings everyday women's health tools, educational resources, consultations, and private community support into one place.
        </p>

        {/* Visual: TRACK ↓ LEARN ↓ CONSULT ↓ CONNECT */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-background border border-border flex flex-col items-center justify-center shadow-sm mb-4">
                  <span className="text-foreground font-serif text-xl tracking-wider">{step.title}</span>
                  <span className="text-xs text-muted mt-1">{step.desc}</span>
                </div>
              </div>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="text-accent text-2xl hidden md:block">&rarr;</div>
              )}
              {index < steps.length - 1 && (
                <div className="text-accent text-2xl md:hidden">&darr;</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
