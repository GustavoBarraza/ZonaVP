import { Calendar, Clock, Heart, Book, Sparkles } from 'lucide-react';

function Events() {
  const events = [
    { 
      title: 'Reunión de Adoración y Oración', 
      day: 'Lunes',
      time: '7:00 PM', 
      description: 'Un momento para adorar y hablar con el creador.',
      icon: Heart,
      color: 'from-purple-500 to-purple-700'
    },
    { 
      title: 'Servicio Evangelístico', 
      day: 'Miércoles',
      time: '7:00 PM', 
      description: 'Profundizamos en la palabra y reflexionamos juntos.',
      icon: Book,
      color: 'from-blue-500 to-blue-700'
    },
    { 
      title: 'Ayuno', 
      day: 'Jueves',
      time: '9:00 AM', 
      description: 'Un encuentro para buscar la presencia de Dios.',
      icon: Sparkles,
      color: 'from-amber-500 to-amber-700'
    },
    { 
      title: 'Ayuno', 
      day: 'Sábado',
      time: '9:00 AM', 
      description: 'Tiempo de consagración y búsqueda espiritual.',
      icon: Sparkles,
      color: 'from-teal-500 to-teal-700'
    },
    { 
      title: 'Culto Dominical', 
      day: 'Domingo',
      time: '9:00 AM', 
      description: 'Un encuentro para adorar y compartir la palabra de Dios.',
      icon: Calendar,
      color: 'from-green-500 to-green-700'
    },
  ];

  return (
    <section id="eventos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Eventos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Únete a nosotros en nuestras actividades semanales y crece en tu fe
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
                
                <div className="p-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${event.color} rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Day badge */}
                  <div className="inline-block mb-3">
                    <span className={`px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r ${event.color} rounded-full`}>
                      {event.day}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {event.title}
                  </h3>

                  {/* Time */}
                  <div className="flex items-center gap-2 mb-3 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <p className="text-sm font-medium">{event.time}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">
            ¿Quieres más información sobre nuestros eventos?
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}

export default Events;