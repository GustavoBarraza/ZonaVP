import { useState, useEffect } from "react";

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
  { left: 5, top: 50, delay: 2.9, duration: 9 },
];

const SLIDES = [
  {
    subtitle: "Bienvenido a",
    title: "ZonaVP",
    text: "Tu lugar para crecer espiritualmente y conectarte con Dios",
  },
  {
    subtitle: "Crece en",
    title: "Fe",
    text: "Descubre un espacio para fortalecer tu relación con Dios",
  },
  {
    subtitle: "Conecta con",
    title: "La Comunidad",
    text: "Personas que comparten tu fe y tu propósito",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 40%, #1a0a2e 70%, #0a0a1a 100%)",
      }}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(253, 200, 48, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light line */}
      <div
        className="absolute left-0 right-0 opacity-20"
        style={{
          top: "38%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(253,200,48,0.8), transparent)",
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: i % 3 === 0 ? "3px" : "2px",
            height: i % 3 === 0 ? "3px" : "2px",
            background:
              i % 4 === 0
                ? "rgba(253,200,48,0.6)"
                : "rgba(255,255,255,0.35)",
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        style={{
          transition: "opacity 1s ease, transform 1s ease",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >   

        {/* Title */}
        <h1
          className="font-bold leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          {/* FIX 1: Subtitle now rendered (was missing before) */}
          <span
            className="block font-light tracking-widest text-white/60 mb-2"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            {SLIDES[index].subtitle}
          </span>

          <span
            style={{
              background: "linear-gradient(135deg,#d9ff7a,#A6E22E,#6fdc2b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 10px rgba(166,226,46,0.7))",
            }}
          >
            {SLIDES[index].title}
          </span>
        </h1>

        {/* Text */}
        <p className="mb-10 mx-auto text-lg text-white/70 max-w-xl">
          {SLIDES[index].text}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("contacto")}
            className="px-10 py-3 rounded-full font-semibold bg-green-600 hover:bg-green-700 transition"
          >
            Contáctanos
          </button>

          <button
            onClick={() => scrollTo("acerca")}
            className="px-10 py-3 rounded-full font-semibold border border-white/40 hover:bg-white/10 transition"
          >
            Conoce más
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-yellow-400" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
        <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeWidth="1.5" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes floatParticle {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-25px)}
        }

        @keyframes pulseGlow {
          0%,100%{transform:scale(1);opacity:.6}
          50%{transform:scale(1.4);opacity:1}
        }
      `}</style>
    </section>
  );
}