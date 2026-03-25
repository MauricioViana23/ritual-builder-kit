import { useState, useEffect } from "react";

const TOTAL_SECONDS = 15 * 60;

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev <= 1 ? TOTAL_SECONDS : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="fade-up mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-gray mb-3">
        Oferta válida por:
      </p>
      <div className="inline-flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="inline-block min-w-[3.5rem] rounded-brand bg-plum px-4 py-3 font-display text-3xl font-bold text-warm-white glow-pink-pulse">
            {String(mins).padStart(2, "0")}
          </span>
          <span className="text-2xl font-bold text-plum">:</span>
          <span className="inline-block min-w-[3.5rem] rounded-brand bg-plum px-4 py-3 font-display text-3xl font-bold text-warm-white glow-pink-pulse">
            {String(secs).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className="mt-2 text-xs text-brand-gray">minutos restantes nesta condição</p>
    </div>
  );
};

export default CountdownTimer;
