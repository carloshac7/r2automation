'use client';

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

const cases = [
  {
    industry: "E-commerce",
    title: "Automatización de Gestión de Inventario",
    challenge: "Una tienda online perdía ventas por falta de sincronización entre plataformas y gestión manual de stock.",
    solution: "Implementamos flujos automatizados con n8n que sincronizan inventario en tiempo real entre MercadoLibre, sitio web y ERP interno.",
    results: [
      { icon: TrendingUp, label: "95% menos errores", value: "en stock" },
      { icon: Clock, label: "20 horas ahorradas", value: "semanales" },
      { icon: DollarSign, label: "30% más ventas", value: "capturadas" }
    ]
  },
  {
    industry: "Inmobiliaria",
    title: "Chatbot IA para Calificación de Leads",
    challenge: "Agencia inmobiliaria recibía cientos de consultas diarias sin poder atenderlas rápidamente.",
    solution: "Desarrollamos un chatbot con Flowise que atiende en WhatsApp 24/7, califica leads automáticamente y agenda visitas en el CRM Kommo.",
    results: [
      { icon: Users, label: "300+ leads/mes", value: "atendidos" },
      { icon: Clock, label: "Respuesta inmediata", value: "24/7" },
      { icon: TrendingUp, label: "40% conversión", value: "mejorada" }
    ]
  },
  {
    industry: "Consultoría",
    title: "Web Scraping para Análisis de Mercado",
    challenge: "Empresa necesitaba monitorear precios de competencia manualmente en 50+ sitios web diariamente.",
    solution: "Creamos sistema automatizado de web scraping que extrae datos, genera reportes y alerta cambios importantes vía email.",
    results: [
      { icon: Clock, label: "40 horas ahorradas", value: "mensuales" },
      { icon: TrendingUp, label: "Datos en tiempo real", value: "actualizados" },
      { icon: DollarSign, label: "ROI 300%", value: "en 3 meses" }
    ]
  }
];

export function UseCases() {
  return (
    <section id="casos" className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados reales de negocios que transformaron sus procesos con nuestras soluciones
          </p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {item.industry}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      💡 Desafío
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      ✅ Solución
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    📊 Resultados Obtenidos
                  </h4>
                  <div className="space-y-4">
                    {item.results.map((result, i) => {
                      const Icon = result.icon;
                      return (
                        <div key={i} className="flex items-start gap-4 bg-cyan-50 p-4 rounded-lg">
                          <div className="bg-white p-2 rounded-lg">
                            <Icon className="w-6 h-6 text-cyan-500" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-lg">
                              {result.label}
                            </p>
                            <p className="text-gray-600">
                              {result.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
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
          <a
            href="#contacto"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            Quiero Resultados Como Estos
          </a>
        </motion.div>
      </div>
    </section>
  );
}