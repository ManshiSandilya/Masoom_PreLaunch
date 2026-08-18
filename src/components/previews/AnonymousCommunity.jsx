const AnonymousCommunity = () => (
  <div className="w-full max-w-sm animate-in fade-in duration-300">
    <div className="bg-background border border-border rounded-2xl p-6 text-left">
      <h4 className="text-lg font-medium text-foreground mb-4">Anonymous Community</h4>
      <div className="space-y-4">
        <div className="p-4 bg-card border border-border rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[10px]">👤</div>
            <span className="text-xs font-medium text-muted">Anonymous user</span>
          </div>
          <p className="text-foreground text-xs leading-relaxed mb-3">"Has anyone experienced something similar?"</p>
          <span className="text-[10px] text-muted font-medium bg-background px-2 py-0.5 border border-border rounded-full">12 replies</span>
        </div>
      </div>
    </div>
  </div>
);

export default AnonymousCommunity;
