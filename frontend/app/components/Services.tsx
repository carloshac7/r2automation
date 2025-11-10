'use client';

import { motion } from "framer-motion";
import { Bot, Zap, BarChart3, Globe, Plug, LineChart } from "lucide-react";
import { AuroraGradient } from "./AuroraGradient";

const services = [
  {
    title: "Chatbots con IA",
    description: "Desarrollamos asistentes virtuales inteligentes con GPT-4, Claude y otros modelos de IA para atención al cliente 24/7.",
    icon: Bot,
    tools: ["Flowise", "Voiceflow", "OpenAI"],
    gradient: "from-cyan-400 to-cyan-600",
    auroraColors: ['rgba(6, 182, 212, 0.25)', 'rgba(34, 211, 238, 0.2)']
  },
  {
    title: "Automatización de Procesos",
    description: "Conectamos tus aplicaciones y automatizamos flujos de trabajo para ahorrar tiempo y reducir errores manuales.",
    icon: Zap,
    tools: ["n8n", "Make", "Zapier"],
    gradient: "from-blue-400 to-blue-600",
    auroraColors: ['rgba(59, 130, 246, 0.25)', 'rgba(96, 165, 250, 0.2)']
  },
  {
    title: "CRM Kommo",
    description: "Implementación, configuración y automatización de Kommo CRM. Gestión de leads, embudos de ventas y reportes.",
    icon: BarChart3,
    tools: ["Kommo", "API Integration"],
    gradient: "from-indigo-400 to-indigo-600",
    auroraColors: ['rgba(99, 102, 241, 0.25)', 'rgba(129, 140, 248, 0.2)']
  },
  {
    title: "Web Scraping",
    description: "Extracción automática de datos de sitios web para análisis de mercado, monitoreo de precios y generación de leads.",
    icon: Globe,
    tools: ["Python", "Puppeteer", "Scrapy"],
    gradient: "from-purple-400 to-purple-600",
    auroraColors: ['rgba(168, 85, 247, 0.25)', 'rgba(192, 132, 252, 0.2)']
  },
  {
    title: "Desarrollo de APIs",
    description: "Creamos APIs REST personalizadas para integrar sistemas, exponer datos y conectar aplicaciones.",
    icon: Plug,
    tools: ["FastAPI", "Node.js", "Python"],
    gradient: "from-cyan-500 to-blue-500",
    auroraColors: ['rgba(6, 182, 212, 0.25)', 'rgba(59, 130, 246, 0.2)']
  },
  {
    title: "Apps con Streamlit",
    description: "Desarrollamos dashboards interactivos y aplicaciones web para visualización de datos y análisis.",
    icon: LineChart,
    tools: ["Streamlit", "Python", "Pandas"],
    gradient: "from-blue-500 to-indigo-500",
    auroraColors: ['rgba(59, 130, 246, 0.25)', 'rgba(99, 102, 241, 0.2)']
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white via-cyan-50/20 to-white">
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AuroraGradient
                  className="group h-full bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-2xl"
                  colors={[
                    ...service.auroraColors,
                    'rgba(99, 102, 241, 0.1)'
                  ]}
                  opacity={0.9}
                  blur={60}
                >
                  {/* Ãcono con gradiente */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* TÃ­tulo */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  
                  {/* Herramientas */}
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-1.5 rounded-full font-medium border border-cyan-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </AuroraGradient>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
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
              className="block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg hover:shadow-2xl transition-all hover:scale-105 font-semibold"
            >
              Solicitar Cotización
            </a>
          </AuroraGradient>
        </motion.div>
      </div>
    </section>
  );
}