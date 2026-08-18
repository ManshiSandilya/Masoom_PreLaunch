const CycleOverview = () => (
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

export default CycleOverview;
