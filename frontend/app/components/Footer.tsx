'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white border-t border-gray-200 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Información */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">R2Automate</h3>
            <p className="text-gray-600">
              Automatiza tu mundo con flujos visuales. Plataforma low-code potente e intuitiva.
            </p>
          </div>
          
          {/* Columna 2: Enlaces */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Documentación
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} R2Automate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}