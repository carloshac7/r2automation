'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué tipo de automatizaciones pueden desarrollar?",
    answer: "Desarrollamos todo tipo de automatizaciones: desde chatbots inteligentes con IA, integraciones entre sistemas (CRM, email, WhatsApp, bases de datos), web scraping para extracción de datos, automatización de procesos de ventas y marketing, hasta flujos personalizados con n8n, Make o Zapier.",
  },
  {
    question: "¿Cuánto tiempo toma implementar una solución?",
    answer: "Depende de la complejidad del proyecto. Un chatbot básico puede estar listo en 1-2 semanas, mientras que integraciones complejas con múltiples sistemas pueden tomar 4-8 semanas. Siempre entregamos un cronograma detallado en la propuesta inicial.",
  },
  {
    question: "¿Qué es Kommo CRM y por qué lo recomiendan?",
    answer: "Kommo (anteriormente amoCRM) es un CRM especializado en mensajería que permite gestionar leads desde WhatsApp, Instagram, Telegram y más. Lo recomendamos por su potente automatización y porque integra perfectamente con las herramientas de IA y automatización que usamos.",
  },
  {
    question: "¿Puedo integrar estas soluciones con mis sistemas actuales?",
    answer: "Sí, en la mayoría de los casos. Trabajamos con APIs, webhooks, bases de datos y herramientas de integración como n8n que permiten conectar prácticamente cualquier sistema. Si tu plataforma no tiene API pública, evaluamos alternativas como web scraping o soluciones custom.",
  },
  {
    question: "¿Ofrecen soporte después de la implementación?",
    answer: "Absolutamente. Ofrecemos planes de soporte mensual que incluyen mantenimiento, actualizaciones, ajustes y asistencia técnica. También brindamos capacitación para que tu equipo pueda usar las herramientas de forma autónoma.",
  },
  {
    question: "¿Cuál es el costo de sus servicios?",
    answer: "Cada proyecto es único y personalizamos la cotización según tus necesidades. Ofrecemos una consulta gratuita donde analizamos tu caso y entregamos una propuesta con costos claros. Trabajamos por proyecto o con planes mensuales según lo que mejor te convenga.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las soluciones?",
    answer: "No necesariamente. Diseñamos interfaces amigables y procesos automatizados que cualquiera puede usar. Si requiere configuraciones avanzadas, te capacitamos o podemos encargarnos nosotros del mantenimiento.",
  },
  {
    question: "¿Qué diferencia hay entre un chatbot y un asistente con IA?",
    answer: "Un chatbot tradicional sigue reglas predefinidas y respuestas programadas. Un asistente con IA (usando GPT-4, Claude u otros modelos) puede entender contexto, mantener conversaciones naturales, aprender de datos de tu empresa y tomar decisiones más inteligentes. Es como tener un empleado virtual 24/7.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-lg">
            Resolvemos tus dudas sobre nuestros servicios
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-cyan-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-gray-700 mb-6">
            Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Contactar Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}