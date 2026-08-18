const SpecialistSlots = () => (
  <div className="w-full max-w-sm animate-in fade-in duration-300">
    <div className="bg-background border border-border rounded-2xl p-6 text-left">
      <h4 className="text-lg font-medium text-foreground mb-2">Women's Health Specialist</h4>
      <p className="text-sm text-muted mb-6">Available consultation slots</p>
      <div className="space-y-3">
        {['09:30 AM', '11:00 AM', '02:30 PM'].map((time) => (
          <div key={time} className="p-3 border border-border rounded-xl flex justify-between items-center bg-card">
            <span className="text-foreground font-medium text-sm">{time}</span>
            <button className="text-xs text-accent font-medium px-3 py-1.5 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">Select</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SpecialistSlots;
