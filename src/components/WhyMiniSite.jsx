import React from 'react'

export default function WhyMiniSite() {
  const items = [
    {
      title: 'Tout au même endroit',
      desc: 'Centralisez programme, adresses, accès, dress code, RSVP… Vos invités ne cherchent plus, ils trouvent.',
      img: 'https://images.unsplash.com/photo-1513198080076-6bb5322d3ef2?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: "Une expérience fluide",
      desc: "Un site rapide, lisible, pensé mobile‑first. Vos proches naviguent sans effort, même la veille du jour J.",
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Moins de stress',
      desc: 'Un changement ? Lieu, heure, météo : vous mettez à jour, tout le monde est informé instantanément.',
      img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section className="bg-[#FFFDF8]" id="pourquoi">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#4E3B33]">Pourquoi un mini‑site de mariage ?</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-3xl overflow-hidden bg-[#F5EFE7]/60 ring-1 ring-[#D9C5A3]/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-[#4E3B33]">{it.title}</h3>
                <p className="mt-1 text-sm text-[#4E3B33]/80">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
