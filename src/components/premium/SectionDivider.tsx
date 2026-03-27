/**
 * Decorative SVG dividers between sections — inspired by vk.no's
 * abstract shape approach. Adds visual breathing room and personality.
 */

export function WaveDivider({ flip = false, color = "#f8f7f4" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg className="relative block w-full h-[60px] md:h-[80px]" viewBox="0 0 1200 80" preserveAspectRatio="none">
        <path
          d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function AngleDivider({ color = "#1a2744" }: { color?: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <polygon points="0,60 1200,0 1200,60" fill={color} />
      </svg>
    </div>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute opacity-[0.04] ${className}`} width="200" height="200" viewBox="0 0 200 200" fill="none">
      {Array.from({ length: 100 }).map((_, i) => {
        const x = (i % 10) * 20 + 10;
        const y = Math.floor(i / 10) * 20 + 10;
        return <circle key={i} cx={x} cy={y} r="2" fill="#2563eb" />;
      })}
    </svg>
  );
}

export function AbstractShape({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute opacity-[0.03] ${className}`} viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="150" stroke="#2563eb" strokeWidth="1" />
      <circle cx="200" cy="200" r="100" stroke="#dc2626" strokeWidth="0.8" />
      <line x1="50" y1="200" x2="350" y2="200" stroke="#2563eb" strokeWidth="0.5" />
      <line x1="200" y1="50" x2="200" y2="350" stroke="#2563eb" strokeWidth="0.5" />
    </svg>
  );
}
