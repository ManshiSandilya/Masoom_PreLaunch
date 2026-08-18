import { useState } from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => (
  <div className="mt-8 pt-6 border-t border-border">
    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-wider rounded-full mb-3 uppercase">
      Coming Soon
    </div>
    <p className="text-sm text-muted mb-4">
      We're building this experience as part of MASOOM's early-access launch.
    </p>
    <a 
      href="#get-access" 
      className="inline-flex items-center justify-center px-5 py-2.5 bg-foreground text-background font-medium rounded-full hover:bg-accent transition-colors text-sm w-full sm:w-auto"
    >
      Get Early Access
    </a>
  </div>
);

const DoctorPreview = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center text-lg">👩‍⚕️</div>
        <div>
          <div className="font-medium text-foreground text-sm">Women's Health Specialist</div>
          <div className="text-xs text-muted">Specialty: Women's Health</div>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-xs font-medium text-foreground mb-3">Available times</p>
        <div className="flex gap-2 flex-wrap">
          {['09:30 AM', '11:00 AM', '02:30 PM'].map(time => (
            <button 
              key={time}
              onClick={() => setSelectedSlot(time)}
              className={`px-3 py-1.5 border rounded-lg text-xs transition-colors ${
                selectedSlot === time 
                  ? 'bg-accent text-white border-accent' 
                  : 'bg-card border-border text-foreground hover:border-accent/50'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-xs font-medium text-foreground mb-2">Consultation type</p>
        <div className="p-3 bg-card border border-border rounded-lg text-xs text-foreground flex items-center gap-2">
          <span>📹</span> Video Consultation
        </div>
      </div>

      <button className="w-full py-2.5 bg-accent/10 text-accent font-medium rounded-lg text-xs hover:bg-accent/20 transition-colors">
        Book Appointment
      </button>
    </div>
  );
};

const VaccinationPreview = () => {
  const [activeTab, setActiveTab] = useState('vaccination');

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <div className="flex gap-2 mb-6 border-b border-border pb-2">
        <button 
          onClick={() => setActiveTab('vaccination')}
          className={`text-xs font-medium px-2 py-1 transition-colors ${activeTab === 'vaccination' ? 'text-accent border-b-2 border-accent' : 'text-muted hover:text-foreground'}`}
        >
          Vaccination
        </button>
        <button 
          onClick={() => setActiveTab('medicine')}
          className={`text-xs font-medium px-2 py-1 transition-colors ${activeTab === 'medicine' ? 'text-accent border-b-2 border-accent' : 'text-muted hover:text-foreground'}`}
        >
          Medicine Guidance
        </button>
      </div>

      {activeTab === 'vaccination' ? (
        <div className="animate-in fade-in duration-300">
          <p className="text-xs font-medium text-foreground mb-3 uppercase tracking-wider">Upcoming</p>
          <div className="bg-card p-4 rounded-xl border border-border mb-4">
            <h6 className="font-medium text-foreground text-sm mb-1">HPV Vaccine</h6>
            <p className="text-xs text-muted mb-3">Schedule: 18–26</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">Upcoming Reminder</span>
              <button className="text-[10px] text-foreground font-medium underline">View Schedule</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in duration-300">
           <p className="text-xs font-medium text-foreground mb-3 uppercase tracking-wider">Medicine Guidance</p>
           <div className="space-y-3 mb-4">
             <div className="bg-card p-3 rounded-xl border border-border">
               <h6 className="font-medium text-foreground text-xs mb-1">Medicine A</h6>
               <p className="text-[10px] text-muted">General information & guidance</p>
             </div>
             <div className="bg-card p-3 rounded-xl border border-border">
               <h6 className="font-medium text-foreground text-xs mb-1">Medicine B</h6>
               <p className="text-[10px] text-muted">General information & guidance</p>
             </div>
           </div>
           <button className="w-full py-2 bg-card border border-border rounded-lg text-xs text-foreground hover:bg-accent/5 transition-colors">
             Explore Guidance
           </button>
        </div>
      )}
    </div>
  );
};

const AIPreview = () => {
  const [response, setResponse] = useState("I can help you explore general health information or guide you to a relevant MASOOM service.");

  const handleAction = (action) => {
    if (action === 'learn') setResponse("Sure, I can help you find curated articles on women's health. What topic are you interested in?");
    if (action === 'doctor') setResponse("I can help you navigate to the consultations area to find a specialist.");
    if (action === 'resources') setResponse("Let me point you towards our vaccination and medicine guidance resources.");
  };

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background text-xs font-serif">M</div>
        <span className="font-medium text-foreground text-sm">MASOOM AI</span>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-card p-3 rounded-xl border border-border rounded-tl-none w-5/6">
          <p className="text-xs text-foreground">How can I help?</p>
        </div>
        
        <div className="bg-accent/10 p-3 rounded-xl rounded-tr-none w-5/6 ml-auto">
          <p className="text-xs text-foreground text-right">I have a question about my cycle.</p>
        </div>

        <div className="bg-card p-3 rounded-xl border border-border rounded-tl-none w-5/6 animate-in fade-in duration-300">
          <p className="text-xs text-foreground">{response}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => handleAction('learn')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-colors">Learn more</button>
        <button onClick={() => handleAction('doctor')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-colors">Find a doctor</button>
        <button onClick={() => handleAction('resources')} className="px-3 py-1.5 bg-background border border-border rounded-full text-[10px] text-muted hover:border-accent hover:text-foreground transition-colors">Explore resources</button>
      </div>

      <div className="flex items-center gap-3 p-2 bg-card border border-border rounded-full">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">🎙</div>
        <div className="flex-grow flex items-center gap-1 opacity-50">
          <div className="w-1 h-3 bg-muted rounded-full"></div>
          <div className="w-1 h-4 bg-muted rounded-full"></div>
          <div className="w-1 h-2 bg-muted rounded-full"></div>
          <div className="w-1 h-5 bg-muted rounded-full"></div>
          <div className="w-1 h-3 bg-muted rounded-full"></div>
        </div>
        <button className="px-4 py-1.5 bg-foreground text-background rounded-full text-[10px] font-medium">Ask MASOOM</button>
      </div>
    </div>
  );
};

const SensitivePreview = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto">
      <div className="mb-6 border-b border-border pb-4">
        <h6 className="font-serif text-foreground text-lg mb-2">Sensitive Health</h6>
        <p className="text-xs text-muted">A private space for questions you may prefer to ask privately.</p>
      </div>

      {!selectedTopic ? (
        <div className="animate-in fade-in duration-300">
          <p className="text-xs font-medium text-foreground mb-3">Topics</p>
          <div className="space-y-2 mb-6">
            {['Reproductive Health', 'Sexual Wellness', 'Personal Concerns'].map(topic => (
              <button 
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className="w-full text-left p-3 bg-card border border-border rounded-xl text-xs text-foreground hover:border-accent transition-colors flex justify-between items-center"
              >
                {topic} <span>&rarr;</span>
              </button>
            ))}
          </div>
          <div className="p-4 bg-card border border-border rounded-xl flex gap-3 items-start">
            <span className="text-accent mt-0.5">🔒</span>
            <div>
              <p className="text-xs font-medium text-foreground mb-1">Private conversation</p>
              <p className="text-[10px] text-muted">Your questions stay within this private space.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in slide-in-from-right-4 duration-300">
          <button onClick={() => setSelectedTopic(null)} className="text-[10px] text-muted mb-4 hover:text-foreground">&larr; Back to topics</button>
          <p className="text-sm font-medium text-foreground mb-4">{selectedTopic}</p>
          <div className="space-y-4 mb-6">
            <div className="bg-card p-3 rounded-xl border border-border opacity-70 blur-[1px]">
              <p className="text-xs text-foreground">"How can I understand..."</p>
            </div>
            <div className="bg-card p-3 rounded-xl border border-border opacity-60 blur-[2px]">
              <p className="text-xs text-foreground">"Is it normal to..."</p>
            </div>
          </div>
          <button className="w-full py-2 bg-accent/10 text-accent font-medium rounded-lg text-xs hover:bg-accent/20 transition-colors">
            Explore Private Support
          </button>
        </div>
      )}
    </div>
  );
};


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
      title: "Doctor Consultations",
      description: "Book appointments with doctors directly through the platform — no more switching between apps and websites.",
      icon: "🩺",
      capabilities: [
        "Connect with specialists",
        "View available slots",
        "Simple booking flow"
      ],
      renderPreview: () => <DoctorPreview />
    },
    {
      id: 2,
      title: "Vaccination & Medicine Guidance",
      description: "Vaccination awareness, scheduling, and medicine guidance, brought into one place instead of scattered across the internet.",
      icon: "🛡️",
      capabilities: [
        "Vaccination awareness",
        "Schedule tracking",
        "General medicine resources"
      ],
      renderPreview: () => <VaccinationPreview />
    },
    {
      id: 3,
      title: "AI Health Assistant",
      description: "An adaptive, voice-interactive AI assistant designed to answer health questions and guide you to the right service.",
      icon: "✨",
      capabilities: [
        "Conversational guide",
        "Health information assistant",
        "Service navigator"
      ],
      renderPreview: () => <AIPreview />
    },
    {
      id: 4,
      title: "Sensitive Health Support",
      description: "A private space for questions about sexual and reproductive health, with confidential conversations and specialist guidance.",
      icon: "🔒",
      capabilities: [
        "Confidential conversations",
        "Specialist consultations",
        "Private AI guidance"
      ],
      renderPreview: () => <SensitivePreview />
    }
  ];

  return (
    <section id="features" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Everything you need, in one private space.
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            MASOOM brings these experiences together. One place for the health experiences that are usually scattered everywhere.
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
              className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm flex flex-col h-full transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl bg-background w-12 h-12 flex items-center justify-center rounded-xl border border-border shrink-0 shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>

              {expandedCard === feature.id && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300 flex-grow flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Capabilities</h4>
                    <ul className="space-y-2">
                      {feature.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted">
                          <span className="text-accent">•</span> {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Preview</h4>
                  {feature.renderPreview()}
                  
                  <div className="mt-auto">
                    <ComingSoon />
                  </div>
                </div>
              )}

              <button 
                onClick={() => toggleExpand(feature.id)}
                className={`text-accent font-medium text-sm hover:text-accent-hover transition-colors flex items-center gap-1 w-max ${
                  expandedCard === feature.id ? 'mt-8' : 'mt-auto'
                }`}
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
