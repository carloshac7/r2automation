'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          🚀 Automatización • Inteligencia Artificial • Desarrollo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
        >
          Automatizamos tu negocio
          <span className="block text-cyan-600 mt-2">con Inteligencia Artificial</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 leading-relaxed"
        >
          Desarrollamos chatbots inteligentes, automatizaciones de procesos, 
          integraciones con CRM, web scraping y soluciones personalizadas para 
          tu empresa.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <a 
            href="#servicios" 
            className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Ver Servicios
          </a>
          <a 
            href="#contacto" 
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all border-2 border-gray-300 font-semibold"
          >
            Contactar
          </a>
        </motion.div>

        {/* Logos de tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-70"
        >
          <span className="text-gray-600 font-medium">Trabajamos con:</span>
          <div className="flex flex-wrap gap-6 items-center">
            <span className="text-gray-700 font-semibold">n8n</span>
            <span className="text-gray-700 font-semibold">Flowise</span>
            <span className="text-gray-700 font-semibold">Voiceflow</span>
            <span className="text-gray-700 font-semibold">Kommo CRM</span>
            <span className="text-gray-700 font-semibold">Python</span>
            <span className="text-gray-700 font-semibold">Streamlit</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          {/* TODO: Reemplazar con imagen de dashboard o demo real */}
          <Image 
            src="/hero-illustration.webp" 
            alt="Dashboard de automatización" 
            width={1000} 
            height={600} 
            className="mx-auto rounded-xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}