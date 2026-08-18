import { useState } from 'react';

function ConsultationWidget() {
  const [specialty, setSpecialty] = useState('');
  const [date, setDate] = useState('');
  const [feedback, setFeedback] = useState('');

  const handlePreview = () => {
    if (!specialty || !date) {
      setFeedback('⚠️ Please select both a specialty and preferred date.');
      return;
    }
    const specialtyNames = {
      gyn: 'Gynecology',
      ob: 'Obstetrics',
      nut: 'Nutritionist',
      psy: 'Mental Health',
      der: 'Dermatology'
    };
    setFeedback(`✓ Demo search requested for ${specialtyNames[specialty]} on ${date}. This features is planned for release!`);
    setTimeout(() => setFeedback(''), 5000);
  };

  return (
    <section className="py-16 bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          {/* Decorative subtle background element */}
          <div className="absolute -top-10 -right-10 text-[150px] opacity-[0.03] rotate-12 pointer-events-none">
            🩺
          </div>
          
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
              <div className="w-full lg:w-5/12 text-center lg:text-left">
                <h2 className="text-3xl font-serif text-foreground mb-3">
                  Need to speak with a specialist?
                </h2>
                <p className="text-muted text-sm max-w-md mx-auto lg:mx-0">
                  Designed to let you skip the waiting room. We are building a network of experts so you can soon book private, confidential video consultations in minutes.
                </p>
              </div>
              
              <div className="w-full lg:w-7/12 bg-background border border-border p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-sm">
                <div className="flex-1 flex flex-col p-3 hover:bg-card rounded-xl transition-colors">
                  <label className="text-[10px] font-medium text-accent uppercase tracking-wider mb-1">Specialty</label>
                  <select 
                    className="bg-transparent border-none text-sm text-foreground focus:ring-0 p-0 outline-none cursor-pointer"
                    value={specialty}
                    onChange={(e) => { setSpecialty(e.target.value); setFeedback(''); }}
                  >
                    <option value="" disabled className="text-muted">Select a specialty...</option>
                    <option value="gyn" className="bg-card">Gynecology</option>
                    <option value="ob" className="bg-card">Obstetrics</option>
                    <option value="nut" className="bg-card">Nutritionist</option>
                    <option value="psy" className="bg-card">Mental Health</option>
                    <option value="der" className="bg-card">Dermatology</option>
                  </select>
                </div>
                
                <div className="hidden sm:block w-px bg-border my-4 mx-1"></div>
                
                <div className="flex-1 flex flex-col p-3 hover:bg-card rounded-xl transition-colors">
                  <label className="text-[10px] font-medium text-accent uppercase tracking-wider mb-1">Preferred Date</label>
                  <input 
                    type="date" 
                    className="bg-transparent border-none text-sm text-foreground focus:ring-0 p-0 outline-none cursor-pointer w-full [&::-webkit-calendar-picker-indicator]:invert-0 dark:[&::-webkit-calendar-picker-indicator]:invert"
                    value={date}
                    onChange={(e) => { setDate(e.target.value); setFeedback(''); }}
                  />
                </div>
                
                <button 
                  onClick={handlePreview}
                  className="bg-foreground text-background font-medium px-6 py-4 rounded-xl hover:bg-accent transition-colors text-sm sm:w-auto w-full flex items-center justify-center gap-2 mt-2 sm:mt-0 shadow-sm"
                >
                  Preview <span className="hidden sm:inline">&rarr;</span>
                </button>
              </div>
            </div>

            {feedback && (
              <div className={`p-4 rounded-xl text-sm font-medium text-center animate-in fade-in duration-300 ${
                feedback.startsWith('✓') ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'
              }`}>
                {feedback}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationWidget;
