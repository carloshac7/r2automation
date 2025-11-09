
'use client';

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    position: "Director Comercial",
    company: "TechSolutions Chile",
    image: "👨‍💼",
    rating: 5,
    text: "R2Automate transformó completamente nuestra operación de ventas. El chatbot que desarrollaron califica leads automáticamente y nuestro equipo ahora se enfoca solo en oportunidades reales. Aumentamos conversiones en 35%.",
    highlight: "+35% conversión"
  },
  {
    name: "María Fernanda Silva",
    position: "CEO",
    company: "PropiedadesPlus",
    image: "👩‍💼",
    rating: 5,
    text: "Necesitábamos automatizar la extracción de datos de portales inmobiliarios. El sistema de web scraping que crearon es increíble - ahorra 30 horas semanales de trabajo manual y los datos son perfectos.",
    highlight: "30h ahorradas/semana"
  },
  {
    name: "Roberto Gonzalez",
    position: "Gerente de Operaciones",
    company: "E-commerce Global",
    image: "👨‍💻",
    rating: 5,
    text: "La automatización con n8n que implementaron sincroniza nuestro inventario entre 5 plataformas en tiempo real. Ya no perdemos ventas por productos sin stock. ROI en menos de 2 meses.",
    highlight: "ROI en 2 meses"
  },
  {
    name: "Ana Martínez",
    position: "Directora de Marketing",
    company: "Consultora SM",
    image: "👩‍💼",
    rating: 5,
    text: "El equipo de R2Automate es excepcional. Desarrollaron una solución personalizada que integra nuestro CRM Kommo con todas nuestras campañas. La visibilidad y control que tenemos ahora es impresionante.",
    highlight: "100% integrado"
  },
  {
    name: "Luis Paredes",
    position: "Founder",
    company: "StartupLab",
    image: "👨‍🚀",
    rating: 5,
    text: "Como startup necesitábamos escalar rápido sin contratar más personal. Las automatizaciones y APIs que construyeron nos permiten operar como una empresa 10 veces más grande. Altamente recomendados.",
    highlight: "10x productividad"
  },
  {
    name: "Patricia Rojas",
    position: "Directora de TI",
    company: "Servicios Corporativos",
    image: "👩‍💼",
    rating: 5,
    text: "Buscábamos un partner técnico confiable para automatización y lo encontramos. Su conocimiento de Python, APIs y herramientas como Streamlit es de primer nivel. Proyectos entregados a tiempo siempre.",
    highlight: "Siempre a tiempo"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empresas que confiaron en nosotros y transformaron sus procesos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-200" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="mb-4">
                <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
                  ✨ {testimonial.highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="text-4xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-cyan-600 font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres ser nuestro próximo caso de éxito?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            Comienza Tu Transformación
          </a>
        </motion.div>
      </div>
    </section>
  );
}