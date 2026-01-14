/**
 * Componente de Barra de Progreso
 * Muestra el progreso de recaudación con hitos visuales
 */

import { formatearPesos, calcularPorcentaje } from "@/lib/umbra-utils"

interface BarraProgresoProps {
  montoActual: number
  montoObjetivo: number
  hitos: { monto: number; titulo: string }[]
}

export function BarraProgreso({ montoActual, montoObjetivo, hitos }: BarraProgresoProps) {
  const porcentaje = calcularPorcentaje(montoActual, montoObjetivo)

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Progreso de recaudación</h2>
        <p className="text-center text-muted-foreground mb-12">Transparencia total en cada paso hacia Umbra II</p>

        {/* Contenedor de la barra */}
        <div className="relative">
          {/* Montos arriba de la barra */}
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Recaudado</p>
              <p className="text-2xl font-bold text-primary">{formatearPesos(montoActual)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Objetivo</p>
              <p className="text-2xl font-bold text-foreground">{formatearPesos(montoObjetivo)}</p>
            </div>
          </div>

          {/* Barra de progreso principal */}
          <div className="relative h-4 bg-muted rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out shadow-lg shadow-primary/20"
              style={{ width: `${porcentaje}%` }}
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Marcadores de hitos */}
          <div className="relative h-24 mt-4">
            {hitos.map((hito) => {
              const posicion = (hito.monto / montoObjetivo) * 100
              const desbloqueado = montoActual >= hito.monto

              return (
                <div
                  key={hito.monto}
                  className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                  style={{ left: `${posicion}%` }}
                >
                  {/* Línea vertical */}
                  <div
                    className={`w-0.5 h-6 mb-2 transition-colors ${desbloqueado ? "bg-primary" : "bg-muted-foreground/30"}`}
                  />

                  {/* Punto indicador */}
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all ${
                      desbloqueado
                        ? "bg-primary border-primary shadow-lg shadow-primary/50"
                        : "bg-background border-muted-foreground/30"
                    }`}
                  />

                  {/* Texto del hito */}
                  <div className="mt-2 text-center min-w-[120px]">
                    <p
                      className={`text-xs font-medium transition-colors ${desbloqueado ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {formatearPesos(hito.monto)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Porcentaje actual */}
        <div className="text-center mt-8">
          <p className="text-6xl font-bold text-primary">{porcentaje.toFixed(1)}%</p>
          <p className="text-sm text-muted-foreground mt-2">del objetivo alcanzado</p>
        </div>
      </div>
    </section>
  )
}
