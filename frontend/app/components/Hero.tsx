'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/10 pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Automatiza tu mundo con flujos visuales
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Plataforma low-code para crear automatizaciones potentes, inspirada en n8n, Flowise y Voiceflow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/signup"
            className="bg-accent text-background px-8 py-4 rounded-full text-lg hover:bg-accent/80 transition-colors"
          >
            Empieza gratis
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
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}