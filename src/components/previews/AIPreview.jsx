import { useState } from 'react';

const AIPreview = () => {
  const [response, setResponse] = useState("I can help you explore general health information or guide you to a relevant MASOOM service.");
  const [isListening, setIsListening] = useState(false);

  const handleAction = (action) => {
    if (action === 'learn') setResponse("Sure, I can help you find curated articles on women's health. What topic are you interested in?");
    if (action === 'doctor') setResponse("I can help you navigate to the consultations area to find a specialist.");
    if (action === 'resources') setResponse("Let me point you towards our vaccination and medicine guidance resources.");
  };

  const handleMicClick = () => {
    if (isListening) return;
    setIsListening(true);
    setResponse("");
    setTimeout(() => {
      setIsListening(false);
      setResponse("I am listening! How can I help you with your health today?");
    }, 1500);
  };

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background text-xs font-serif">M</div>
        <span className="font-medium text-foreground text-sm">MASOOM AI</span>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-card p-3 rounded-xl border border-border rounded-tl-none w-5/6">
          <p className="text-xs text-foreground">How can I help?</p>
        </div>
        
        <div className="bg-accent/10 p-3 rounded-xl rounded-tr-none w-5/6 ml-auto">
          <p className="text-xs text-foreground text-right">I have a question about my cycle.</p>
        </div>

        <div className="bg-card p-3 rounded-xl border border-border rounded-tl-none w-5/6 animate-in fade-in duration-300 min-h-[40px] flex items-center">
          {isListening ? (
             <div className="flex gap-1 items-center px-1">
               <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
               <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
               <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
             </div>
          ) : (
             <p className="text-xs text-foreground">{response}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => handleAction('learn')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-colors">Learn more</button>
        <button onClick={() => handleAction('doctor')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-colors">Find a doctor</button>
        <button onClick={() => handleAction('resources')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-colors">Explore resources</button>
      </div>

      <div 
        onClick={handleMicClick}
        className={`flex items-center gap-3 p-2 border rounded-full transition-colors cursor-pointer ${isListening ? 'bg-accent/10 border-accent' : 'bg-card border-border hover:border-accent/50'}`}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isListening ? 'bg-accent text-white animate-pulse' : 'bg-accent/20 text-accent'}`}>🎙</div>
        <div className="flex-grow flex items-center gap-1 opacity-50">
          <div className={`w-1 bg-muted rounded-full transition-all duration-200 ${isListening ? 'h-4 bg-accent' : 'h-3'}`}></div>
          <div className={`w-1 bg-muted rounded-full transition-all duration-200 ${isListening ? 'h-6 bg-accent' : 'h-4'}`}></div>
          <div className={`w-1 bg-muted rounded-full transition-all duration-200 ${isListening ? 'h-3 bg-accent' : 'h-2'}`}></div>
          <div className={`w-1 bg-muted rounded-full transition-all duration-200 ${isListening ? 'h-5 bg-accent' : 'h-5'}`}></div>
          <div className={`w-1 bg-muted rounded-full transition-all duration-200 ${isListening ? 'h-4 bg-accent' : 'h-3'}`}></div>
        </div>
        <button className="px-4 py-1.5 bg-foreground text-background rounded-full text-[10px] font-medium pointer-events-none">
          {isListening ? 'Listening...' : 'Ask MASOOM'}
        </button>
      </div>
    </div>
  );
};

export default AIPreview;
