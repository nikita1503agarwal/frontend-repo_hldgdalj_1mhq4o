import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523246191819-8b3f1e79a8e0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508711043262-0a537e1e90b7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922323-0d76a6b36087?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516632664305-eda5d6a5bb69?q=80&w=1200&auto=format&fit=crop',
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#FFFDF8]">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#4E3B33]">Portfolio</h2>
        <p className="mt-3 text-[#4E3B33]/80">Quelques ambiances et extraits de mini‑sites : lumière douce, détails, élégance discrète.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden bg-[#F5EFE7]/60 ring-1 ring-[#D9C5A3]/40">
              <div className="aspect-[4/3]">
                <img src={src} alt="Extrait visuel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
