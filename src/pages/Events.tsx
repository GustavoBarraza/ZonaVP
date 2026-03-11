export default function Events() {

  const services = [
    {
      id: 1,
      title: "Teens",
      image: "/Img/Young.jpeg",
    },
    {
      id: 2,
      title: "Youngs",
      image: "/Img/Young.jpeg",
    },
    {
      id: 3,
      title: "Grupos de Vida",
      image: "/Img/Young.jpeg",
    },
  ];

  const WHATSAPP_NUMBER = "521234567890" // Reemplaza con tu número (sin + ni espacios)
  const WHATSAPP_MESSAGE = encodeURIComponent("¡Hola! Me gustaría más información sobre los eventos y grupos.")

  const scrollToContact = () => {
    document
      .getElementById("contacto")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="eventos"
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(135deg,#f8fafc 0%,#ffffff 50%,#f1f5f9 100%)",
      }}
    >

      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">

        <h2
          className="font-black mb-6"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            color: "#a3e635",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textShadow: "0 0 40px rgba(163,230,53,0.35)",
          }}
        >
          Nuestros Servicios
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Únete a nuestras actividades y crece en tu fe junto a una
          comunidad que te apoya y camina contigo.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

        {services.map((service) => (

          <div
            key={service.id}
            className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              aspectRatio: "3/4",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >

            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 45%, rgba(0,0,0,0.35) 100%)",
              }}
            />

            {/* Title */}
            <div className="absolute top-5 left-5 z-10">

              <span
                className="font-black block leading-tight transition-transform duration-300 group-hover:scale-105"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#a3e635",
                  textShadow:
                    "2px 2px 0 rgba(0,0,0,0.85), 0 0 25px rgba(163,230,53,0.45)",
                }}
              >
                {service.title}
              </span>

            </div>

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(163,230,53,0.15) 0%, transparent 70%)",
              }}
            />

          </div>

        ))}

      </div>

      {/* Botón contacto */}
      <div className="text-center mt-16">

        <button
          onClick={scrollToContact}
          className="px-8 py-3 rounded-xl font-bold text-black transition"
          style={{
            background: "#a3e635",
            boxShadow: "0 8px 25px rgba(163,230,53,0.35)",
          }}
        >
          Contáctanos
        </button>

      </div>

      {/* Grupos */}
      <section id="grupos" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Grupos de Vida</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Únete a uno de nuestros grupos pequeños para compartir experiencias, apoyo y crecimiento espiritual con otras personas.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
          <p className="text-center text-gray-600 mb-10">
            Escríbenos por WhatsApp y te responderemos lo antes posible.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-3 font-bold text-white shadow-lg transition hover:bg-emerald-400"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.075-.148-.672-1.611-.92-2.214-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z" />
                  <path d="M12.004 2.003C6.486 2.003 2 6.489 2 12.008c0 1.997.52 3.9 1.506 5.59L2 22l4.547-1.196a9.965 9.965 0 0 0 5.457 1.414c5.519 0 10.004-4.486 10.004-10.005S17.523 2.003 12.004 2.003zm5.297 14.492c-.235.66-1.38 1.256-1.93 1.335-.497.069-1.225.104-2.288-.367-.993-.44-2.06-1.345-3.029-2.322-.998-.996-1.58-1.995-1.821-2.492-.238-.497-.025-.765.171-.92.176-.137.392-.354.588-.53.195-.175.26-.307.39-.51.132-.198.066-.372-.033-.52-.1-.149-.673-1.62-.923-2.214-.244-.593-.493-.51-.672-.52l-.573-.01c-.198 0-.52.073-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z" />
                </svg>
              </span>
              Chat por WhatsApp
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}