import Image from "next/image";
import { motion } from "framer-motion";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Ve cómo funciona
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* TODO: Reemplazar con tu propio GIF o video de demo */}
          <Image
            src="/flow-gif.gif"
            alt="Demo de flujo de automatización"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 text-xl"
        >
          Crea flujos intuitivos y visuales para automatizar tareas diarias.
        </motion.p>
      </div>
    </section>
  );
}