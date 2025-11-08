'use client';

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  // Número de WhatsApp (cambiar por tu número real)
  const phoneNumber = "51912435778"; // Formato: código país + número sin +
  
  const handleSendMessage = () => {
    const text = message || "Hola, me gustaría obtener más información sobre sus servicios de automatización.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setMessage("");
    setIsOpen(false);
  };

  const quickMessages = [
    "Quiero automatizar mi negocio",
    "Necesito un chatbot con IA",
    "Consulta sobre web scraping",
    "Info sobre precios"
  ];

  return (
    <>
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">👋</span>
                  </div>
                  <div>
                    <p className="font-bold">R2Automate</p>
                    <p className="text-xs opacity-90">Respondemos en minutos</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Welcome Message */}
              <div className="bg-gray-100 p-3 rounded-lg mb-4">
                <p className="text-sm text-gray-800">
                  ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
                </p>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2 mb-4">
                <p className="text-xs text-gray-500 font-semibold mb-2">Mensajes rápidos:</p>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMessage(msg);
                      setTimeout(handleSendMessage, 100);
                    }}
                    className="w-full text-left bg-green-50 hover:bg-green-100 text-gray-700 p-3 rounded-lg text-sm transition-colors border border-green-200"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              {/* Custom Message Input */}
              <div className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje personalizado..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm resize-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar a WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-green-600 transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Pulse */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="fixed bottom-24 right-6 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap z-40 pointer-events-none"
        >
          ¿Necesitas ayuda? Escríbenos
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 transform rotate-45" />
        </motion.div>
      )}
    </>
  );
}