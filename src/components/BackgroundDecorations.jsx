function BackgroundDecorations() {
  const Flower = ({ className }) => (
    <svg 
      className={`text-accent ${className}`} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 72, 144, 216, 288].map((angle) => (
        <path
          key={angle}
          d="M12 2C10 2 8 6 9 9.5C9.5 11 11 12 12 12C13 12 14.5 11 15 9.5C16 6 14 2 12 2Z"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2.5" fill="currentColor" className="opacity-50" />
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top left corner - large peeking */}
      <Flower className="absolute -top-24 -left-24 w-96 h-96 opacity-15 rotate-12" />
      
      {/* Top right - slightly lower, medium */}
      <Flower className="absolute top-[15%] -right-20 w-80 h-80 opacity-10 -rotate-12" />
      
      {/* Middle left - very large, subtle background */}
      <Flower className="absolute top-[45%] -left-40 w-[40rem] h-[40rem] opacity-[0.04] rotate-45" />
      
      {/* Bottom right corner - large peeking */}
      <Flower className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] opacity-10 -rotate-45" />
      
      {/* Floating accents */}
      <Flower className="absolute bottom-[20%] left-[20%] w-32 h-32 opacity-15 rotate-90" />
      <Flower className="absolute top-[30%] right-[30%] w-24 h-24 opacity-10 rotate-[60deg]" />
    </div>
  );
}

export default BackgroundDecorations;
