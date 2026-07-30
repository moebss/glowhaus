// Infinitely scrolling marquee strip — pure CSS animation, zero dependencies
// Place between any two sections for a premium Awwwards-style divider

const WORDS = [
  "GLOWHAUS",
  "·",
  "NAILS",
  "·",
  "LASHES",
  "·",
  "BROWS",
  "·",
  "FINELINE",
  "·",
  "KÖLN",
  "·",
];

export default function Marquee() {
  // Duplicate the words so the seamless loop works
  const repeated = [...WORDS, ...WORDS, ...WORDS];

  return (
    <div className="overflow-hidden py-5 bg-darker border-y border-white/5 select-none">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((word, i) => (
          <span
            key={i}
            className={
              word === "·"
                ? "text-gold text-lg"
                : "text-light/20 text-xs uppercase tracking-[0.3em] font-medium"
            }
          >
            {word}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
