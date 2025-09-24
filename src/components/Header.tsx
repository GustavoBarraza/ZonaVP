function Header() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">I</div>
          <h1 className="text-lg font-semibold">Iglesia Misión Internacional Casa de Dios</h1>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#inicio" className="hover:text-green-600 transition-colors">Inicio</a>
          <a href="#acerca" className="hover:text-green-600 transition-colors">Acerca</a>
          <a href="#contacto" className="hover:text-green-600 transition-colors">Contacto</a>
          <a href="#donaciones" className="hover:text-green-600 transition-colors">Donaciones</a>

        </nav>

        <div className="md:hidden">
          <button className="p-2 rounded border border-gray-300">☰</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
