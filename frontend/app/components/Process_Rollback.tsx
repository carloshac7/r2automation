'use client';

import { motion } from "framer-motion";
import { MessageCircle, Target, Code, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultoría Inicial",
    description: "Analizamos tus necesidades, procesos actuales y objetivos. Identificamos oportunidades de automatización y creamos una propuesta personalizada.",
    duration: "1-2 días",
    color: "from-cyan-400 to-cyan-500"
  },
  {
    number: "02",
    icon: Target,
    title: "Planificación & Diseño",
    description: "Diseñamos la arquitectura de la solución, definimos flujos de trabajo, integraciones necesarias y entregables. Te presentamos un roadmap claro.",
    duration: "2-3 días",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    number: "03",
    icon: Code,
    title: "Desarrollo & Implementación",
    description: "Construimos tu solución utilizando las mejores herramientas: n8n, Python, APIs, chatbots IA. Desarrollo ágil con actualizaciones constantes.",
    duration: "1-4 semanas",
    color: "from-cyan-600 to-blue-500"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Pruebas & Despliegue",
    description: "Realizamos pruebas exhaustivas, ajustes finales y lanzamos tu solución. Capacitamos a tu equipo para el uso correcto de las herramientas.",
    duration: "3-5 días",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "05",
    icon: LineChart,
    title: "Soporte & Optimización",
    description: "Monitoreamos el rendimiento, realizamos ajustes y mejoras continuas. Soporte técnico incluido para garantizar tu éxito a largo plazo.",
    duration: "Continuo",
    color: "from-blue-600 to-indigo-600"
  }
];

export function Process() {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Metodología probada para implementar soluciones de automatización exitosas
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-3 text-center">
                      <span className="text-sm font-bold text-gray-400">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="inline-block mt-2 md:mt-0 bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold">
                        ⏱ {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 w-0.5 h-16 bg-gradient-to-b from-cyan-300 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 md:p-12 rounded-2xl border border-cyan-200 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para Comenzar?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Agenda una consultoría gratuita de 30 minutos y descubre cómo podemos
            automatizar tus procesos para ahorrar tiempo y aumentar tus ingresos.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            Agenda tu Consultoría Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}