export type IllustrationType =
  | "preview"
  | "streaming"
  | "stepCopy"
  | "stepPaste"
  | "stepDownload"
  | "guideCopy"
  | "guideIphone"
  | "guideWifi";

type VectorCardIllustrationProps = {
  type: IllustrationType;
  className?: string;
};

export function VectorCardIllustration({ type, className = "" }: VectorCardIllustrationProps) {
  const containerClass = `relative w-full h-full flex items-center justify-center bg-gradient-to-br overflow-hidden select-none ${className}`;

  switch (type) {
    case "preview":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-blue-950/40`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(0,0,0,0))]" />
          <svg className="w-2/3 h-2/3 text-violet-500/20 max-w-[200px]" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <polygon points="43,35 63,50 43,65" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M15,50 H85 M50,15 V85" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </svg>
          {/* Glowing Play Overlay */}
          <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] animate-pulse">
            <svg className="h-6 w-6 text-violet-400 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      );

    case "streaming":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-cyan-950/40`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.15),transparent)]" />
          <svg className="w-3/4 h-3/4 text-cyan-500/30 max-w-[280px]" viewBox="0 0 200 150" fill="none">
            {/* Visualizer bars */}
            <rect x="20" y="90" width="8" height="30" rx="4" fill="currentColor" opacity="0.4" />
            <rect x="35" y="70" width="8" height="50" rx="4" fill="currentColor" opacity="0.6" />
            <rect x="50" y="40" width="8" height="80" rx="4" fill="currentColor" />
            <rect x="65" y="60" width="8" height="60" rx="4" fill="currentColor" />
            <rect x="80" y="80" width="8" height="40" rx="4" fill="currentColor" opacity="0.8" />
            <rect x="95" y="50" width="8" height="70" rx="4" fill="currentColor" />
            <rect x="110" y="30" width="8" height="90" rx="4" fill="currentColor" />
            <rect x="125" y="75" width="8" height="45" rx="4" fill="currentColor" opacity="0.7" />
            <rect x="140" y="95" width="8" height="25" rx="4" fill="currentColor" opacity="0.4" />
            
            {/* Pulsing signal lines */}
            <path d="M10,120 Q100,50 190,120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M10,130 Q100,70 190,130" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
          </svg>
        </div>
      );

    case "stepCopy":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-indigo-950/40`}>
          <svg className="w-1/2 h-1/2 text-indigo-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Phone Body */}
            <rect x="25" y="10" width="50" height="80" rx="6" strokeWidth="2" fill="none" />
            <line x1="45" y1="15" x2="55" y2="15" strokeWidth="1.5" />
            {/* Address Bar */}
            <rect x="33" y="24" width="34" height="8" rx="2" strokeWidth="1" />
            {/* Text placeholder lines inside phone */}
            <line x1="33" y1="42" x2="67" y2="42" strokeWidth="1" opacity="0.6" />
            <line x1="33" y1="50" x2="57" y2="50" strokeWidth="1" opacity="0.6" />
            {/* Glowing Copy Action */}
            <path d="M62,28 L78,28 L78,44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="78" cy="28" r="4" fill="currentColor" />
          </svg>
        </div>
      );

    case "stepPaste":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-blue-950/40`}>
          <svg className="w-1/2 h-1/2 text-violet-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Input card mockup */}
            <rect x="15" y="30" width="70" height="40" rx="6" strokeWidth="1.5" />
            {/* Paste Button */}
            <rect x="60" y="38" width="18" height="24" rx="3" strokeWidth="1.5" fill="none" />
            <circle cx="69" cy="50" r="3" fill="currentColor" />
            {/* Input text simulation */}
            <line x1="22" y1="50" x2="52" y2="50" strokeWidth="2" strokeDasharray="3 2" />
            {/* Cursor */}
            <line x1="53" y1="45" x2="53" y2="55" strokeWidth="2" className="animate-pulse" />
          </svg>
        </div>
      );

    case "stepDownload":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-emerald-950/40`}>
          <svg className="w-1/2 h-1/2 text-emerald-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Cloud storage server */}
            <rect x="25" y="60" width="50" height="25" rx="4" strokeWidth="1.5" />
            <circle cx="35" cy="72.5" r="2.5" fill="currentColor" />
            <line x1="45" y1="72.5" x2="68" y2="72.5" strokeWidth="1.5" opacity="0.6" />
            {/* Download Arrow */}
            <path d="M50,15 L50,45" strokeWidth="2" strokeLinecap="round" />
            <path d="M40,35 L50,45 L60,35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Transfer dots */}
            <line x1="50" y1="48" x2="50" y2="56" strokeWidth="2" strokeDasharray="2 3" />
          </svg>
        </div>
      );

    case "guideCopy":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-indigo-950/40`}>
          <svg className="w-1/2 h-1/2 text-indigo-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            {/* URL bar screen slice */}
            <rect x="10" y="30" width="80" height="40" rx="6" strokeWidth="1.5" />
            <circle cx="20" cy="50" r="3" fill="currentColor" />
            <line x1="28" y1="50" x2="62" y2="50" strokeWidth="2" />
            {/* Double Paper Copy sheets icon */}
            <rect x="68" y="42" width="10" height="14" rx="1.5" strokeWidth="1.5" />
            <path d="M72,38 L78,38 L78,50" strokeWidth="1" />
          </svg>
        </div>
      );

    case "guideIphone":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-blue-950/40`}>
          <svg className="w-1/2 h-1/2 text-violet-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            {/* Mobile device frame */}
            <rect x="28" y="10" width="44" height="80" rx="8" strokeWidth="2" />
            <line x1="43" y1="14" x2="57" y2="14" strokeWidth="1.5" />
            {/* Centered Play Card */}
            <rect x="34" y="30" width="32" height="40" rx="3" strokeWidth="1" />
            <polygon points="46,45 56,50 46,55" fill="currentColor" />
            {/* Signal waves */}
            <path d="M12,42 Q20,38 20,50 Q20,62 12,58" strokeWidth="1" strokeLinecap="round" />
            <path d="M88,42 Q80,38 80,50 Q80,62 88,58" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "guideWifi":
      return (
        <div className={`${containerClass} from-slate-950 via-slate-900 to-emerald-950/40`}>
          <svg className="w-1/2 h-1/2 text-emerald-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            {/* WiFi Signal Waves */}
            <path d="M35,65 A20,20 0 0,1 65,65" strokeWidth="2" strokeLinecap="round" />
            <path d="M25,55 A35,35 0 0,1 75,55" strokeWidth="2" strokeLinecap="round" />
            <path d="M15,45 A50,50 0 0,1 85,45" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="75" r="3.5" fill="currentColor" />
            {/* Download Arrow on left */}
            <path d="M50,15 L50,33" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M43,26 L50,33 L57,26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    default:
      return null;
  }
}
