'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué tipo de automatizaciones pueden desarrollar?",
    answer: "Desarrollamos todo tipo de automatizaciones: flujos de trabajo con n8n, chatbots inteligentes, web scraping, integraciones entre sistemas, APIs personalizadas, automatizaciones de CRM Kommo, procesamiento de datos con Python, y mucho más. Si es repetitivo, podemos automatizarlo."
  },
  {
    question: "¿Cuánto tiempo toma implementar una solución?",
    answer: "Depende de la complejidad del proyecto. Una automatización simple puede estar lista en 3-5 días, mientras que soluciones más complejas con múltiples integraciones pueden tomar 2-4 semanas. En la consultoría inicial te daremos un timeline exacto."
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las soluciones?",
    answer: "No necesitas conocimientos técnicos. Diseñamos interfaces intuitivas y capacitamos a tu equipo para el uso correcto. Si usamos herramientas visuales como n8n, te enseñamos a hacer ajustes básicos tú mismo."
  },
  {
    question: "¿Qué herramientas y tecnologías utilizan?",
    answer: "Trabajamos con las mejores herramientas del mercado: n8n, Python, Flowise, Voiceflow, Kommo CRM, Streamlit, APIs REST, webhooks, Puppeteer para web scraping, y más. Elegimos la tecnología según tus necesidades específicas."
  },
  {
    question: "¿Ofrecen soporte después de la implementación?",
    answer: "Sí, todos nuestros proyectos incluyen un período de soporte post-implementación. También ofrecemos planes de mantenimiento mensual para monitoreo, actualizaciones y mejoras continuas de tus automatizaciones."
  },
  {
    question: "¿Cuánto cuesta una automatización?",
    answer: "El costo varía según complejidad, número de integraciones y tiempo de desarrollo. Proyectos simples desde $500 USD, soluciones empresariales desde $2,000 USD. En la consultoría gratuita te daremos una cotización exacta basada en tus necesidades."
  },
  {
    question: "¿Pueden integrar con mis sistemas actuales?",
    answer: "Sí, nos especializamos en integraciones. Conectamos CRMs, ERPs, plataformas de e-commerce, herramientas de marketing, bases de datos, y cualquier sistema que tenga API o webhooks. Si no tiene API, encontramos alternativas."
  },
  {
    question: "¿Qué pasa si necesito cambios después del desarrollo?",
    answer: "Incluimos revisiones en cada proyecto. Si necesitas cambios adicionales después, los manejamos con tarifas preferenciales. También puedes contratar horas de desarrollo mensual para ajustes y nuevas funcionalidades."
  },
  {
    question: "¿Trabajan con empresas fuera de Chile?",
    answer: "Sí, trabajamos con clientes en toda Latinoamérica y también atendemos proyectos internacionales en español e inglés. Todo nuestro proceso es 100% remoto y utilizamos herramientas colaborativas."
  },
  {
    question: "¿Cómo garantizan la seguridad de nuestros datos?",
    answer: "Seguimos mejores prácticas de seguridad: encriptación de datos, autenticación segura, acceso restringido, backups automáticos. Firmamos NDAs cuando sea necesario y cumplimos con regulaciones de protección de datos."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-cyan-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-cyan-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
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
            ¿Tienes otras preguntas? Contáctanos directamente
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            Habla con un Experto
          </a>
        </motion.div>
      </div>
    </section>
  );
}