import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+57 300 123 4567',
      link: 'tel:+573001234567'
    },
    {
      icon: Mail,
      title: 'Correo',
      info: 'contacto@iglesia.com',
      link: 'mailto:contacto@iglesia.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Barranquilla, Colombia',
      link: '#'
    }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        // Simular envío; reemplazar por llamada real si aplica
        await new Promise(res => setTimeout(res, 800));
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen linear-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Contacto</h1>
        <p className="text-gray-600 mb-8">Estamos aquí para escucharte</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-6 text-gray-700">
              Si tienes preguntas o deseas más información, no dudes en escribirnos usando el formulario.
            </p>

            <div className="space-y-4">
              {contactInfo.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <a
                    key={idx}
                    href={c.link}
                    className="flex items-center gap-4 p-4 rounded-xl linear-to-r from-blue-50 to-purple-50 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{c.title}</div>
                      <div className="text-sm text-gray-600">{c.info}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            {submitted && (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 p-4 rounded-lg animate-pulse">
                <CheckCircle size={20} /> 
                <span className="font-medium">¡Mensaje enviado correctamente!</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Nombre *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Tu nombre completo"
              />
              {errors.name && (
                <div className="text-sm text-red-600 mt-1">{errors.name}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Correo *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <div className="text-sm text-red-600 mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Teléfono (opcional)
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="+57 300 123 4567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg p-3 h-32 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
              {errors.message && (
                <div className="text-sm text-red-600 mt-1">{errors.message}</div>
              )}
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                <Send size={18} /> 
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

