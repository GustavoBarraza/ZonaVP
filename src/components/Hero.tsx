function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ 
        backgroundImage: "url('')" 
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative text-center text-white bg-black/40 p-8 rounded-lg max-w-4xl mx-4 backdrop-blur-sm">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Bienvenido a Iglesia Misión Internacional
          <br />
          <span className="text-yellow-300">Casa de Dios Puerta del Cielo</span>
          <br />
          <span className="text-blue-300">Colombia</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light">
          ¡Tu lugar para crecer y conectarte con Dios!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contáctanos
          </button>
          
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Conoce más
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;