'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraGradient } from "./AuroraGradient";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-50 pt-20 overflow-hidden">
      {/* Efecto aurora de fondo completo */}
      <div className="absolute inset-0 pointer-events-none">
        <AuroraGradient
          className="w-full h-full"
          colors={[
            'rgba(6, 182, 212, 0.12)',   // cyan-500
            'rgba(34, 211, 238, 0.1)',   // cyan-400
            'rgba(59, 130, 246, 0.12)',  // blue-500
            'rgba(99, 102, 241, 0.08)',  // indigo-500
          ]}
          opacity={0.9}
          blur={60}
        >
          <div className="w-full h-full" />
        </AuroraGradient>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 text-center relative z-10">
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
          <AuroraGradient
            className="inline-block"
            colors={[
              'rgba(6, 182, 212, 0.3)',
              'rgba(59, 130, 246, 0.3)',
            ]}
            opacity={0.9}
            blur={60}
          >
            <a
              href="#contacto"
              className="block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicita una Demo
            </a>
          </AuroraGradient>
          
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
          <AuroraGradient
            className="inline-block rounded-2xl"
            colors={[
              'rgba(6, 182, 212, 0.15)',
              'rgba(59, 130, 246, 0.15)',
              'rgba(99, 102, 241, 0.1)',
            ]}
            opacity={0.9}
            blur={60}
          >
            <Image 
              src="/images/logo.svg" 
              alt="Ilustración de flujo de automatización" 
              width={800} 
              height={600} 
              className="mx-auto rounded-lg shadow-2xl"
              priority
            />
          </AuroraGradient>
        </motion.div>
      </div>
    </section>
  );
}