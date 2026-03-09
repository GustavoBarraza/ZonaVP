export default function Events() {
  const services = [
    {
      title: 'Teens',
      image: '/Img/Teens.png',
    },
    {
      title: 'Youngs',
      image: '/public/Img/Youngs.png', // ← coloca la ruta correcta
    },
    {
      title: 'Grupos de Vida',
      image: '/public/Img/Grupos.png', // ← coloca la ruta correcta
    },
  ];

  return (
    <section
      id="eventos"
      className="py-20 px-4"
      style={{
        background: 'linear-gradient(135deg, #ffffffff 0%, #ffffffff 50%, #ffffffff 100%)',
      }}
    >
      {/* Header */}
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h2
          className="font-black mb-4"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            color: '#a3e635',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            textShadow: '0 0 40px rgba(163,230,53,0.3)',
          }}
        >
          Nuestros Servicios
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Únete a nosotros en nuestras actividades y crece en tu fe
          junto a una comunidad que te apoya y te acompaña.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden"
            style={{
              aspectRatio: '3/4',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px) scale(1.02)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.6)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
            }}
          >
            {/* Imagen */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={e => {
                // Si la imagen no carga, muestra fondo placeholder
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />

            {/* Fondo fallback si la imagen no carga */}
            <div
              className="absolute inset-0"
              style={{ background: '#1e293b' }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)',
              }}
            />

            {/* Título */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className="font-black leading-tight block"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  color: '#a3e635',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.8), 0 0 20px rgba(163,230,53,0.4)',
                  lineHeight: 1.1,
                }}
              >
                {service.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <p className="text-gray-400 mb-6 text-lg">
          ¿Quieres más información sobre nuestros servicios?
        </p>
        <button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
}