export default function Events() {

  const services = [
    {
      id: 1,
      title: "Teens",
      image: "/Img/Teens.png",
    },
    {
      id: 2,
      title: "Youngs",
      image: "/Img/Youngs.png",
    },
    {
      id: 3,
      title: "Grupos de Vida",
      image: "/Img/Grupos.png",
    },
  ];

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

    </section>
  );
}