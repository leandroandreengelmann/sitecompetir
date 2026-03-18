"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

export function NavClient() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #E9EAEB" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* mobile: logo centralizada, sem botão */}
      <div className="md:hidden px-6 h-16 flex items-center justify-center">
        <a href="#">
          <Image src="/logo.png" alt="Competir Logo" width={240} height={60} className="w-auto h-10" priority />
        </a>
      </div>

      {/* desktop: logo à esquerda, nav + botão à direita */}
      <div className="hidden md:flex mx-auto max-w-6xl px-6 h-16 items-center justify-between">
        <a href="#">
          <Image src="/logo.png" alt="Competir Logo" width={240} height={60} className="w-auto h-12" priority />
        </a>

        <nav className="flex items-center gap-7">
          {["Funcionalidades", "Como funciona", "Preços"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-[#181D27] hover:text-black transition-colors font-medium"
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/556697249532"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-700 hover:opacity-90"
          style={{ background: "var(--c-accent)" }}
        >
          Crie seu primeiro evento grátis, fale com a gente
          <ArrowRight size={14} weight="bold" />
        </a>
      </div>
    </header>
  )
}
