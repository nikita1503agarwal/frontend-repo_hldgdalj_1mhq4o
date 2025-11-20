import React from 'react'

const testimonials = [
  {
    name: 'Camille & Noah',
    text: "Un accompagnement d'une douceur incroyable. Le site a mis tout le monde à l'aise, et nous, on a soufflé.",
  },
  {
    name: 'Lina & Arthur',
    text: "Sobre, élégant, ultra pratique. Les illustrations personnalisées ont fait toute la différence.",
  },
  {
    name: 'Ava & Jonas',
    text: "On s'est sentis écoutés. Tout a été pensé avec délicatesse. Zéro stress pour les invités.",
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-[#FFFDF8]">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#4E3B33]">Ils nous ont fait confiance</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-[#F5EFE7]/60 p-6 ring-1 ring-[#D9C5A3]/40">
              <blockquote className="text-[#4E3B33]/90">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-[#4E3B33]/70">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
