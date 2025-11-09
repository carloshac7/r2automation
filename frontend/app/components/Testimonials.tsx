'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "CEO, TechStart SPA",
    company: "TechStart",
    content: "Implementaron un chatbot con IA que maneja el 80% de nuestras consultas. Ahorramos 15 horas semanales y nuestros clientes están más satisfechos con la atención 24/7.",
    rating: 5,
    image: "/images/testimonial-1.png",
  },
  {
    name: "María González",
    role: "Directora de Ventas, InmoPlus",
    company: "InmoPlus",
    content: "La automatización de leads con Kommo transformó nuestro proceso de ventas. Ahora capturamos y calificamos leads automáticamente desde múltiples fuentes. Triplicamos nuestra conversión.",
    rating: 5,
    image: "/images/testimonial-1.png",
  },
  {
    name: "Pedro Sánchez",
    role: "Gerente de Marketing, E-Commerce Pro",
    company: "E-Commerce Pro",
    content: "El sistema de web scraping que desarrollaron nos permite monitorear precios de la competencia en tiempo real. Tomamos decisiones más rápidas y mantenemos ventaja competitiva.",
    rating: 5,
    image: "/images/testimonial-1.png",
  },
  {
    name: "Ana Martínez",
    role: "Gerente General, Servicios Plus",
    company: "Servicios Plus",
    content: "La integración con n8n nos permitió conectar todos nuestros sistemas. Ahora todo fluye automáticamente y tenemos visibilidad completa de nuestras operaciones.",
    rating: 5,
    image: "/images/testimonial-1.png",
  },
  {
    name: "Luis Fernández",
    role: "Director de Operaciones, LogiTech",
    company: "LogiTech",
    content: "Las automatizaciones que implementaron redujeron nuestros tiempos de respuesta en un 70%. Ahora podemos enfocarnos en lo estratégico mientras el sistema maneja lo operativo.",
    rating: 5,
    image: "/images/testimonial-1.png",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        setScrollPosition((prev) => {
          const newPosition = prev + 1;
          const maxScroll = scrollContainer.scrollWidth / 2;
          return newPosition >= maxScroll ? 0 : newPosition;
        });
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empresas que ya transformaron sus procesos con nuestras soluciones
          </p>
        </motion.div>

        {/* Carrusel con auto-scroll */}
        <div
          ref={scrollRef}
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {/* Duplicamos los testimonios para efecto infinito */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % testimonials.length) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex-shrink-0"
                style={{ width: '420px', minHeight: '320px' }}
              >
                {/* Estrellas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Contenido */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicador de pausa */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Pasa el cursor sobre las tarjetas para pausar el desplazamiento
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 text-lg mb-6">
            Únete a las empresas que ya están automatizando con éxito
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Solicita tu Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}