'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState('Conectando...');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`)
      .then(res => res.json())
      .then(data => setApiStatus(data.message))
      .catch(() => setApiStatus('❌ Error al conectar'));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold mb-8 text-center">
          🚀 R2 Automate
        </h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl mb-4">Estado del Backend:</h2>
          <p className="text-xl">{apiStatus}</p>
        </div>
      </div>
    </main>
  );
}
