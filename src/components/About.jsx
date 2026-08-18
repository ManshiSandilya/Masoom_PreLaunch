import { CycleIcon, BookIcon, ConsultIcon, ConnectIcon } from './Icons';

function About() {
  const steps = [
    { title: "TRACK", desc: "Your cycle", icon: <CycleIcon />, color: "from-accent/30 to-accent/5" },
    { title: "LEARN", desc: "What matters", icon: <BookIcon />, color: "from-accent/25 to-accent/5" },
    { title: "CONSULT", desc: "When needed", icon: <ConsultIcon />, color: "from-accent/20 to-accent/5" },
    { title: "CONNECT", desc: "Privately", icon: <ConnectIcon />, color: "from-accent/30 to-accent/5" },
  ];

  return (
    <section id="about" className="min-h-screen pt-32 pb-16 bg-card border-y border-border transition-colors duration-300 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
          <span className="text-lg leading-none">💡</span>
          How MASOOM is designed to work
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6 max-w-2xl mx-auto">
          Healthcare should feel less overwhelming.
        </h2>
        <p className="text-lg text-muted max-w-3xl mx-auto mb-20 leading-relaxed">
          MASOOM brings everyday women's health tools, educational resources, consultations, and private community support into one place.
        </p>

        {/* Steps Flow */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          
          {/* Connecting Line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px border-t-2 border-dashed border-accent/20 -translate-y-4 pointer-events-none"></div>

          {steps.map((step, index) => (
            <div key={step.title} className="contents">
              {/* Circle */}
              <div className="flex flex-col items-center relative group">
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-md z-10">
                  {index + 1}
                </div>

                {/* Outer gradient ring */}
                <div className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-lg group-hover:shadow-xl transition-[transform,box-shadow] duration-300 transform group-hover:scale-105`}>
                  {/* Inner circle */}
                  <div className="w-full h-full rounded-full bg-background border border-border flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,var(--color-accent)_0%,transparent_70%)] opacity-[0.06]"></div>
                    
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 mb-1">
                      {step.icon}
                    </div>
                    <span className="text-foreground font-serif text-base tracking-wider relative z-10">{step.title}</span>
                    <span className="text-[11px] text-muted relative z-10">{step.desc}</span>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden md:flex items-center justify-center text-accent relative z-10 mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className="md:hidden text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M12 5v14" />
                      <path d="m5 12 7 7 7-7" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="mt-16 text-sm text-muted max-w-md mx-auto">
          All designed to come together in one private, secure space you can trust.
        </p>
      </div>
    </section>
  );
}

export default About;

