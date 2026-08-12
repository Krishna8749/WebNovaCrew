interface LogoProps {
  variant?: 'header' | 'footer' | 'favicon' | 'square';
  className?: string;
}

const font = "'Syncopate', sans-serif";

export function Logo({ variant = 'header', className = '' }: LogoProps) {
  if (variant === 'header') {
    return (
      <div className={`flex flex-col leading-none ${className}`} style={{ display: 'inline-flex' }}>
        <span style={{ fontFamily: font, fontWeight: 700, fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: '#ffffff', letterSpacing: '0.08em' }}>XC</span>
        <span style={{ fontFamily: font, fontWeight: 700, fontSize: 'clamp(1.2rem, 3.2vw, 1.6rem)', color: '#fb923c', letterSpacing: '0.12em', marginLeft: '0.05em' }}>FLOWN</span>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto ${variant === 'footer' ? 'h-16' : 'h-12'} ${className}`}
      aria-label="XcFlown"
    >
      <rect width="100%" height="100%" fill="none" />
      <circle cx="250" cy="220" r="220" stroke="url(#gradRing)" strokeWidth="17" fill="none" />
      <defs>
        <linearGradient id="gradRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <text x="250" y="200" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="80" fontWeight="900" letterSpacing="4">
        <tspan fill="#ffffff">XC</tspan>
      </text>
      <text x="250" y="295" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="72" fontWeight="900" letterSpacing="5" fill="#f97316">
        FLOWN
      </text>
    </svg>
  );
}
