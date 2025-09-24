function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <p className="text-gray-700 mb-8">
          Si tienes preguntas o deseas más información sobre nuestra iglesia, escríbenos.
        </p>
        <form className="grid gap-6 text-left">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="Tu correo"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Escribe tu mensaje..."
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
