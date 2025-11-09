'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-50 pt-20">
      <div className="container mx-auto px-6 text-center">
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
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12"
        >
          {/* TODO: Reemplazar con tu propia ilustración o imagen */}
          <Image 
            src="/images/logo.svg" 
            alt="Ilustración de flujo de automatización" 
            width={800} 
            height={600} 
            className="mx-auto rounded-lg shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}