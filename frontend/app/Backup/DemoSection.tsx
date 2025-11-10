'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
        >
          Ve cómo funciona
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto"
        >
          Crea flujos intuitivos y visuales para automatizar tareas diarias
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* TODO: Reemplazar con tu propio GIF o video de demo */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
            <Image 
              src="/flow-gif.gif" 
              alt="Demo de flujo de automatización" 
              width={1200} 
              height={800} 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/signup" 
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg hover:bg-cyan-600 transition-all hover:shadow-xl font-semibold"
          >
            Pruébalo ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}