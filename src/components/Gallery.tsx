import { motion } from "framer-motion";
import { useState } from "react";

type CampImage = {
  id: number;
  src: string;
  title: string;
};

const images: CampImage[] = [
  { id: 1, src: "/Img/campamento.webp", title: "Campamento 2025" },
  { id: 2, src: "/Img/cam2.jpg", title: "Campamento 2024" },
  { id: 3, src: "/Img/comunidad.webp", title: "Retiro espiritual" },
  { id: 4, src: "/Img/adoracion.jpeg", title: "Noche de adoración" },
];

export default function Gallery() {
  const [selectedImagen, setSelectedImagen] = useState<CampImage | null>(null)
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Nuestros Campamentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.5 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImagen(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImagen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImagen(null)}
        >
          <motion.img
            src={selectedImagen.src}
            alt={selectedImagen.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-h-[80vh] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
