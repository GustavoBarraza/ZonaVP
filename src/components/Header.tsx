import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-center justify-between h-14">

          <div className="font-semibold text-gray-900">
            ZonaVP
          </div>

          {/* Desktop menu */}
          <nav className="font-navbar hidden md:flex items-center gap-8 text-sm tracking-wide text-gray-700">
            <a href="#inicio" className="hover:text-black transition-colors">Inicio</a>
            <a href="#acerca" className="hover:text-black transition-colors">Acerca</a>
            <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile menu */}
        {open && (
          <div className="font-navbar md:hidden py-4 flex flex-col gap-3 text-sm text-gray-700">
            <a href="#inicio" className="hover:text-black transition-colors">Inicio</a>
            <a href="#acerca" className="hover:text-black transition-colors">Acerca</a>
            <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
          </div>
        )}

      </div>
    </header>
  );
}