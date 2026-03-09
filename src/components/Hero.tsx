import { useState, useEffect } from 'react';

const PARTICLES = [
  { left: 10, top: 20, delay: 0, duration: 8 },
  { left: 25, top: 60, delay: 1.2, duration: 12 },
  { left: 40, top: 15, delay: 2.5, duration: 7 },
  { left: 55, top: 75, delay: 0.8, duration: 10 },
  { left: 70, top: 35, delay: 3.1, duration: 9 },
  { left: 85, top: 55, delay: 1.7, duration: 11 },
  { left: 15, top: 80, delay: 4.2, duration: 6 },
  { left: 90, top: 10, delay: 2.0, duration: 13 },
  { left: 60, top: 90, delay: 0.5, duration: 8 },
  { left: 35, top: 45, delay: 3.8, duration: 7 },
  { left: 78, top: 70, delay: 1.5, duration: 10 },
  { left: 5,  top: 50, delay: 2.9, duration: 9 },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id:string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 40%, #1a0a2e 70%, #0a0a1a 100%)' }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(253, 200, 48, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Horizontal light line */}
      <div
        className="absolute left-0 right-0 opacity-20"
        style={{
          top: '38%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(253,200,48,0.8), transparent)',
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: i % 3 === 0 ? '3px' : '2px',
            height: i % 3 === 0 ? '3px' : '2px',
            background: i % 4 === 0 ? 'rgba(253,200,48,0.6)' : 'rgba(255,255,255,0.35)',
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        style={{
          transition: 'opacity 1.2s ease, transform 1.2s ease',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        {/* Cross icon */}
        <div className="mb-8 flex justify-center">
          <div
            className="relative flex items-center justify-center"
            style={{ width: 80, height: 80 }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(253,200,48,0.3) 0%, transparent 70%)',
                animation: 'pulseGlow 3s ease-in-out infinite',
              }}
            />
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="20" y="4" width="8" height="40" rx="2" fill="url(#crossGrad)" />
              <rect x="6" y="16" width="36" height="8" rx="2" fill="url(#crossGrad)" />
              <defs>
                <linearGradient id="crossGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Eyebrow label */}
        <div
          className="inline-block mb-5 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(253,200,48,0.12)',
            border: '1px solid rgba(253,200,48,0.3)',
            color: '#fcd34d',
            letterSpacing: '0.2em',
          }}
        >
          Comunidad espiritual
        </div>

        <h1
          className="font-bold leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          <span
            className="block mb-1 text-white"
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 300,
              letterSpacing: '0.15em',
              opacity: 0.7,
            }}
          >
            Bienvenido a
          </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #fef3c7, #fcd34d, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ZonaVP
          </span>
        </h1>

        <p
          className="mb-10 mx-auto"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '560px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Tu lugar para crecer espiritualmente y conectarte con Dios
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo('contacto')}
            className="relative overflow-hidden font-semibold rounded-full transition-transform duration-200 hover:scale-105"
            style={{
              padding: '14px 40px',
              background: 'linear-gradient(135deg, #16a34a, #15803d)',
              color: '#fff',
              fontSize: '1rem',
              boxShadow: '0 0 30px rgba(22,163,74,0.4)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Contáctanos
          </button>

          <button
            onClick={() => scrollTo('acerca')}
            className="font-semibold rounded-full transition-all duration-200 hover:scale-105"
            style={{
              padding: '13px 40px',
              background: 'transparent',
              color: '#fff',
              fontSize: '1rem',
              border: '1px solid rgba(255,255,255,0.35)',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
            }}
          >
            Conoce más
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2"
        style={{
          transform: 'translateX(-50%)',
          animation: 'bounceDown 2s ease-in-out infinite',
          opacity: 0.5,
        }}
      >
        <svg width="24" height="24" fill="none" stroke="blac" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          33%       { transform: translateY(-18px) translateX(8px); opacity: 0.7; }
          66%       { transform: translateY(-30px) translateX(-6px); opacity: 0.4; }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.4); opacity: 1; }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}