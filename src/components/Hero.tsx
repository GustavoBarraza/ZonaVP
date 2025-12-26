import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMoreClick = () => {
    document.getElementById('acerca')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div 
        className={`relative z-10 text-center text-white px-4 max-w-5xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Church icon/logo */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4 7v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5zm0 2.18l6 3.75v6.07c0 4.41-2.88 8.55-6 9.73-3.12-1.18-6-5.32-6-9.73V7.93l6-3.75z"/>
              <circle cx="12" cy="11" r="2"/>
              <path d="M12 14c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"/>
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block mb-2">Bienvenido a</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
            Casa de Oración
          </span>
          <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
            Puerta del Cielo
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Jesús es mi Esperanza
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-10 font-light text-gray-200 max-w-3xl mx-auto">
          Tu lugar para crecer espiritualmente y conectarte con Dios
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleContactClick}
            className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50"
          >
            <span className="relative z-10">Contáctanos</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={handleLearnMoreClick}
            className="group relative bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="relative z-10">Conoce más</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(5px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}

