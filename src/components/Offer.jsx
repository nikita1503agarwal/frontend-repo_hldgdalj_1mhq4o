import React from 'react'

export default function Offer() {
  return (
    <section className="bg-[#FFFDF8]" id="offre">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#4E3B33]">Offre & prix</h2>
        <p className="mt-4 text-[#4E3B33]/80 leading-relaxed">
          Chaque site est unique. Nos créations sur‑mesure commencent à <strong className="font-semibold text-[#4E3B33]">350€</strong>.
          La plupart de nos couples investissent entre <strong className="font-semibold text-[#4E3B33]">700€ et 1 200€</strong>, selon le niveau de personnalisation.
        </p>
        <div className="mt-8 inline-flex flex-col items-center gap-3 rounded-2xl bg-white/70 ring-1 ring-[#D9C5A3]/40 p-6 shadow-[0_20px_60px_-30px_rgba(78,59,51,0.3)]">
          <p className="text-sm text-[#4E3B33]/70">Devis sur demande, après un échange rapide pour comprendre votre histoire et vos besoins.</p>
          <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm" style={{backgroundColor:'#4E3B33'}}>Demander un devis</a>
        </div>
      </div>
    </section>
  )
}
