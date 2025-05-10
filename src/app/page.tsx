// src/app/page.tsx
'use client';
import Image from 'next/image'

const fotos = [
  {
    src: '/images/image1.png',
    title: 'Cosmic Edge',
    year: '2024'
  },
  {
    src: '/images/image2.png',
    title: 'Ethereal Flow',
    year: '2024'
  },
  {
    src: '/images/image3.png',
    title: 'Celestial Harmony',
    year: '2023'
  }
  // ...
]

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col px-4 py-8 relative">
      {/* Header sutil - solo aparece al hacer scroll hacia arriba o al inicio */}
      <header className="fixed top-0 left-0 w-full z-10 bg-gradient-to-b from-black via-black to-transparent h-16 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="max-w-3xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo/Signature - sutil */}
          <div className="text-white text-opacity-70 hover:text-opacity-100 transition-opacity">
            <span className="font-light tracking-widest">SILVERSKYES</span>
          </div>
          
          {/* Micro-navegación - minimalista */}
          <nav className="space-x-6 text-xs text-white text-opacity-60">
            <a href="#" className="hover:text-opacity-100 transition-opacity">PORTFOLIO</a>
            <a href="#about" className="hover:text-opacity-100 transition-opacity">ABOUT</a>
            <a href="#contact" className="hover:text-opacity-100 transition-opacity">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Indicador de progreso sutil */}
      <div className="fixed top-0 left-0 w-full z-20 h-0.5 flex">
        {fotos.map((_, index) => (
          <div key={index} className="flex-grow h-full mx-px bg-white bg-opacity-20 hover:bg-opacity-60 transition-all" />
        ))}
      </div>
      
      {/* Galería: ocupa todo el espacio restante */}
      <div className="flex-grow max-w-3xl mx-auto space-y-12 mt-6">
        {fotos.map((foto, index) => (
          <div key={foto.src} className="w-full rounded overflow-hidden group relative">
            <Image
              src={foto.src}
              alt={foto.title}
              width={1200}
              height={800}
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 group-hover:scale-[1.01]"
            />
            
            {/* Info sutil que aparece con hover */}
            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
              <span className="text-white text-sm font-light">{foto.title}</span>
              <span className="text-gray-400 text-xs">{foto.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer ultra delgado */}
      <footer className="bg-black border-t border-gray-800 mt-2 h-8 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4 flex flex-row items-center justify-between text-xs">
          <span className="text-gray-400">
            Contact: <a href="mailto:wifey@silly.com" className="text-gray-300 hover:text-white transition">wifey@silly.com</a>
          </span>
          <a
            href="https://www.instagram.com/_silverskyes_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-2 py-0.5 rounded text-xs"
          >
            Instagram
          </a>
        </div>
      </footer>
    </main>
  )
}