import Image from 'next/image'

const fotos = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  // …
]

export default function Home() {
  return (
    <main className="bg-black min-h-screen px-4 py-8">
      {/* Contenedor centradísimo, ancho máximo razonable */}
      <div className="max-w-3xl mx-auto space-y-8">
        {fotos.map(src => (
          <div key={src} className="w-full rounded overflow-hidden">
            <Image
              src={src}
              alt="Artwork image"
              width={1200}
              height={800}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </main>
  )
}