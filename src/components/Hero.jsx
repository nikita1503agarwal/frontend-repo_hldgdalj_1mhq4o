import React from 'react'

const brand = {
  sand: '#F5EFE7',
  ivory: '#FFFDF8',
  cocoa: '#4E3B33',
  gold: '#D9C5A3',
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background paper texture feel via subtle gradient and noise overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,#FFFDF8,transparent)]" />
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1529539795054-3c162aab037a?q=80&w=1600&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9C5A3]/40 bg-white/60 backdrop-blur px-3 py-1 text-[12px] text-[#4E3B33]/80 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9C5A3]" />
              Mini‑sites de mariage par Hervé A.
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#4E3B33]">
              Votre histoire, mise en lumière.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4E3B33]/80 max-w-xl">
              Des sites de mariage personnalisés, émotionnels et modernes. Pensés comme des faire‑part digitaux vivants : pratiques, élégants, et profondément humains.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md" style={{backgroundColor: brand.cocoa}}>
                Imaginer votre site ensemble
              </a>
              <a href="#portfolio" className="text-sm text-[#4E3B33] underline/30 hover:underline">Voir des exemples</a>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <div className="relative rounded-3xl p-3 bg-white/70 backdrop-blur shadow-[0_30px_80px_-20px_rgba(78,59,51,0.25)] ring-1 ring-[#D9C5A3]/40">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
                  alt="Couple moderne au coucher du soleil"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* phone preview overlay */}
              <div className="absolute -bottom-8 -right-6 w-40 sm:w-48 md:w-56 rotate-3">
                <div className="rounded-[28px] border border-black/10 bg-white shadow-xl overflow-hidden">
                  <div className="aspect-[9/19] bg-white">
                    <div className="h-24 bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                    <div className="p-3">
                      <div className="h-2.5 w-24 bg-black/80 rounded" />
                      <div className="mt-2 space-y-2">
                        <div className="h-2 w-28 bg-black/50 rounded" />
                        <div className="h-2 w-20 bg-black/30 rounded" />
                      </div>
                      <div className="mt-3 h-7 rounded-full bg-[#4E3B33]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-12 text-sm text-[#4E3B33]/70">
              Une approche artisanale, loin des modèles figés. Conçue en duo : Hervé (design & web) et une illustratrice dédiée à votre univers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
