'use client';

import { motion } from "framer-motion";

const services = [
  {
    title: "Chatbots con IA",
    description: "Desarrollamos asistentes virtuales inteligentes con GPT-4, Claude y otros modelos de IA para atención al cliente 24/7.",
    icon: "🤖",
    tools: ["Flowise", "Voiceflow", "OpenAI"],
  },
  {
    title: "Automatización de Procesos",
    description: "Conectamos tus aplicaciones y automatizamos flujos de trabajo para ahorrar tiempo y reducir errores manuales.",
    icon: "⚡",
    tools: ["n8n", "Make", "Zapier"],
  },
  {
    title: "CRM Kommo",
    description: "Implementación, configuración y automatización de Kommo CRM. Gestión de leads, embudos de ventas y reportes.",
    icon: "📊",
    tools: ["Kommo", "API Integration"],
  },
  {
    title: "Web Scraping",
    description: "Extracción automática de datos de sitios web para análisis de mercado, monitoreo de precios y generación de leads.",
    icon: "🕷️",
    tools: ["Python", "Puppeteer", "Scrapy"],
  },
  {
    title: "Desarrollo de APIs",
    description: "Creamos APIs REST personalizadas para integrar sistemas, exponer datos y conectar aplicaciones.",
    icon: "🔌",
    tools: ["FastAPI", "Node.js", "Python"],
  },
  {
    title: "Apps con Streamlit",
    description: "Desarrollamos dashboards interactivos y aplicaciones web para visualización de datos y análisis.",
    icon: "📈",
    tools: ["Streamlit", "Python", "Pandas"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas personalizadas para automatizar y potenciar tu negocio
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#contacto" 
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Solicitar Cotización
          </a>
        </motion.div>
      </div>
    </section>
  );
}