"use client"

/**
 * Componente Hero de Umbra
 * Sección principal con título, subtítulo y CTA
 */

import { Button } from "@/components/ui/button"

interface HeroUmbraProps {
  nombre: string
  edicion: number
  capacidad: number
  onVerEntradas: () => void
}

export function HeroUmbra({ nombre, edicion, capacidad, onVerEntradas }: HeroUmbraProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Efecto de glow sutil en el fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Patrón de grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Título principal */}
        <h1 className="text-8xl md:text-9xl font-bold text-primary mb-6 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {nombre} {edicion === 2 ? "II" : edicion}
        </h1>

        {/* Subtítulo con información clave */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          Segunda edición · {capacidad} personas · Solo se realiza si llegamos al objetivo
        </p>

        <p className="text-sm md:text-base text-muted-foreground/60 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Una experiencia nocturna exclusiva e irrepetible
        </p>

        {/* CTA principal */}
        <Button
          size="lg"
          onClick={onVerEntradas}
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500"
        >
          Ver entradas
        </Button>

        {/* Indicador de scroll */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
