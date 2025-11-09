'use client';

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulación de envío - Aquí integrarías con tu backend o servicio de email
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comencemos Tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu negocio y cómo podemos ayudarte a automatizar procesos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nombre de empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="+51 912 435 778"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Servicio de Interés *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="chatbot">Chatbot con IA</option>
                  <option value="automatizacion">Automatización de Procesos</option>
                  <option value="webscraping">Web Scraping & APIs</option>
                  <option value="kommo">Kommo CRM</option>
                  <option value="apps">Desarrollo de Apps</option>
                  <option value="leads">Gestión de Leads</option>
                  <option value="integraciones">Integraciones</option>
                  <option value="consultoria">Consultoría Técnica</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y qué necesitas automatizar..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  "Enviando..."
                ) : status === "success" ? (
                  "✓ Enviado con Éxito"
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-semibold">
                  ¡Gracias! Te responderemos en menos de 24 horas.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:contacto@r2automate.com" className="text-cyan-600 hover:text-cyan-700">
                      contacto@r2automate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                    <a href="https://wa.me/51912435778" className="text-cyan-600 hover:text-cyan-700">
                      +51 912 435 778
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ubicación</p>
                    <p className="text-gray-600">Lima, Perú</p>
                    <p className="text-sm text-gray-500">Atendemos todo LATAM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horario</p>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-sm text-gray-500">Soporte 24/7 disponible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Consultoría Gratuita
              </h3>
              <p className="mb-6 leading-relaxed">
                Agenda una llamada de 30 minutos sin costo. Analizaremos tu caso y
                te daremos una propuesta personalizada con ROI estimado.
              </p>
              <a
                href="https://calendar.app.google/f5atD5xruvegwAYm7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Agendar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}