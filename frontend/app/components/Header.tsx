'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">R2</span>
          </div>
          <span className="text-xl font-bold text-gray-900">R2Automate</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              href="#servicios" 
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link 
              href="#casos" 
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Casos de Éxito
            </Link>
          </li>
          <li>
            <Link 
              href="#proceso" 
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Proceso
            </Link>
          </li>
          <li>
            <Link 
              href="#faq" 
              className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
            >
              FAQ
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link
            href="#contacto"
            className="bg-cyan-500 text-white px-6 py-2.5 rounded-full hover:bg-cyan-600 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <ul className="container mx-auto px-6 py-4 space-y-4">
            <li>
              <Link
                href="#servicios"
                className="block text-gray-700 hover:text-cyan-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="#casos"
                className="block text-gray-700 hover:text-cyan-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Casos de Éxito
              </Link>
            </li>
            <li>
              <Link
                href="#proceso"
                className="block text-gray-700 hover:text-cyan-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proceso
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="block text-gray-700 hover:text-cyan-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="block bg-cyan-500 text-white px-6 py-2.5 rounded-full hover:bg-cyan-600 transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}