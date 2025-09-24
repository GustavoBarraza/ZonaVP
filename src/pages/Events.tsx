function Events() {
  const events = [
    { title: 'Lunes Reunión de Adoración y Oración', time: '7:00 pm', description: 'Un momento para adorar y hablar con el creador.' },
    { title: 'Miercoles Servicio Evangelistico', time: '7:00 pm', description: 'Profundizamos en la palabra y reflexionamos juntos.' },
    { title: 'Jueves Ayuno', time: '09:00 am', description: 'Un encuentro para adorar y compartir la palabra de Dios.' },
    { title: 'Sabado Ayuno', time: '09:00 am', description: 'Un encuentro para adorar y compartir la palabra de Dios.' },
    { title: 'Culto Dominical', time: '09:00 am', description: 'Un encuentro para adorar y compartir la palabra de Dios.' },

    
  ];

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Próximos Eventos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <p className="text-green-600 font-semibold mb-2">{event.time}</p>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
