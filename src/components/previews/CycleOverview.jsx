import { useState } from 'react';

const CycleOverview = () => {
  const [day, setDay] = useState(14);

  // Calculate phase details based on cycle day
  const getPhaseDetails = (currentDay) => {
    if (currentDay >= 1 && currentDay <= 5) {
      return {
        name: "Menstrual Phase",
        tip: "Focus on rest, hydration, and iron-rich foods.",
        color: "border-rose-500 text-rose-500 bg-rose-500/5",
        progressColor: "border-t-rose-500"
      };
    } else if (currentDay >= 6 && currentDay <= 11) {
      return {
        name: "Follicular Phase",
        tip: "Energy is rising. Great time for high-intensity tasks.",
        color: "border-teal-500 text-teal-500 bg-teal-500/5",
        progressColor: "border-t-teal-500"
      };
    } else if (currentDay >= 12 && currentDay <= 16) {
      return {
        name: "Ovulation Phase",
        tip: "Peak estrogen. High energy and social drive.",
        color: "border-accent text-accent bg-accent/5",
        progressColor: "border-t-accent"
      };
    } else {
      return {
        name: "Luteal Phase",
        tip: "Hormones winding down. Prioritize gentle exercise and sleep.",
        color: "border-amber-500 text-amber-500 bg-amber-500/5",
        progressColor: "border-t-amber-500"
      };
    }
  };

  const phase = getPhaseDetails(day);

  return (
    <div className="w-full max-w-sm animate-in fade-in duration-300">
      <div className="bg-background border border-border rounded-2xl p-6 text-left">
        <h4 className="text-lg font-medium text-foreground mb-6">Interactive Cycle Log</h4>
        
        {/* Dynamic circular dial */}
        <div className={`flex items-center justify-center w-36 h-36 rounded-full border-[6px] border-border/40 ${phase.progressColor} mx-auto mb-6 transition-all duration-300 relative`}>
          <div className="text-center">
            <span className="block text-3xl font-bold text-foreground">Day {day}</span>
            <span className="text-xs text-muted">of 28</span>
          </div>
        </div>

        {/* Phase Badge */}
        <div className="text-center mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${phase.color}`}>
            {phase.name}
          </span>
          <p className="text-xs text-muted mt-3 leading-relaxed min-h-[32px]">{phase.tip}</p>
        </div>

        {/* Slider Input */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-muted font-medium uppercase tracking-wider">
            <span>Day 1</span>
            <span className="text-accent font-semibold">Drag to test cycle days</span>
            <span>Day 28</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="28" 
            value={day} 
            onChange={(e) => setDay(parseInt(e.target.value))}
            className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-accent transition-colors focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CycleOverview;
