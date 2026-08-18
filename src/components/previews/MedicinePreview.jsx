import { useState } from 'react';

const MedicinePreview = () => {
  const [selectedMed, setSelectedMed] = useState(null);

  const medicines = [
    { name: "Folic Acid", category: "Prenatal / Daily", desc: "Crucial for reproductive health and cellular development. Recommended daily allowance is typically 400mcg." },
    { name: "Iron Supplement", category: "Anemia Care", desc: "Supports healthy hemoglobin levels. Best absorbed on an empty stomach or with Vitamin C." },
    { name: "Vitamin D3", category: "Bone & Immunity", desc: "Aids calcium absorption and helps balance immune response. Usually paired with calcium supplements." }
  ];

  return (
    <div className="bg-background rounded-xl p-5 border border-border mt-6 max-h-[400px] overflow-y-auto text-left">
      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Medicine Recommendations</p>
      
      <div className="space-y-3">
        {medicines.map((med, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedMed(selectedMed === index ? null : index)}
            className="p-3 bg-card border border-border rounded-xl cursor-pointer hover:border-accent/40 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h6 className="font-medium text-xs text-foreground">{med.name}</h6>
                <span className="text-[9px] text-accent bg-accent/5 px-2 py-0.5 rounded-full inline-block mt-1 font-semibold">{med.category}</span>
              </div>
              <span className="text-xs text-muted">{selectedMed === index ? '▲' : '▼'}</span>
            </div>
            
            {selectedMed === index && (
              <p className="text-[11px] text-muted mt-2 border-t border-border/50 pt-2 leading-relaxed animate-in fade-in duration-200">
                {med.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinePreview;
