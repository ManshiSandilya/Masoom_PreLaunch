import { useState } from 'react';

const SensitivePreview = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleUnlock = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsUnlocked(true);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <div className="mb-6 border-b border-border pb-4">
        <h6 className="font-serif text-foreground text-lg mb-2">Sensitive Health</h6>
        <p className="text-xs text-muted">A private space for questions you may prefer to ask privately.</p>
      </div>

      {!isUnlocked ? (
        <div className="animate-in fade-in duration-300 flex flex-col items-center justify-center py-8">
          <div className="text-3xl mb-4 relative">
            <span className={`inline-block transition-transform duration-500 ${isAnimating ? 'scale-110' : ''}`}>
               {isAnimating ? '🔓' : '🔒'}
            </span>
          </div>
          <p className="text-xs text-muted mb-6 text-center max-w-[200px]">Contents are hidden to protect your privacy.</p>
          <button 
            onClick={handleUnlock}
            className="px-6 py-2 bg-foreground text-background rounded-full text-xs font-medium hover:bg-accent transition-colors flex items-center gap-2"
          >
            Enter Private Section
          </button>
        </div>
      ) : !selectedTopic ? (
        <div className="animate-in fade-in duration-500">
          <div className="flex justify-between items-center mb-4">
             <p className="text-sm font-medium text-accent flex items-center gap-2">🔓 Unlocked</p>
             <button onClick={() => setIsUnlocked(false)} className="text-[10px] text-muted hover:text-foreground">Lock</button>
          </div>
          <p className="text-xs font-medium text-foreground mb-3">Topics</p>
          <div className="space-y-2 mb-6">
            {['Reproductive Health', 'Sexual Wellness', 'Personal Concerns'].map(topic => (
              <button 
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className="w-full text-left p-3 bg-card border border-border rounded-xl text-xs text-foreground hover:border-accent transition-colors flex justify-between items-center"
              >
                {topic} <span>&rarr;</span>
              </button>
            ))}
          </div>
          <div className="p-4 bg-card border border-border rounded-xl flex gap-3 items-start">
            <span className="text-accent mt-0.5">💬</span>
            <div>
              <p className="text-xs font-medium text-foreground mb-1">Private conversation</p>
              <p className="text-[10px] text-muted">Your questions stay within this private space.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <button onClick={() => setSelectedTopic(null)} className="text-[10px] text-muted mb-4 hover:text-foreground">&larr; Back to topics</button>
          <p className="text-sm font-medium text-foreground mb-4">{selectedTopic}</p>
          <div className="space-y-4 mb-6">
            <div className="bg-card p-3 rounded-xl border border-border opacity-70 blur-[2px] hover:blur-[1px] transition-all cursor-pointer">
              <p className="text-xs text-foreground">"How can I understand..."</p>
            </div>
            <div className="bg-card p-3 rounded-xl border border-border opacity-60 blur-[3px] hover:blur-[2px] transition-all cursor-pointer">
              <p className="text-xs text-foreground">"Is it normal to..."</p>
            </div>
          </div>
          <button className="w-full py-2 bg-accent/10 text-accent font-medium rounded-lg text-xs hover:bg-accent/20 transition-colors">
            Explore Private Support
          </button>
        </div>
      )}
    </div>
  );
};

export default SensitivePreview;
