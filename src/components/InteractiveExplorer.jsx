import { useState } from 'react';

function InteractiveExplorer() {
  const [selectedHelp, setSelectedHelp] = useState(1);
  const [selectedExplorer, setSelectedExplorer] = useState(1);

  const helpOptions = [
    { id: 1, icon: '🌙', title: 'Understand my cycle', desc: 'Track and understand patterns' },
    { id: 2, icon: '📖', title: 'Learn about my health', desc: 'Explore approachable resources' },
    { id: 3, icon: '🩺', title: 'Talk to a doctor', desc: 'Find a consultation easily' },
    { id: 4, icon: '💬', title: 'Find a private community', desc: 'Ask questions anonymously' },
  ];

  const explorerSteps = [
    { id: 1, title: 'Track your cycle' },
    { id: 2, title: 'Learn what matters' },
    { id: 3, title: 'Consult when needed' },
    { id: 4, title: 'Connect privately' },
  ];

  const renderHelpPreview = (id) => {
    switch (id) {
      case 1:
        return (
          <div className="w-full max-w-sm animate-in fade-in duration-300">
            <div className="bg-background border border-border rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-6">Cycle Overview</h4>
              <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-accent/20 border-t-accent mx-auto mb-6">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-foreground">Day 14</span>
                  <span className="text-sm text-muted">of 28</span>
                </div>
              </div>
              <div className="text-center text-sm font-medium text-accent">Ovulation Phase</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full max-w-sm animate-in fade-in duration-300">
            <div className="bg-background border border-border rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-4">Latest Articles</h4>
              <div className="space-y-4">
                <div className="p-4 bg-card border border-border rounded-xl">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Nutrition</span>
                  <h5 className="font-medium text-foreground">Everyday Nutrition Basics</h5>
                  <p className="text-sm text-muted mt-1">4 min read</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-xl">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Wellness</span>
                  <h5 className="font-medium text-foreground">Understanding Common Symptoms</h5>
                  <p className="text-sm text-muted mt-1">5 min read</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-sm animate-in fade-in duration-300">
            <div className="bg-background border border-border rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-2">Women's Health Specialist</h4>
              <p className="text-sm text-muted mb-6">Available consultation slots</p>
              <div className="space-y-3">
                {['09:30 AM', '11:00 AM', '02:30 PM'].map((time) => (
                  <div key={time} className="p-3 border border-border rounded-xl flex justify-between items-center bg-card">
                    <span className="text-foreground font-medium">{time}</span>
                    <button className="text-sm text-accent font-medium px-3 py-1 bg-accent/10 rounded-lg">Select</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full max-w-sm animate-in fade-in duration-300">
            <div className="bg-background border border-border rounded-2xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-4">Anonymous Community</h4>
              <div className="space-y-4">
                <div className="p-4 bg-card border border-border rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20"></div>
                    <span className="text-sm font-medium text-muted">Anonymous user</span>
                  </div>
                  <p className="text-foreground text-sm mb-3">"Has anyone experienced something similar?"</p>
                  <span className="text-xs text-muted">12 replies</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* What brings you here? */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">What would you like help with?</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Explore what MASOOM is designed to bring together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              {helpOptions.map((option) => (
                <div key={option.id} className="flex flex-col gap-4">
                  <button
                    onClick={() => setSelectedHelp(option.id)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 w-full ${
                      selectedHelp === option.id
                        ? 'border-accent bg-accent/5 ring-1 ring-accent'
                        : 'border-border bg-card hover:border-accent/50'
                    }`}
                  >
                    <div className="text-3xl mb-3">{option.icon}</div>
                    <h3 className="text-xl font-medium text-foreground mb-1">{option.title}</h3>
                    <p className="text-muted mb-4">{option.desc}</p>
                    <span className={`text-sm font-medium ${selectedHelp === option.id ? 'text-accent' : 'text-muted'}`}>
                      {selectedHelp === option.id ? 'Viewing preview ↓' : 'Explore →'}
                    </span>
                  </button>
                  {/* Mobile Preview Inline */}
                  {selectedHelp === option.id && (
                    <div className="lg:hidden bg-card border border-border rounded-3xl p-6 shadow-sm flex items-center justify-center mb-4">
                      {renderHelpPreview(selectedHelp)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Preview Panel */}
            <div className="hidden lg:flex bg-card border border-border rounded-3xl p-8 shadow-sm items-center justify-center min-h-[400px] sticky top-32">
              {renderHelpPreview(selectedHelp)}
            </div>
          </div>
        </div>

        {/* See MASOOM in action */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">See MASOOM in action.</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              A private space designed for your everyday health.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Steps Left */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
              {explorerSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setSelectedExplorer(step.id)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-6 ${
                    selectedExplorer === step.id
                      ? 'bg-card border border-border shadow-sm'
                      : 'hover:bg-card/50'
                  }`}
                >
                  <span className={`text-2xl font-serif ${selectedExplorer === step.id ? 'text-accent' : 'text-muted/50'}`}>
                    0{step.id}
                  </span>
                  <span className={`text-xl font-medium ${selectedExplorer === step.id ? 'text-foreground' : 'text-muted'}`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Phone UI Right */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-[320px] h-[640px] bg-card border-[8px] border-muted/30 rounded-[3rem] relative shadow-2xl overflow-hidden ring-1 ring-border">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-muted/30 w-40 mx-auto rounded-b-3xl z-20 backdrop-blur-sm"></div>
                
                {/* Phone Screen Content */}
                <div className="h-full w-full bg-background pt-12 px-6 pb-12 overflow-y-auto">
                  {selectedExplorer === 1 && (
                    <div className="animate-in fade-in duration-500">
                      <h4 className="text-xl font-serif text-foreground mb-6">Your Cycle</h4>
                      <div className="bg-card rounded-2xl p-6 border border-border mb-6">
                        <div className="flex items-center justify-center w-40 h-40 rounded-full border-[6px] border-accent/20 border-t-accent mx-auto mb-4">
                          <div className="text-center">
                            <span className="block text-3xl font-bold text-foreground">Day 14</span>
                            <span className="text-sm text-muted">of 28</span>
                          </div>
                        </div>
                        <p className="text-center text-accent font-medium">Ovulation Phase</p>
                      </div>
                      <div className="bg-card rounded-2xl p-4 border border-border">
                        <div className="flex justify-between text-muted text-xs mb-2">
                          <span>M</span><span>T</span><span>W</span><span className="text-accent font-bold">T</span><span>F</span><span>S</span><span>S</span>
                        </div>
                        <div className="flex justify-between text-foreground text-sm">
                          <span>11</span><span>12</span><span>13</span><span className="bg-accent text-white w-6 h-6 flex items-center justify-center rounded-full">14</span><span>15</span><span>16</span><span>17</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedExplorer === 2 && (
                    <div className="animate-in fade-in duration-500">
                      <h4 className="text-xl font-serif text-foreground mb-6">Learn</h4>
                      <div className="space-y-4">
                        <div className="bg-card p-4 rounded-2xl border border-border">
                          <div className="w-full h-32 bg-accent-light rounded-xl mb-4"></div>
                          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Cycle Health</span>
                          <h5 className="font-medium text-foreground text-lg mb-1">Understanding Your Cycle</h5>
                          <p className="text-sm text-muted">5 min read</p>
                        </div>
                        <div className="bg-card p-4 rounded-2xl border border-border">
                          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Nutrition</span>
                          <h5 className="font-medium text-foreground mb-1">Everyday Nutrition</h5>
                          <p className="text-sm text-muted">4 min read</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedExplorer === 3 && (
                    <div className="animate-in fade-in duration-500">
                      <h4 className="text-xl font-serif text-foreground mb-6">Consultations</h4>
                      <div className="bg-card rounded-2xl p-6 border border-border">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-xl">🩺</div>
                          <div>
                            <h5 className="font-medium text-foreground">Women's Health Specialist</h5>
                            <p className="text-sm text-muted">Next available today</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {['09:30 AM', '11:00 AM', '02:30 PM'].map((time) => (
                            <button key={time} className="w-full p-3 border border-border rounded-xl flex justify-between items-center hover:border-accent/50 transition-colors">
                              <span className="text-foreground font-medium">{time}</span>
                              <span className="text-accent text-sm">Select</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedExplorer === 4 && (
                    <div className="animate-in fade-in duration-500">
                      <h4 className="text-xl font-serif text-foreground mb-6">Community</h4>
                      <div className="space-y-4">
                        <div className="bg-card p-4 rounded-2xl border border-border">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs">👤</div>
                            <span className="text-sm font-medium text-muted">Anonymous user</span>
                          </div>
                          <p className="text-foreground mb-4">"Has anyone experienced something similar?"</p>
                          <div className="flex gap-4 text-sm text-muted">
                            <span>12 replies</span>
                            <span>Reply</span>
                          </div>
                        </div>
                        <div className="bg-card p-4 rounded-2xl border border-border">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-xs">👤</div>
                            <span className="text-sm font-medium text-muted">Anonymous user</span>
                          </div>
                          <p className="text-foreground mb-4">"Sharing what helped me..."</p>
                          <div className="flex gap-4 text-sm text-muted">
                            <span>5 replies</span>
                            <span>Reply</span>
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
      </div>
    </section>
  );
}

export default InteractiveExplorer;
