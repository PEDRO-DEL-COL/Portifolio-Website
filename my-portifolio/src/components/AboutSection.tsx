'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const timelineData: Record<number, string> = {
  2019: 'Início dos estudos formais em tecnologia. Primeiro contato com programação e lógica.',
  2020: 'Assistente de Marketing no Colégio AZ Internacional. Aprendi sobre mídias digitais e design.',
  2021: 'Ingresso na Universidade São Francisco (Engenharia Mecânica). Depois transição para Ciência da Computação.',
  2022: 'Início do intercâmbio em São Francisco (City College of San Francisco).',
  2023: 'Conclusão do período como Au Pair nos EUA, retornando ao Brasil.',
  2024: 'Técnico de Suporte em TI na Universidade São Francisco + ingresso na Anhanguera em Ciência da Computação.',
  2025: 'Professor de Inglês (autônomo) e Coordenador de Contas na Russell Tobin. Início da FATEC em Gestão de TI.',
}

export default function AboutSection() {
  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - 2019 + 1 },
    (_, i) => 2019 + i
  )

  const [selectedYear, setSelectedYear] = useState<number | null>(2019)

  // refs para drag scroll
  const containerRef = useRef<HTMLDivElement>(null)
  let isDown = false
  let startX: number
  let scrollLeft: number

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    isDown = true
    startX = e.pageX - containerRef.current.offsetLeft
    scrollLeft = containerRef.current.scrollLeft
    containerRef.current.classList.add('cursor-grabbing')
  }

  const onMouseLeave = () => {
    isDown = false
    containerRef.current?.classList.remove('cursor-grabbing')
  }

  const onMouseUp = () => {
    isDown = false
    containerRef.current?.classList.remove('cursor-grabbing')
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1.2 // sensibilidade do drag
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  // === Adicionando scroll horizontal via wheel com preventDefault ===
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // trava scroll vertical e transforma em horizontal
    const handleWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // se o movimento vertical for maior, impede scroll vertical
        e.preventDefault()
        container.scrollLeft += e.deltaY
        }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
        container.removeEventListener('wheel', handleWheel)
    }
    }, [])


  return (
    <section id="sobre" className="bg-teal-950 py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Minha História
        </h2>

        {/* Timeline scrollable */}
        <div className="relative">
          {/* sombras laterais */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-teal-950 to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-teal-950 to-transparent z-10" />

          <div
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className="overflow-x-auto overflow-y-hidden cursor-grab scrollbar-hide select-none"
            style={{
                scrollbarWidth: 'none', // Firefox
            }}
            >
            {/* CSS específico para Webkit browsers */}
            <style jsx>{`
                div::-webkit-scrollbar {
                display: none;
                }
            `}</style>
            <div className="relative flex items-start gap-80 px-12 py-20 min-w-max">
              {/* linha horizontal */}
              <div className="absolute left-0 right-0 top-25 h-[4px] bg-teal-400" />

              {years.map((year) => (
                <div key={year} className="relative flex flex-col items-center">
                  <motion.button
                    layout
                    onClick={() =>
                      setSelectedYear(selectedYear === year ? null : year)
                    }
                    className="flex items-center justify-center rounded-full border-2 border-teal-400 text-sm font-bold cursor-pointer"
                    style={{
                      width: selectedYear === year ? 280 : 48,
                      height: selectedYear === year ? 'auto' : 48,
                      borderRadius: selectedYear === year ? 16 : '50%',
                      padding: selectedYear === year ? '16px' : 0,
                      backgroundColor: selectedYear === year ? '#ffffff' : '#042f2e', // branco se expandido, teal se fechado
                      color: selectedYear === year ? '#042f2e' : '#ffffff', // texto troca de cor também
                    }}
                  >
                    <motion.div layout>
                      {selectedYear === year ? (
                        <div className="text-center">
                          <h3 className="text-lg font-bold text-teal-600 mb-2">
                            {year}
                          </h3>
                          <p className="text-teal-950 text-sm">
                            {timelineData[year]}
                          </p>
                        </div>
                      ) : (
                        <span className="text-white">{year}</span>
                      )}
                    </motion.div>
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
