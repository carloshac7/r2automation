'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* TODO: Reemplazar logo con tu propio SVG o imagen */}
          <Image 
            src="/logo.svg" 
            alt="R2Automate Logo" 
            width={75} 
            height={20}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
        
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              href="#features" 
              className="text-gray-800 hover:text-cyan-600 transition-colors font-medium"
            >
              Características
            </Link>
          </li>
          <li>
            <Link 
              href="#demo" 
              className="text-gray-800 hover:text-cyan-600 transition-colors font-medium"
            >
              Demo
            </Link>
          </li>
          <li>
            <Link 
              href="/docs" 
              className="text-gray-800 hover:text-cyan-600 transition-colors font-medium"
            >
              Documentación
            </Link>
          </li>
        </ul>
        
        <Link 
          href="/signup" 
          className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-all hover:shadow-lg font-semibold"
        >
          Empieza gratis
        </Link>
      </nav>
    </motion.header>
  );
}