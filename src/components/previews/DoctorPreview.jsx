import { useState } from 'react';

const DoctorPreview = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    if (!selectedSlot) return;
    setBooked(true);
    setTimeout(() => setBooked(false), 3000);
  };

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
              onClick={() => { setSelectedSlot(time); setBooked(false); }}
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

      {booked ? (
        <div className="p-3 bg-green-500/10 text-green-500 rounded-lg text-xs font-medium text-center animate-in fade-in duration-300">
          ✓ Mock reservation requested for {selectedSlot}!
        </div>
      ) : (
        <button 
          onClick={handleBook}
          disabled={!selectedSlot}
          className={`w-full py-2.5 font-medium rounded-lg text-xs transition-colors ${
            selectedSlot 
              ? 'bg-accent text-white hover:bg-accent-hover cursor-pointer' 
              : 'bg-accent/10 text-accent/50 cursor-not-allowed'
          }`}
        >
          {selectedSlot ? 'Book Appointment (Preview)' : 'Select a time slot'}
        </button>
      )}
    </div>
  );
};

export default DoctorPreview;
