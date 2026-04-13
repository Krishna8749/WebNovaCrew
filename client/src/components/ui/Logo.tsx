interface LogoProps {
  variant?: 'header' | 'footer' | 'favicon' | 'square';
  className?: string;
}

const font = "'Syncopate', sans-serif";

export function Logo({ variant = 'header', className = '' }: LogoProps) {
  if (variant === 'header') {
    return (
      <div className={`flex flex-col leading-none ${className}`} style={{ display: 'inline-flex' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3em' }}>
          <span style={{ fontFamily: font, fontWeight: 700, fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: '#ffffff', letterSpacing: '0.08em' }}>WEB</span>
          <span style={{ fontFamily: font, fontWeight: 700, fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: '#3aa6ff', letterSpacing: '0.08em' }}>NOVA</span>
        </div>
        <span style={{ fontFamily: font, fontWeight: 700, fontSize: 'clamp(1.2rem, 3.2vw, 1.6rem)', color: '#7ed957', letterSpacing: 'clamp(0.4em, 1vw, 0.72em)', marginLeft: '0.05em' }}>CREW</span>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto ${variant === 'footer' ? 'h-16' : 'h-12'} ${className}`}
      aria-label="Web Nova Crew"
    >
      <rect width="100%" height="100%" fill="none" />
      <circle cx="250" cy="220" r="220" stroke="url(#gradRing)" strokeWidth="17" fill="none" />
      <defs>
        <linearGradient id="gradRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3aa6ff" />
          <stop offset="100%" stopColor="#7ed957" />
        </linearGradient>
      </defs>
      <text x="250" y="200" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="58" fontWeight="900" letterSpacing="2">
        <tspan fill="#ffffff">WEB </tspan>
        <tspan fill="#3aa6ff">NOVA</tspan>
      </text>
      <text x="250" y="285" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="64" fontWeight="900" letterSpacing="3" fill="#7ed957">
        CREW
      </text>
    </svg>
  );
}
