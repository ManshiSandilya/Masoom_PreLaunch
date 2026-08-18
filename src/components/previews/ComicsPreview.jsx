import { useState } from 'react';

const ComicsPreview = () => {
  const [activePanel, setActivePanel] = useState(1);

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Issue #1: Cycle Basics
          </span>
          <h4 className="text-sm font-serif text-foreground mt-1">Understanding Shifts</h4>
        </div>
        <div className="flex gap-1.5">
          <button 
            onClick={() => setActivePanel(1)}
            disabled={activePanel === 1}
            className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs transition-colors ${
              activePanel === 1 ? 'border-border text-muted cursor-not-allowed' : 'border-accent/30 text-accent hover:bg-accent/5'
            }`}
          >
            &larr;
          </button>
          <button 
            onClick={() => setActivePanel(2)}
            disabled={activePanel === 2}
            className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs transition-colors ${
              activePanel === 2 ? 'border-border text-muted cursor-not-allowed' : 'border-accent/30 text-accent hover:bg-accent/5'
            }`}
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Comic Book Viewer */}
      <div className="bg-card border border-border/80 rounded-xl p-4 min-h-[220px] flex flex-col justify-between relative overflow-hidden shadow-inner">
        {/* Soft background sketch lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(var(--color-accent)_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {activePanel === 1 ? (
          <div className="animate-in fade-in duration-300 flex flex-col gap-4">
            {/* Panel 1 Scene */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-light/40 border border-accent/10 flex items-center justify-center text-xl shrink-0">
                👩
              </div>
              <div className="bg-background border border-border p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-foreground max-w-[200px]">
                "Wait, why does my mood shift right before my cycle starts?"
              </div>
            </div>

            <div className="flex items-start gap-3 justify-end mt-2">
              <div className="bg-accent/5 border border-accent/20 p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-foreground max-w-[200px]">
                "It's completely normal! Our hormones are charting a path. Let's turn the page to see the wave..."
              </div>
              <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-xl shrink-0">
                🐰
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300 flex flex-col items-center justify-center py-4">
            {/* Panel 2 Graph Illustration */}
            <p className="text-[10px] text-muted uppercase tracking-wider mb-3">Estrogen & Progesterone Wave</p>
            <div className="w-full max-w-[220px] h-20 relative flex items-end justify-between border-b border-l border-border/60 pb-1 pl-1 mb-2">
              {/* Estrogen Wave */}
              <svg className="absolute inset-0 w-full h-full text-accent" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                <path d="M0,45 C25,5 50,45 75,20 C85,10 100,45 100,45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {/* Progesterone Wave */}
              <svg className="absolute inset-0 w-full h-full text-muted/40" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                <path d="M0,45 C20,45 40,15 60,15 C80,15 100,45 100,45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
              </svg>
              
              <span className="text-[8px] text-accent absolute top-2 left-6">Estrogen</span>
              <span className="text-[8px] text-muted absolute top-8 right-6">Progesterone</span>
            </div>
            <p className="text-center text-[10px] text-muted max-w-xs mt-1">
              Hormone levels fluctuate throughout the 28-day cycle, impacting energy and mood. Knowing the cycle helps you plan ahead.
            </p>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-border/60 flex justify-between items-center text-[10px] text-muted">
          <span>Panel {activePanel} of 2</span>
          <button 
            onClick={() => setActivePanel(activePanel === 1 ? 2 : 1)}
            className="text-accent font-medium hover:underline"
          >
            {activePanel === 1 ? 'Next Panel &rarr;' : 'Restart &larr;'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComicsPreview;
