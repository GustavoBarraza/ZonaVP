export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-semibold">Síguenos en redes</p>
          <p className="text-sm text-white/70">Mantente conectado y descubre más contenido.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/zonavpbq/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.35 3.608 1.325.975.976 1.263 2.243 1.325 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.35 2.633-1.325 3.608-.976.975-2.243 1.263-3.608 1.325-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.976-1.263-2.243-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.35-2.633 1.325-3.608C4.533 2.483 5.8 2.195 7.166 2.133 8.431 2.075 8.811 2.163 12 2.163zm0-2.163C8.691 0 8.257.013 7.022.072 5.665.132 4.327.415 3.28 1.462 2.233 2.51 1.95 3.848 1.89 5.205.831 6.44.818 6.874.818 12c0 5.126.013 5.56.072 6.795.06 1.357.343 2.695 1.39 3.742 1.047 1.047 2.385 1.33 3.742 1.39 1.235.059 1.669.072 6.795.072s5.56-.013 6.795-.072c1.357-.06 2.695-.343 3.742-1.39 1.047-1.047 1.33-2.385 1.39-3.742.059-1.235.072-1.669.072-6.795s-.013-5.56-.072-6.795c-.06-1.357-.343-2.695-1.39-3.742C20.29.415 18.952.132 17.595.072 16.36.013 15.926 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ZonaVP. Todos los derechos reservados.
      </div>
    </footer>
  )
}
