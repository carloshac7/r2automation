'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const useCases = [
  {
    title: "Chatbot de Atención al Cliente",
    description: "Sistema de IA que responde preguntas frecuentes, agenda citas y califica leads automáticamente.",
    results: ["90% reducción en tiempo de respuesta", "Atención 24/7", "85% satisfacción del cliente"],
    image: "/images/chatbot.svg",
    tags: ["Flowise", "WhatsApp", "OpenAI"],
  },
  {
    title: "Automatización de Leads",
    description: "Captura automática de leads desde múltiples fuentes y gestión en Kommo CRM con seguimiento personalizado.",
    results: ["3x más leads calificados", "Integración con 5 plataformas", "Ahorro de 20 horas semanales"],
    image: "/images/Leads_kommo.svg",
    tags: ["Kommo", "n8n", "Web Scraping"],
  },
  {
    title: "Web Scraping de Competencia",
    description: "Monitoreo automatizado de precios y productos de la competencia con alertas en tiempo real.",
    results: ["Datos actualizados cada hora", "Dashboard personalizado", "Ventaja competitiva"],
    image: "/images/webscrap.svg",
    tags: ["Python", "Streamlit", "Puppeteer"],
  },
];

export function UseCases() {
  return (
    <section id="casos" className="py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Casos de Éxito
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proyectos reales que transformaron negocios
          </p>
        </motion.div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Imagen */}
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="lg:w-1/2 space-y-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {useCase.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-500 text-white px-3 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {useCase.title}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-3 pt-4">
                  <h4 className="font-semibold text-gray-900 text-lg">Resultados:</h4>
                  <ul className="space-y-2">
                    {useCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-cyan-500 mr-2 text-xl">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            ¿Listo para transformar tu negocio?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Hablemos de tu proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
}