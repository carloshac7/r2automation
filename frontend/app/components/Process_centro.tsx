'use client';

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Entendemos tus necesidades, procesos actuales y objetivos de negocio en una llamada sin compromiso.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Análisis y Propuesta",
    description: "Evaluamos tu caso y diseñamos una solución personalizada con tiempos y costos claros.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos la solución con actualizaciones constantes y demos durante el proceso.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Implementación",
    description: "Desplegamos la solución en tu entorno y capacitamos a tu equipo para su uso óptimo.",
    icon: "🚀",
  },
  {
    number: "05",
    title: "Soporte Continuo",
    description: "Ofrecemos mantenimiento, actualizaciones y soporte técnico para garantizar el funcionamiento.",
    icon: "🛠️",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nuestro Proceso
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Metodología probada para entregar soluciones de calidad
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea vertical conectora (solo visible en desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-200 h-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Contenido */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Número central */}
                <div className="lg:w-2/12 flex justify-center">
                  <div className="relative z-10 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Espacio vacío */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Agendar Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}