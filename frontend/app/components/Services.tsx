'use client';

import { motion } from "framer-motion";
import { Bot, Workflow, Database, MessageSquare, Code, BarChart, Settings, Cpu } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Chatbots con IA",
    description: "Desarrollamos asistentes virtuales inteligentes con Flowise y Voiceflow que atienden a tus clientes 24/7, responden consultas y califican leads automáticamente.",
    tools: ["Flowise", "Voiceflow", "OpenAI", "WhatsApp"]
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description: "Creamos flujos de trabajo automatizados con n8n y Python que eliminan tareas repetitivas, conectan tus herramientas y optimizan tu operación.",
    tools: ["n8n", "Python", "Zapier", "Make"]
  },
  {
    icon: Database,
    title: "Web Scraping & APIs",
    description: "Extraemos y procesamos datos de sitios web, creamos APIs personalizadas y automatizamos la recopilación de información para tu negocio.",
    tools: ["Puppeteer", "Scrapy", "FastAPI", "REST APIs"]
  },
  {
    icon: MessageSquare,
    title: "Kommo CRM",
    description: "Implementamos y personalizamos Kommo CRM, creamos automatizaciones de leads, configuramos pipelines y optimizamos tu proceso de ventas.",
    tools: ["Kommo", "Webhooks", "Integraciones", "Pipelines"]
  },
  {
    icon: Code,
    title: "Desarrollo de Apps",
    description: "Construimos aplicaciones web interactivas con Streamlit, dashboards personalizados y herramientas internas para tu equipo.",
    tools: ["Streamlit", "Plotly", "Pandas", "React"]
  },
  {
    icon: BarChart,
    title: "Gestión de Leads",
    description: "Automatizamos la captura, calificación y seguimiento de leads desde múltiples canales hacia tu CRM con flujos inteligentes.",
    tools: ["CRM", "Email", "Forms", "Analytics"]
  },
  {
    icon: Settings,
    title: "Integraciones Avanzadas",
    description: "Conectamos todas tus herramientas de negocio: CRM, email, calendarios, pagos, inventarios y más en un ecosistema unificado.",
    tools: ["OAuth", "Webhooks", "APIs", "Cloud"]
  },
  {
    icon: Cpu,
    title: "Consultoría Técnica",
    description: "Asesoramos en la implementación de soluciones de automatización, arquitectura de sistemas y optimización de procesos empresariales.",
    tools: ["Estrategia", "Arquitectura", "Capacitación", "Soporte"]
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones personalizadas de automatización e inteligencia artificial
            para impulsar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl border border-gray-200 hover:border-cyan-500 hover:shadow-xl transition-all group"
              >
                <div className="bg-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                  <Icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            Solicita una Consultoría Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}