import { useState, useEffect } from 'react';

function Hero() {
  const [activeFeature, setActiveFeature] = useState("cycle");
  const [breathingPhase, setBreathingPhase] = useState("Inhale");
  const [mood, setMood] = useState("calm");

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % 3;
      if (count === 0) setBreathingPhase("Inhale");
      else if (count === 1) setBreathingPhase("Hold");
      else setBreathingPhase("Exhale");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-24 sm:pt-28 pb-16 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            {/* Announcement Pill to fill space */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
              <span className="text-lg leading-none">✨</span>
              We're building the future of women's health
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] mb-6">
              Understand your health.<br />On your terms.
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-8 max-w-lg">
              Track your cycle, explore health resources, consult doctors, and find private community support.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs">✓</span>
                Planned end-to-end encryption for privacy
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs">✓</span>
                Designed for seamless doctor bookings
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs">✓</span>
                Upcoming AI health assistant integration
              </li>
            </ul>
            <a 
              href="#get-access" 
              className="px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] transition-[transform,background-color] duration-200 text-lg inline-flex items-center gap-2 shadow-lg"
            >
              Get Early Access &rarr;
            </a>
          </div>

          {/* Right: Interactive Product Preview */}
          <div className="w-full lg:w-1/2">
            <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-lg relative">
              
              {/* Fake UI Header */}
              <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
                <div>
                  <h3 className="text-foreground font-serif text-xl">MASOOM</h3>
                  <p className="text-muted text-sm mt-1">Good morning</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-sm font-serif shadow-md">
                  M
                </div>
              </div>

              <h4 className="text-lg font-medium text-foreground mb-6">Your health space</h4>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: 'cycle', label: 'Cycle' },
                  { id: 'learn', label: 'Learn' },
                  { id: 'consult', label: 'Consult' },
                  { id: 'community', label: 'Community' },
                  { id: 'mindful', label: 'Mindful' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFeature(tab.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-[transform,background-color] duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                      activeFeature === tab.id
                        ? 'bg-accent text-white shadow-sm'
                        : 'bg-background text-foreground border border-border hover:bg-accent/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Mock UI Content Area */}
              <div className="min-h-[250px] bg-background rounded-2xl border border-border p-6 transition-all">
                
                {activeFeature === "cycle" && (
                  <div className="animate-in fade-in duration-300">
                    <h5 className="text-foreground font-medium mb-6">Cycle Overview</h5>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-accent/20 border-t-accent mb-6">
                        <div className="text-center">
                          <span className="block text-2xl font-bold text-foreground">Day 14</span>
                          <span className="text-xs text-muted">of 28</span>
                        </div>
                      </div>
                      <p className="text-accent text-sm font-medium mb-4">Current phase: Ovulation</p>
                      
                      <div className="w-full bg-card rounded-xl p-3 border border-border">
                        <div className="flex justify-between text-muted text-xs mb-2">
                          <span>M</span><span>T</span><span>W</span><span className="text-accent font-bold">T</span><span>F</span><span>S</span><span>S</span>
                        </div>
                        <div className="flex justify-between text-foreground text-sm">
                          <span>12</span><span>13</span><span className="bg-accent text-white w-6 h-6 flex items-center justify-center rounded-full">14</span><span>15</span><span>16</span><span>17</span><span>18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === "learn" && (
                  <div className="animate-in fade-in duration-300">
                    <h5 className="text-foreground font-medium mb-6">Explore Health</h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-card rounded-xl border border-border">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Cycle Health</span>
                        <h6 className="font-medium text-foreground mb-1">Understanding Your Cycle</h6>
                        <p className="text-xs text-muted">5 min read</p>
                      </div>
                      <div className="p-4 bg-card rounded-xl border border-border">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Nutrition</span>
                        <h6 className="font-medium text-foreground mb-1">Everyday Nutrition</h6>
                        <p className="text-xs text-muted">4 min read</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === "consult" && (
                  <div className="animate-in fade-in duration-300">
                    <h5 className="text-foreground font-medium mb-6">Doctor Consultation</h5>
                    <div className="bg-card p-5 rounded-xl border border-border mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">🩺</div>
                        <div>
                          <h6 className="font-medium text-foreground">Women's Health Specialist</h6>
                          <p className="text-xs text-muted">Available consultation slots</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap mb-4">
                        <span className="px-3 py-1 bg-background border border-border rounded-lg text-sm text-foreground">09:30 AM</span>
                        <span className="px-3 py-1 bg-background border border-border rounded-lg text-sm text-foreground">11:00 AM</span>
                        <span className="px-3 py-1 bg-background border border-border rounded-lg text-sm text-foreground">02:30 PM</span>
                      </div>
                      <button className="w-full py-2 bg-accent/10 text-accent font-medium rounded-xl hover:bg-accent/20 transition-colors">
                        View Consultation
                      </button>
                    </div>
                  </div>
                )}

                {activeFeature === "community" && (
                  <div className="animate-in fade-in duration-300">
                    <h5 className="text-foreground font-medium mb-6">Anonymous Community</h5>
                    <div className="space-y-4">
                      <div className="bg-card p-4 rounded-xl border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-accent/20"></div>
                          <span className="text-xs font-medium text-muted">Anonymous user</span>
                        </div>
                        <p className="text-foreground text-sm mb-3">"Has anyone experienced something similar?"</p>
                        <div className="text-xs text-muted">12 replies</div>
                      </div>
                      <div className="bg-card p-4 rounded-xl border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-accent-light"></div>
                          <span className="text-xs font-medium text-muted">Anonymous user</span>
                        </div>
                        <p className="text-foreground text-sm mb-3">"Sharing what helped me..."</p>
                        <div className="text-xs text-muted">8 replies</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === "mindful" && (
                  <div className="animate-in fade-in duration-300">
                    <h5 className="text-foreground font-medium mb-4">Breathe & Center</h5>
                    <p className="text-xs text-muted mb-6">A peaceful workspace designed to support your mental and emotional well-being.</p>
                    
                    {/* Calming interactive container */}
                    <div className={`p-6 rounded-2xl border transition-all duration-700 mb-4 ${
                      mood === 'calm' ? 'bg-gradient-to-br from-teal-500/5 to-blue-500/5 border-teal-500/20 shadow-[inset_0_1px_2px_rgba(20,180,180,0.05)]' :
                      mood === 'tired' ? 'bg-gradient-to-br from-orange-500/5 to-rose-500/5 border-orange-500/20 shadow-[inset_0_1px_2px_rgba(240,100,100,0.05)]' :
                      'bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border-amber-500/20 shadow-[inset_0_1px_2px_rgba(240,200,50,0.05)]'
                    }`}>
                      {/* Breathing Circle */}
                      <div className="min-h-[140px] flex items-center justify-center mb-6">
                        <div 
                          className={`rounded-full border flex flex-col items-center justify-center mx-auto transition-all duration-[4000ms] ease-in-out ${
                            breathingPhase === "Inhale" || breathingPhase === "Hold"
                              ? 'w-32 h-32 bg-accent/20 border-accent shadow-[0_0_30px_rgba(201,130,118,0.25)]'
                              : 'w-24 h-24 bg-accent/5 border-accent/30 shadow-none'
                          }`}
                        >
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider transition-all duration-300">
                            {breathingPhase}
                          </span>
                        </div>
                      </div>

                      {/* Mood check-in */}
                      <div className="text-center">
                        <p className="text-[10px] uppercase tracking-wider text-muted font-medium mb-3">How are you feeling right now?</p>
                        <div className="flex gap-2 justify-center">
                          {[
                            { id: 'calm', label: '😌 Calm' },
                            { id: 'tired', label: '🥱 Tired' },
                            { id: 'energetic', label: '⚡ Energized' }
                          ].map((option) => (
                            <button
                              key={option.id}
                              onClick={() => setMood(option.id)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                                mood === option.id
                                  ? 'bg-foreground text-background scale-[1.02] shadow-sm'
                                  : 'bg-background text-foreground border border-border hover:bg-accent/5'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
