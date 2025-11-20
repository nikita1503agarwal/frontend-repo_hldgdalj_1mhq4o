import React from 'react'
import Hero from './components/Hero'
import Concept from './components/Concept'
import WhyMiniSite from './components/WhyMiniSite'
import Portfolio from './components/Portfolio'
import Offer from './components/Offer'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      {/* top nav simple */}
      <header className="sticky top-0 z-30 backdrop-blur bg-[#FFFDF8]/70 border-b border-[#D9C5A3]/40">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="text-sm font-medium text-[#4E3B33]">Mini‑sites de mariage par Hervé A.</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-[#4E3B33]/80">
            <a href="#concept" className="hover:underline">Concept</a>
            <a href="#pourquoi" className="hover:underline">Pourquoi</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#offre" className="hover:underline">Offre</a>
            <a href="#process" className="hover:underline">Process</a>
          </nav>
          <a href="#contact" className="text-sm text-white rounded-full px-4 py-2" style={{backgroundColor:'#4E3B33'}}>Contact</a>
        </div>
      </header>

      <main>
        <Hero />
        <Concept />
        <WhyMiniSite />
        <Portfolio />
        <Offer />
        <Process />
        <Testimonials />

        {/* Contact block */}
        <section id="contact" className="bg-[#FFFDF8]">
          <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#4E3B33]">Parlons de votre projet</h2>
            <p className="mt-3 text-[#4E3B33]/80">Quelques lignes suffisent. Nous revenons vers vous sous 24h avec des premières idées.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid gap-4 text-left">
              <input required placeholder="Vos prénoms" className="rounded-xl bg-white/70 ring-1 ring-[#D9C5A3]/50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#D9C5A3]" />
              <input required type="email" placeholder="Votre e‑mail" className="rounded-xl bg-white/70 ring-1 ring-[#D9C5A3]/50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#D9C5A3]" />
              <textarea rows="4" placeholder="Votre histoire, la date, le lieu, vos envies…" className="rounded-xl bg-white/70 ring-1 ring-[#D9C5A3]/50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#D9C5A3]" />
              <button className="mt-2 inline-flex justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm" style={{backgroundColor:'#4E3B33'}}>
                Envoyer ma demande
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
