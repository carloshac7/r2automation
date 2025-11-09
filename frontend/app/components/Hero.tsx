'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
        >
          Automatiza tu mundo con flujos visuales
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700"
        >
          Plataforma low-code para crear automatizaciones potentes, inspirada en n8n, Flowise y Voiceflow.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a 
            href="/signup" 
            className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Empieza gratis
          </a>
          <a 
            href="#demo" 
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all border-2 border-gray-300 font-semibold"
          >
            Ver demo
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
            src="/hero-illustration.webp" 
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