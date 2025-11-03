'use client';

import { motion } from "framer-motion";

const features = [
  {
    title: "Flujos Visuales",
    description: "Arrastra y conecta nodos para crear automatizaciones complejas sin código.",
  },
  {
    title: "Integraciones Fáciles",
    description: "Conecta con APIs, bases de datos y servicios populares en minutos.",
  },
  {
    title: "Escalable y Seguro",
    description: "Diseñado para equipos, con control de accesos y deployment en la nube.",
  },
  // TODO: Agregar más features si es necesario
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Beneficios Principales
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-accent/10 p-6 rounded-lg text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}