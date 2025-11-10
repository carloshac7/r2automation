'use client';

import { motion } from "framer-motion";
import { MessageCircle, Target, Code, Rocket, Wrench } from "lucide-react";
import { AuroraGradient } from "./AuroraGradient";

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Entendemos tus necesidades, procesos actuales y objetivos de negocio en una llamada sin compromiso.",
    icon: MessageCircle,
    color: "from-cyan-400 to-cyan-500",
    auroraColors: ['rgba(6, 182, 212, 0.2)', 'rgba(34, 211, 238, 0.15)']
  },
  {
    number: "02",
    title: "Análisis y Propuesta",
    description: "Evaluamos tu caso y diseñamos una solución personalizada con tiempos y costos claros.",
    icon: Target,
    color: "from-cyan-500 to-cyan-600",
    auroraColors: ['rgba(6, 182, 212, 0.22)', 'rgba(8, 145, 178, 0.17)']
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos la solución con actualizaciones constantes y demos durante el proceso.",
    icon: Code,
    color: "from-cyan-600 to-blue-500",
    auroraColors: ['rgba(8, 145, 178, 0.2)', 'rgba(59, 130, 246, 0.15)']
  },
  {
    number: "04",
    title: "Implementación",
    description: "Desplegamos la solución en tu entorno y capacitamos a tu equipo para su uso óptimo.",
    icon: Rocket,
    color: "from-blue-500 to-blue-600",
    auroraColors: ['rgba(59, 130, 246, 0.2)', 'rgba(37, 99, 235, 0.15)']
  },
  {
    number: "05",
    title: "Soporte Continuo",
    description: "Ofrecemos mantenimiento, actualizaciones y soporte técnico para garantizar el funcionamiento.",
    icon: Wrench,
    color: "from-blue-600 to-indigo-600",
    auroraColors: ['rgba(37, 99, 235, 0.2)', 'rgba(79, 70, 229, 0.15)']
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
          {/* Línea vertical conectora con gradiente (solo visible en desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-cyan-500 via-cyan-600 via-blue-500 via-blue-600 to-indigo-600"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
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
                  {/* Contenido con Aurora */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <AuroraGradient
                      className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all"
                      colors={[
                        ...step.auroraColors,
                        'rgba(99, 102, 241, 0.08)'
                      ]}
                      opacity={0.9}
                      blur={60}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </AuroraGradient>
                  </div>

                  {/* Círculo central con ícono y gradiente */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Espacio vacío */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA final con Aurora */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <AuroraGradient
            className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl"
            colors={[
              'rgba(6, 182, 212, 0.15)',
              'rgba(59, 130, 246, 0.15)',
            ]}
            opacity={0.9}
            blur={60}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte
            </p>
            <AuroraGradient
              className="inline-block rounded-full"
              colors={[
                'rgba(6, 182, 212, 0.3)',
                'rgba(59, 130, 246, 0.3)',
              ]}
              opacity={0.9}
              blur={60}
            >
              <a
                href="#contacto"
                className="block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
              >
                Agendar Consulta Gratuita
              </a>
            </AuroraGradient>
          </AuroraGradient>
        </motion.div>
      </div>
    </section>
  );
}