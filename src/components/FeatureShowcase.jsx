import { useState } from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/constants';
import ComingSoon from './previews/ComingSoon';

function FeatureShowcase() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section id="features" className="min-h-screen pt-32 pb-16 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            ✨ Interactive Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Everything you need, in one private space.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            MASOOM brings these experiences together. Explore and interact with the preview cards below to see our upcoming features, and be a part of shaping our direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {features.map((feature, index) => {
            const isExpanded = expandedCard === feature.id;
            return (
              <motion.div
                layout
                key={feature.id}
                onClick={() => toggleExpand(feature.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  layout: { duration: 0.4, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                className={`bg-card rounded-3xl p-6 sm:p-8 border flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 ease-out ${
                  isExpanded 
                    ? 'md:col-span-2 ring-1 ring-accent/20 border-border cursor-pointer shadow-sm' 
                    : 'border-border hover:border-accent/40 hover:shadow-md cursor-pointer shadow-sm'
                }`}
              >
                <div className={`flex flex-col h-full ${isExpanded ? 'md:flex-row md:gap-12' : ''}`}>
                  
                  {/* Left Side (or Top on mobile/closed) */}
                  <div className={isExpanded ? 'md:w-[45%] flex flex-col' : 'flex flex-col h-full'}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-background w-12 h-12 flex items-center justify-center rounded-xl border border-border shrink-0 shadow-sm text-2xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="animate-in fade-in duration-500 mb-6 flex-grow flex flex-col">
                        <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Capabilities</h4>
                        <ul className="space-y-2 mb-8">
                          {feature.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted">
                              <span className="text-accent">•</span> {cap}
                            </li>
                          ))}
                        </ul>
                        <div className="hidden md:block mt-auto border-t border-border/50 pt-6">
                          <ComingSoon />
                        </div>
                      </div>
                    )}

                    {!isExpanded && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleExpand(feature.id); }}
                        className="mt-auto text-accent font-medium text-sm hover:text-accent-hover transition-colors w-max flex items-center gap-1"
                      >
                        Explore preview &rarr;
                      </button>
                    )}
                  </div>

                  {/* Right Side (Preview UI) */}
                  {isExpanded && (
                    <div 
                      onClick={(e) => e.stopPropagation()}
                      className="animate-in fade-in slide-in-from-right-8 duration-500 md:w-[55%] flex flex-col mt-8 md:mt-0 cursor-default"
                    >
                      <div className="flex justify-between items-center mb-4 border-b border-border/50 pb-2">
                        <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Interactive Preview</h4>
                        <button 
                          onClick={() => toggleExpand(feature.id)}
                          className="text-muted hover:text-foreground transition-colors text-sm flex items-center gap-1 bg-background px-3 py-1 rounded-full border border-border"
                        >
                          Close ✕
                        </button>
                      </div>
                      
                      <div className="flex-grow">
                        {feature.renderPreview()}
                      </div>

                      <div className="md:hidden mt-8 border-t border-border/50 pt-6">
                        <ComingSoon />
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
