<motion.header
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
>
  <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
    <Link href="/">
      <Image src="/logo.svg" alt="R2Automate Logo" width={75} height={20} />
    </Link>
    <ul className="flex space-x-6 text-gray-800">
      <li><Link href="#features" className="hover:text-accent transition-colors">Características</Link></li>
      <li><Link href="#demo" className="hover:text-accent transition-colors">Demo</Link></li>
      <li><Link href="/docs" className="hover:text-accent transition-colors">Documentación</Link></li>
    </ul>
    <Link href="/signup" className="btn-primary text-sm">
      Empieza gratis
    </Link>
  </nav>
</motion.header>
