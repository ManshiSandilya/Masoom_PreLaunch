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
    }, 2000);
  };

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto text-left">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background text-xs font-serif shadow-sm">M</div>
        <span className="font-medium text-foreground text-sm">MASOOM AI</span>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-card p-3 rounded-xl border border-border rounded-tl-none w-5/6 shadow-sm">
          <p className="text-xs text-foreground">How can I help?</p>
        </div>
        
        <div className="bg-accent/10 p-3 rounded-xl rounded-tr-none w-5/6 ml-auto border border-accent/10">
          <p className="text-xs text-foreground text-right">I have a question about my cycle.</p>
        </div>

        <div className="bg-card p-3 rounded-xl border border-border rounded-tl-none w-5/6 animate-in fade-in duration-300 min-h-[45px] flex items-center shadow-sm">
          {isListening ? (
             <div className="flex gap-1 items-center px-1">
               <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
               <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
               <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
             </div>
          ) : (
             <p className="text-xs text-foreground leading-relaxed">{response}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => handleAction('learn')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">Learn more</button>
        <button onClick={() => handleAction('doctor')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">Find a doctor</button>
        <button onClick={() => handleAction('resources')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">Explore resources</button>
      </div>

      {/* Voice Assistant Mic Activator */}
      <div 
        onClick={handleMicClick}
        className={`flex items-center gap-4 p-2.5 border rounded-full transition-all duration-300 cursor-pointer ${
          isListening 
            ? 'bg-accent/5 border-accent shadow-sm' 
            : 'bg-card border-border hover:border-accent/40 shadow-sm hover:shadow'
        }`}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isListening ? 'bg-accent text-white scale-110 shadow-md shadow-accent/20' : 'bg-accent/15 text-accent'
        }`}>
          {isListening ? '⏹' : '🎙'}
        </div>
        
        {/* Animated Audio Waveform */}
        <div className="flex-grow flex items-center gap-1 h-5 overflow-hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar) => {
            const delays = ['0ms', '150ms', '300ms', '450ms', '100ms', '200ms', '350ms', '500ms', '150ms', '250ms'];
            const heights = ['h-2', 'h-4', 'h-3', 'h-5', 'h-4', 'h-2', 'h-3', 'h-4', 'h-3', 'h-2'];
            return (
              <div 
                key={bar}
                style={{ animationDelay: isListening ? delays[bar-1] : '0ms' }}
                className={`w-[3px] rounded-full bg-accent transition-all duration-300 ${
                  isListening 
                    ? 'animate-bounce h-4 opacity-90' 
                    : `${heights[bar-1]} opacity-25`
                }`}
              ></div>
            );
          })}
        </div>

        <button className="px-4 py-1.5 bg-foreground text-background rounded-full text-[10px] font-medium transition-colors hover:bg-foreground/90">
          {isListening ? 'Listening...' : 'Record Voice'}
        </button>
      </div>
    </div>
  );
};

export default AIPreview;
