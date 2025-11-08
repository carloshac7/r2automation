'use client';

import { motion } from "framer-motion";
import { Zap, Bot, Code, Workflow } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Automatización Inteligente
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Automatiza tu negocio con{" "}
            <span className="text-cyan-500">Inteligencia Artificial</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            Desarrollamos soluciones personalizadas de automatización, chatbots inteligentes,
            web scraping y APIs para optimizar tus procesos empresariales
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contacto"
              className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicita una Demo
            </a>
            <a
              href="#servicios"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-cyan-500"
            >
              Ver Servicios
            </a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Workflow className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Automatización</h3>
              <p className="text-sm text-gray-600 mt-1">n8n, Python, APIs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Bot className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Chatbots IA</h3>
              <p className="text-sm text-gray-600 mt-1">Flowise, Voiceflow</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Code className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Web Scraping</h3>
              <p className="text-sm text-gray-600 mt-1">Datos automatizados</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Zap className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">CRM Kommo</h3>
              <p className="text-sm text-gray-600 mt-1">Gestión de leads</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}