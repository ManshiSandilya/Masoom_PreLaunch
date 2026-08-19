import { useState } from 'react';
import { helpOptions, explorerSteps } from '../data/constants';
import CycleOverview from './previews/CycleOverview';
import LatestArticles from './previews/LatestArticles';
import SpecialistSlots from './previews/SpecialistSlots';
import AnonymousCommunity from './previews/AnonymousCommunity';

function InteractiveExplorer() {
  const [selectedHelp, setSelectedHelp] = useState(1);
  const [selectedExplorer, setSelectedExplorer] = useState(1);

  const renderHelpPreview = (id) => {
    switch (id) {
      case 1:
        return <CycleOverview />;
      case 2:
        return <LatestArticles />;
      case 3:
        return <SpecialistSlots />;
      case 4:
        return <AnonymousCommunity />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-background transition-colors duration-300">
      {/* What brings you here? */}
      <section className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="mb-12 text-center">
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
      </section>

      {/* See MASOOM in action */}
      <section className="min-h-screen pt-32 pb-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
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
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-6 w-full group ${
                    selectedExplorer === step.id
                      ? 'bg-card border-accent/40 shadow-md ring-1 ring-accent/15'
                      : 'bg-card/25 border-border/40 hover:bg-card/50 hover:border-border/80'
                  }`}
                >
                  <span className={`text-2xl font-serif transition-colors duration-300 ${selectedExplorer === step.id ? 'text-accent' : 'text-muted/50'}`}>
                    0{step.id}
                  </span>
                  <span className={`text-xl font-medium transition-colors duration-300 ${selectedExplorer === step.id ? 'text-foreground' : 'text-muted'}`}>
                    {step.title}
                  </span>
                  {/* Decorative flower indicator on the right */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-auto w-5 h-5 transition-all duration-700 ease-out ${
                      selectedExplorer === step.id 
                        ? 'text-accent animate-[spin_8s_linear_infinite] opacity-100' 
                        : 'text-muted/20 opacity-0 group-hover:opacity-100 group-hover:rotate-90 group-hover:text-accent/40'
                    }`}
                  >
                    {[0, 72, 144, 216, 288].map((angle) => (
                      <path
                        key={angle}
                        d="M12 4C10.5 4 9 7 9.8 9.5C10.2 11 11.2 12 12 12C12.8 12 13.8 11 14.2 9.5C15 7 13.5 4 12 4Z"
                        transform={`rotate(${angle} 12 12)`}
                      />
                    ))}
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Workspace UI Right */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-accent/5 blur-[80px] rounded-full scale-125 pointer-events-none"></div>

                {/* Premium Workspace Card Container */}
                <div className="w-full bg-card/60 backdrop-blur-md border border-border rounded-[2.5rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
                  {/* Decorative background accent highlights */}
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-accent-light/30 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Header bar representing the secure space */}
                  <div className="flex justify-between items-center mb-6 border-b border-border/60 pb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] font-semibold tracking-wider text-accent uppercase block">Personal Sanctuary</span>
                        <span className="text-sm font-medium text-foreground">Secure Sandbox</span>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-muted bg-background border border-border px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span> Live Preview
                    </span>
                  </div>

                  {/* Interactive Workspace Area */}
                  <div className="relative z-10 min-h-[380px] bg-background/50 border border-border/50 rounded-2xl p-4 sm:p-6 shadow-inner">
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
                          <div className="w-full h-32 bg-gradient-to-br from-accent/20 to-accent-light rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                            {/* Decorative background blur patterns */}
                            <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-accent/15 blur-xl"></div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/30 blur-xl"></div>
                            
                            {/* Logo Wrapper */}
                            <div className="w-16 h-16 rounded-full bg-card/60 backdrop-blur-sm border border-accent/20 flex items-center justify-center shadow-md">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-9 h-9 text-accent"
                              >
                                <path d="M13 16a3 3 0 0 1 2.24 5"/>
                                <path d="M18 12h.01"/>
                                <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/>
                                <path d="M20 8.54V4a2 2 0 1 0-4 0v3"/>
                                <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/>
                              </svg>
                            </div>
                          </div>
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
    </div>
  );
}

export default InteractiveExplorer;
