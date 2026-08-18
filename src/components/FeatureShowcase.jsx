import { useState } from 'react';
import { motion } from 'framer-motion';

function FeatureShowcase() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const features = [
    {
      id: 1,
      title: "Cycle Tracking",
      description: "Keep a simple view of your cycle and understand your monthly patterns.",
      icon: "🌙",
      renderUI: (isExpanded) => (
        <div className="bg-background rounded-xl p-4 border border-border h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-foreground text-sm">Cycle Overview</span>
            <span className="text-xs text-muted">Day 14 of 28</span>
          </div>
          <div className="flex-grow flex items-center justify-center py-4">
             <div className="w-24 h-24 rounded-full border-4 border-accent/20 border-t-accent flex items-center justify-center">
               <span className="text-accent text-xs font-bold">Ovulation</span>
             </div>
          </div>
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
               <div className="flex justify-between text-muted text-[10px] mb-2">
                 <span>M</span><span>T</span><span>W</span><span className="text-accent font-bold">T</span><span>F</span><span>S</span><span>S</span>
               </div>
               <div className="flex justify-between text-foreground text-xs">
                 <span>12</span><span>13</span><span className="bg-accent text-white w-5 h-5 flex items-center justify-center rounded-full">14</span><span>15</span><span>16</span><span>17</span><span>18</span>
               </div>
            </div>
          )}
        </div>
      )
    },
    {
      id: 2,
      title: "Doctor Consultation",
      description: "Explore a simple path from health questions to doctor consultations.",
      icon: "🩺",
      renderUI: (isExpanded) => (
        <div className="bg-background rounded-xl p-4 border border-border h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center text-xs">👩‍⚕️</div>
            <div>
              <div className="font-medium text-foreground text-sm">Women's Health Specialist</div>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-xs text-muted mb-3">Available times</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-card border border-border rounded text-[10px] text-foreground">09:30 AM</span>
              <span className="px-2 py-1 bg-card border border-border rounded text-[10px] text-foreground">11:00 AM</span>
            </div>
          </div>
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-border flex gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
               <button className="flex-1 py-1.5 bg-card border border-border rounded-lg text-xs text-foreground hover:bg-accent/5">Chat</button>
               <button className="flex-1 py-1.5 bg-accent/10 text-accent font-medium rounded-lg text-xs hover:bg-accent/20">View consultation</button>
            </div>
          )}
        </div>
      )
    },
    {
      id: 3,
      title: "Health Education",
      description: "Explore approachable resources covering everyday women's health topics.",
      icon: "📖",
      renderUI: (isExpanded) => (
        <div className="bg-background rounded-xl p-4 border border-border h-full flex flex-col">
          <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide pb-1">
             <span className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full whitespace-nowrap">Cycle Health</span>
             <span className="text-[10px] font-medium text-muted bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap">Nutrition</span>
             <span className="text-[10px] font-medium text-muted bg-card border border-border px-2 py-0.5 rounded-full whitespace-nowrap">Wellness</span>
          </div>
          <div className="flex-grow">
            <div className="bg-card p-3 rounded-lg border border-border mb-2">
              <h6 className="text-xs font-medium text-foreground mb-1">Understanding Your Cycle</h6>
              <p className="text-[10px] text-muted">5 min read</p>
            </div>
          </div>
          {isExpanded && (
            <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
               <div className="bg-card p-3 rounded-lg border border-border">
                <h6 className="text-xs font-medium text-foreground mb-1">Everyday Nutrition Basics</h6>
                <p className="text-[10px] text-muted">4 min read</p>
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      id: 4,
      title: "Anonymous Community",
      description: "Ask questions, share experiences, and participate without revealing your identity.",
      icon: "💬",
      renderUI: (isExpanded) => (
        <div className="bg-background rounded-xl p-4 border border-border h-full flex flex-col">
          <h6 className="font-medium text-foreground text-sm mb-4">Anonymous Community</h6>
          <div className="flex-grow">
            <div className="bg-card p-3 rounded-lg border border-border mb-3 relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-accent/20"></div>
                <span className="text-[10px] font-medium text-muted">Anonymous user</span>
              </div>
              <p className="text-foreground text-xs mb-2">"Has anyone experienced this before?"</p>
              <div className="text-[10px] text-muted">12 replies</div>
            </div>
          </div>
          {isExpanded && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-accent-light flex-shrink-0 mt-1"></div>
                <div className="bg-card p-2 rounded-lg border border-border flex-grow">
                  <p className="text-foreground text-xs mb-1">"Sharing what helped me..."</p>
                  <button className="text-[10px] text-accent font-medium">Reply</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Everything you need, in one private space.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Explore how MASOOM brings together the tools you need for everyday health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl bg-background w-12 h-12 flex items-center justify-center rounded-xl border border-border">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>

              <div className="flex-grow mb-6 min-h-[160px]">
                {feature.renderUI(expandedCard === feature.id)}
              </div>

              <button 
                onClick={() => toggleExpand(feature.id)}
                className="mt-auto text-accent font-medium text-sm hover:text-accent-hover transition-colors flex items-center gap-1 w-max"
              >
                {expandedCard === feature.id ? 'Close preview ↑' : 'Explore preview →'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
