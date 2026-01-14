/**
 * Componente de Sección de Hitos
 * Muestra los hitos desbloqueables con su estado
 */

import { formatearPesos } from "@/lib/umbra-utils"
import type { HitoEvento } from "@/lib/umbra-types"
import { Check, Lock } from "lucide-react"

interface SeccionHitosProps {
  hitos: HitoEvento[]
  montoActual: number
}

export function SeccionHitos({ hitos, montoActual }: SeccionHitosProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Hitos desbloqueables</h2>
        <p className="text-center text-muted-foreground mb-16">Cada aporte nos acerca a una experiencia más completa</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hitos.map((hito, index) => {
            const desbloqueado = montoActual >= hito.monto

            return (
              <div
                key={hito.monto}
                className={`relative group p-8 rounded-lg border transition-all duration-500 ${
                  desbloqueado
                    ? "bg-primary/5 border-primary shadow-lg shadow-primary/10"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {/* Número del hito */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>

                {/* Icono de estado */}
                <div
                  className={`mb-6 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    desbloqueado
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {desbloqueado ? (
                    <Check className="w-6 h-6 animate-in zoom-in duration-500" />
                  ) : (
                    <Lock className="w-6 h-6" />
                  )}
                </div>

                {/* Monto del hito */}
                <p className={`text-sm font-medium mb-2 ${desbloqueado ? "text-primary" : "text-muted-foreground"}`}>
                  {formatearPesos(hito.monto)}
                </p>

                {/* Título */}
                <h3 className={`text-xl font-bold mb-3 ${desbloqueado ? "text-foreground" : "text-muted-foreground"}`}>
                  {hito.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-muted-foreground leading-relaxed">{hito.descripcion}</p>

                {/* Estado */}
                {desbloqueado && (
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">✓ Desbloqueado</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
