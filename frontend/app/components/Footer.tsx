'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R2</span>
              </div>
              <span className="text-2xl font-bold text-white">Automate</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transformamos negocios con soluciones de automatización inteligente,
              chatbots con IA, web scraping y desarrollo de APIs personalizadas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:contacto@r2automate.com" className="hover:text-cyan-400 transition-colors">
                  contacto@r2automate.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="https://wa.me/51912435778" className="hover:text-cyan-400 transition-colors">
                  +51 9 1243 5778
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Chatbots con IA
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Automatización
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Web Scraping
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Kommo CRM
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Desarrollo de Apps
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Consultoría Técnica
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#casos" className="hover:text-cyan-400 transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="hover:text-cyan-400 transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-cyan-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:text-cyan-400 transition-colors">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} R2Automate. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/r2automate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/r2automate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/r2automate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link href="/privacidad" className="hover:text-cyan-400 transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-cyan-400 transition-colors">
                Términos
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Proyectos Garantizados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Atención en LATAM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}