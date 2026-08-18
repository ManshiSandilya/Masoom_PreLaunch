function PrivacySection() {
  const cards = [
    {
      title: "Privacy-first design",
      desc: "MASOOM is being designed with privacy and user control at the core."
    },
    {
      title: "Anonymous community",
      desc: "Community participation can be designed around anonymity rather than public profiles."
    },
    {
      title: "Control what you share",
      desc: "Users should have clear choices around the information they choose to provide."
    }
  ];

  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Your health deserves a private space.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            MASOOM is being designed with privacy, anonymity, and user control at the core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-card p-8 rounded-3xl border border-border text-center shadow-sm">
              <h3 className="text-xl font-medium text-foreground mb-4">{card.title}</h3>
              <p className="text-muted">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrivacySection;
