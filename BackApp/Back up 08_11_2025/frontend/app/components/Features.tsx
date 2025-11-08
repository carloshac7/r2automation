'use client';

import { motion } from "framer-motion";

const features = [
  {
    title: "Toma de decisiones inteligente",
    description: "Ejecuta tareas como: calificar clientes potenciales, establecer citas y resolver problemas de forma autónoma.",
    icon: "🧠",
  },
  {
    title: "Atiende a clientes en todas partes",
    description: "Funciona de manera uniforme y consistente en plataformas web, de voz y de mensajería.",
    icon: "🌐",
  },
  {
    title: "Integración perfecta",
    description: "Conéctate a tus herramientas de negocio para proporcionar a tu agente virtual los datos necesarios.",
    icon: "🔗",
  },
  // TODO: Agregar más features si es necesario
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
        >
          Beneficios Principales
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
        >
          Descubre cómo R2Automate transforma tu forma de trabajar
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl text-center hover:shadow-xl transition-all border border-gray-200 hover:border-cyan-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}