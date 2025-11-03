import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-background border-t border-accent/10 py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">&copy; 2025 R2Automate. Todos los derechos reservados.</p>
        <ul className="flex justify-center space-x-6">
          <li><Link href="/privacy" className="hover:text-accent">Privacidad</Link></li>
          <li><Link href="/terms" className="hover:text-accent">Términos</Link></li>
          <li><Link href="/contact" className="hover:text-accent">Contacto</Link></li>
        </ul>
      </div>
    </motion.footer>
  );
}