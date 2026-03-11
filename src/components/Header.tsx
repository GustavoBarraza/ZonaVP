import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const NAV_ITEMS = [
  { label: "Inicio", id: "inicio" },
  { label: "Acerca", id: "acerca" },
  { label: "Eventos", id: "eventos" },
  { label: "Grupos", id: "grupos" },
  { label: "Contacto", id: "contacto" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section tracking
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveSection(closest.id)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-60 origin-left"
        style={{
          width: progressWidth,
          background: "linear-gradient(90deg, #A6E22E, #66D9E8)",
        }}
      />

      <header className="fixed top-0 left-0 w-full z-50">
        {/* Logo bar */}
        <motion.div
          animate={{ height: scrolled ? 56 : 76 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex justify-between items-center px-6 md:px-12 overflow-hidden"
          style={{
            background: scrolled
              ? "rgba(0,0,0,0.75)"
              : "rgba(0,0,0,0.45)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(166,226,46,0.08)",
          }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 24px,#fff 24px,#fff 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,#fff 24px,#fff 25px)",
            }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex items-center gap-3"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.img
              src="/Img/Logo-zonavp.png"
              alt="Zona VP"
              animate={{ height: scrolled ? 30 : 40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="object-contain rounded-sm"
            />
            <motion.span
              animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -8 : 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block text-white/30 text-[10px] tracking-[0.3em] uppercase font-light select-none"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Zona VP
            </motion.span>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 flex flex-col gap-1.25 p-1"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[1.5px] bg-white/70 rounded-full"
                animate={{
                  width: i === 1 ? (mobileOpen ? 16 : 22) : 22,
                  rotate: mobileOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                  y: mobileOpen ? (i === 0 ? 6.5 : i === 2 ? -6.5 : 0) : 0,
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </motion.div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex justify-center items-center gap-1 h-12"
          style={{
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {NAV_ITEMS.map(({ label, id }, i) => {
            const isActive = activeSection === id
            return (
              <motion.button
                key={id}
                onClick={() => scrollTo(id)}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="relative px-5 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 group"
                style={{
                  color: isActive ? "#A6E22E" : "rgba(255,255,255,0.55)",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.08em",
                }}
              >
                {/* Active pill */}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-sm"
                    style={{ background: "rgba(166,226,46,0.07)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}

                {/* Hover underline */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#A6E22E] transition-all duration-300 group-hover:w-4/5"
                  style={{ width: isActive ? "80%" : "0%" }}
                />

                <span className="relative z-10 group-hover:text-[#A6E22E] transition-colors duration-200">
                  {label}
                </span>
              </motion.button>
            )
          })}
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(0,0,0,0.92)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(166,226,46,0.12)",
              }}
            >
              {NAV_ITEMS.map(({ label, id }, i) => {
                const isActive = activeSection === id
                return (
                  <motion.button
                    key={id}
                    onClick={() => scrollTo(id)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-3 w-full px-8 py-4 text-left border-b border-white/5 last:border-0"
                    style={{
                      color: isActive ? "#A6E22E" : "rgba(255,255,255,0.6)",
                      fontFamily: "'Courier New', monospace",
                      letterSpacing: "0.08em",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: isActive ? "#A6E22E" : "rgba(255,255,255,0.2)" }}
                    />
                    {label}
                  </motion.button>
                )
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}