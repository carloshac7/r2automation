import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/10"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          {/* TODO: Reemplazar logo con tu propio SVG o imagen */}
          <Image src="/logo.svg" alt="R2Automate Logo" width={150} height={40} />
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="#features" className="hover:text-accent transition-colors">Características</Link></li>
          <li><Link href="#demo" className="hover:text-accent transition-colors">Demo</Link></li>
          <li><Link href="/docs" className="hover:text-accent transition-colors">Documentación</Link></li>
        </ul>
        <Link
          href="/signup"
          className="bg-accent text-background px-6 py-2 rounded-full hover:bg-accent/80 transition-colors"
        >
          Empieza gratis
        </Link>
      </nav>
    </motion.header>
  );
}