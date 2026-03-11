import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const SLIDES = [
  {
    image: "/Img/Young.jpeg",
    subtitle: "Bienvenido a",
    title: "ZonaVP",
    text: "Tu lugar para crecer espiritualmente y conectarte con Dios.",
  },
  {
    image: "/Img/Logo-zonavp.png",
    subtitle: "Crece en",
    title: "Fe y comunidad",
    text: "Descubre un espacio para fortalecer tu relación con Dios.",
  },
]

const DURATION = 7000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = (nextIndex?: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setProgress(0)

    if (typeof nextIndex === "number") {
      setIndex(nextIndex)
    }

    const start = Date.now()
    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, (elapsed / DURATION) * 100)

      if (pct >= 100) {
        clearInterval(intervalRef.current!)
        setIndex((i) => (i + 1) % SLIDES.length)
        resetTimer()
      } else {
        setProgress(pct)
      }
    }, 30)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const slide = SLIDES[index]

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">

      {/* ── Imágenes ── */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slide.image}
          alt={slide.title}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* ── Overlay oscuro ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* ── Texto ── */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-28 px-8 md:px-20 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="block text-white/50 uppercase tracking-[0.3em] mb-2 font-light"
              style={{ fontSize: "0.75rem", fontFamily: "'Courier New', monospace" }}
            >
              {slide.subtitle}
            </span>

            <h1
              className="text-white font-bold leading-none mb-4"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              {slide.title}
            </h1>

            <p className="text-white/80 max-w-xl leading-relaxed text-lg md:text-xl">
              {slide.text}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("eventos")}
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-emerald-300"
              >
                Ver eventos
              </button>

              <button
                type="button"
                onClick={() => scrollTo("acerca")}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Conocer más
              </button>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Slide ${idx + 1}`}
                    onClick={() => resetTimer(idx)}
                    className={`h-2 w-2 rounded-full transition-opacity ${
                      idx === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex-1 h-2 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full bg-emerald-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
     