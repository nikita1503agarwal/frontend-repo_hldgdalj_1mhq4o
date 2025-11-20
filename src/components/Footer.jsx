import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#FFFDF8] border-t border-[#D9C5A3]/40">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-[#4E3B33] font-medium">Mini‑sites de mariage par Hervé A.</p>
          <p className="text-sm text-[#4E3B33]/70">Un service créé par Hervé A.</p>
        </div>
        <div className="text-sm text-[#4E3B33]/80">
          <a href="mailto:contact@herve-a.design" className="hover:underline">contact@herve-a.design</a>
          <span className="mx-3 opacity-40">•</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
