/**
 * Página principal de Umbra II
 * Landing page completa de crowdfunding
 */

"use client"

import { useRef } from "react"
import { HeroUmbra } from "@/components/hero-umbra"
import { BarraProgreso } from "@/components/barra-progreso"
import { SeccionHitos } from "@/components/seccion-hitos"
import { TarjetaEntrada } from "@/components/tarjeta-entrada"
import { MockupCarnet } from "@/components/mockup-carnet"
import { FooterUmbra } from "@/components/footer-umbra"
import { CONFIGURACION_UMBRA } from "@/lib/umbra-config"

export default function HomePage() {
  // Referencia para hacer scroll a la sección de entradas
  const entradasRef = useRef<HTMLElement>(null)

  const scrollToEntradas = () => {
    entradasRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroUmbra
        nombre={CONFIGURACION_UMBRA.nombre}
        edicion={CONFIGURACION_UMBRA.edicion}
        capacidad={CONFIGURACION_UMBRA.capacidadMaxima}
        onVerEntradas={scrollToEntradas}
      />

      {/* Barra de Progreso */}
      <BarraProgreso
        montoActual={CONFIGURACION_UMBRA.montoActual}
        montoObjetivo={CONFIGURACION_UMBRA.objetivoRecaudacion}
        hitos={CONFIGURACION_UMBRA.hitos}
      />

      {/* Hitos Desbloqueables */}
      <SeccionHitos hitos={CONFIGURACION_UMBRA.hitos} montoActual={CONFIGURACION_UMBRA.montoActual} />

      {/* Sección de Entradas */}
      <section ref={entradasRef} className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Tipos de entrada</h2>
          <p className="text-center text-muted-foreground mb-16">Elegí la experiencia que querés vivir en Umbra II</p>

          {/* Grid de entradas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {CONFIGURACION_UMBRA.entradas.map((entrada) => (
              <TarjetaEntrada key={entrada.id} entrada={entrada} />
            ))}
          </div>

          {/* Sección de visualización de carnets */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Tu carnet Umbra</h2>
            <p className="text-center text-muted-foreground mb-16">
              Diseño exclusivo y minimalista para una experiencia premium
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {CONFIGURACION_UMBRA.entradas
                .filter((e) => e.esFundador || e.esVIP)
                .map((entrada) => (
                  <MockupCarnet key={entrada.id} entrada={entrada} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterUmbra instagramUrl={CONFIGURACION_UMBRA.instagramUrl} />
    </main>
  )
}
