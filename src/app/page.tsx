'use client';
import Image from 'next/image';
import { useState } from 'react';

const fotos = [
  { src: '/images/image1.png', title: 'Cosmic Edge', year: '2024' },
  { src: '/images/image2.png', title: 'Ethereal Flow', year: '2024' },
  { src: '/images/image3.png', title: 'Celestial Harmony', year: '2023' },
  // ...
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col px-4 pt-16 pb-8">
      {/* Header fijo con fondo semitransparente y desenfoque */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-lg font-light tracking-widest">
            SILVERSKYES
          </div>
          <nav className="hidden sm:flex space-x-6 text-sm">
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <button
            className="sm:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden bg-black bg-opacity-95 backdrop-blur-sm">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a
                href="#portfolio"
                className="text-sm hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-sm hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Sección Portfolio con scroll y separación */}
      <section id="portfolio" className="flex-grow max-w-3xl mx-auto space-y-12 mt-4">
        {fotos.map((foto) => (
          <div key={foto.src} className="w-full rounded overflow-hidden group relative">
            <Image
              src={foto.src}
              alt={foto.title}
              width={1200}
              height={800}
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
              <span className="text-white text-sm font-light">{foto.title}</span>
              <span className="text-gray-400 text-xs">{foto.year}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Footer con contacto e Instagram */}
      <footer id="contact" className="mt-12 py-4 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <div>
            Contact: <a href="mailto:wifey@silly.com" className="underline hover:text-white">wifey@silly.com</a>
          </div>
          <a
            href="https://www.instagram.com/_silverskyes_/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-0 inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-3 py-1 rounded text-sm"
          >
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
