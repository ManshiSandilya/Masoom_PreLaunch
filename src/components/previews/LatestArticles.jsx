const LatestArticles = () => (
  <div className="w-full max-w-sm animate-in fade-in duration-300">
    <div className="bg-background border border-border rounded-2xl p-6 text-left">
      <h4 className="text-lg font-medium text-foreground mb-4">Latest Articles</h4>
      <div className="space-y-4">
        <div className="p-4 bg-card border border-border rounded-xl">
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Nutrition</span>
          <h5 className="font-medium text-foreground">Everyday Nutrition Basics</h5>
          <p className="text-sm text-muted mt-1">4 min read</p>
        </div>
        <div className="p-4 bg-card border border-border rounded-xl">
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">Wellness</span>
          <h5 className="font-medium text-foreground">Understanding Common Symptoms</h5>
          <p className="text-sm text-muted mt-1">5 min read</p>
        </div>
      </div>
    </div>
  </div>
);

export default LatestArticles;
