import React from 'react'

export default function Concept() {
  return (
    <section id="concept" className="relative bg-[#FFFDF8]">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#4E3B33]">Le concept</h2>
            <p className="mt-4 text-[#4E3B33]/80 leading-relaxed">
              Chaque mini‑site est une pièce unique, pensée comme un faire‑part vivant. Nous partons de votre histoire, de vos goûts, des lieux, des saisons. Pas de templates, pas d'usine à sites : seulement du sur‑mesure, avec du temps et de l'attention.
            </p>
            <div className="mt-6 rounded-2xl bg-white/70 ring-1 ring-[#D9C5A3]/40 p-6 shadow-[0_20px_60px_-30px_rgba(78,59,51,0.3)]">
              <h3 className="text-lg font-medium text-[#4E3B33]">Un duo créatif</h3>
              <p className="mt-2 text-sm text-[#4E3B33]/80">
                Hervé A. conçoit l'architecture, l'UX et la direction créative du site. Une illustratrice imagine des visuels sur‑mesure (monogramme, motifs, cartouches) pour ancrer votre identité.
              </p>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              {
                title: 'Émotion & élégance',
                desc: "Un univers sobre, texturé, inspiré de la papeterie de luxe : matières, ombres douces, teintes chaudes. Jamais flashy, jamais rose.",
              },
              {
                title: 'Pratique & vivant',
                desc: "Programme, adresses, accès, RSVP : toutes les informations utiles évoluent en temps réel. Vos invités ont toujours la bonne version.",
              },
              {
                title: 'Artisanal & humain',
                desc: "Un accompagnement attentif, sans jargon. On vous écoute, on conseille, on conçoit avec vous, pas à votre place.",
              },
            ].map((b) => (
              <li key={b.title} className="rounded-2xl bg-[#F5EFE7]/60 p-5 ring-1 ring-[#D9C5A3]/40">
                <h4 className="font-medium text-[#4E3B33]">{b.title}</h4>
                <p className="mt-1 text-sm text-[#4E3B33]/80">{b.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
