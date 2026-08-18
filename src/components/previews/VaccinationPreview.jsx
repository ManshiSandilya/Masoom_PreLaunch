import { useState } from 'react';

const VaccinationPreview = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Vaccination Planner</p>
      
      <div className="animate-in fade-in duration-300">
        <p className="text-xs font-medium text-foreground mb-3 uppercase tracking-wider">Upcoming Reminders</p>
        <div 
          onClick={() => setIsDone(!isDone)}
          className={`cursor-pointer transition-all duration-300 p-4 rounded-xl border mb-4 ${
            isDone ? 'bg-green-500/5 border-green-500/30' : 'bg-card border-border hover:border-accent/40'
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <h6 className={`font-medium text-sm transition-all duration-200 ${isDone ? 'text-muted line-through' : 'text-foreground'}`}>HPV Vaccine</h6>
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${isDone ? 'bg-green-500 border-green-500 text-white' : 'border-muted text-transparent'}`}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
          <p className="text-xs text-muted mb-3">Schedule: Ages 18–26 (Dose 1)</p>
          <div className="flex items-center justify-between">
            <span className={`text-[10px] font-medium px-2 py-1 rounded-full transition-colors ${
              isDone ? 'text-green-500 bg-green-500/10' : 'text-accent bg-accent/10'
            }`}>
              {isDone ? 'Completed ✓' : 'Remind Me'}
            </span>
            <button className="text-[10px] text-foreground font-medium underline hover:text-accent transition-colors" onClick={(e) => e.stopPropagation()}>View Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationPreview;
