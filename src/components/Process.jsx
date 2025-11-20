import React from 'react'

const steps = [
  { title: 'Brief', desc: "On fait connaissance. Vous me racontez votre histoire, vos envies, vos inspirations." },
  { title: 'Croquis & Moodboard', desc: "Premières pistes, palette, typographies, intentions d'illustration." },
  { title: 'Design sur‑mesure', desc: "Maquette dédiée, micro‑interactions discrètes, univers texturé et élégant." },
  { title: 'Mise en ligne', desc: "Nom de domaine, configuration, performance. Votre mini‑site prend vie." },
  { title: 'Ajustements', desc: "On peaufine, on vérifie, on transmet les accès. Vous êtes prêts." },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#FFFDF8]">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#4E3B33]">Comment ça marche</h2>
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl bg-[#F5EFE7]/60 p-5 ring-1 ring-[#D9C5A3]/40">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium text-white" style={{backgroundColor:'#4E3B33'}}>{i+1}</div>
              <h3 className="mt-3 font-medium text-[#4E3B33]">{s.title}</h3>
              <p className="mt-1 text-sm text-[#4E3B33]/80">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
