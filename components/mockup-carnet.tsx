/**
 * Componente de Mockup de Carnet
 * Visualización realista de cómo será el carnet físico
 */

import type { TipoEntrada } from "@/lib/umbra-types"

interface MockupCarnetProps {
  entrada: TipoEntrada
}

export function MockupCarnet({ entrada }: MockupCarnetProps) {
  if (!entrada.esFundador && !entrada.esVIP) return null

  return (
    <div className="relative perspective-1000">
      {/* Carnet físico simulado */}
      <div
        className={`relative w-full max-w-sm mx-auto aspect-[1.6/1] rounded-xl shadow-2xl transform transition-transform hover:scale-105 hover:rotate-1 ${
          entrada.esFundador
            ? "bg-gradient-to-br from-zinc-900 to-black border border-primary/30"
            : "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700"
        }`}
      >
        {/* Efecto de brillo en la superficie */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent rounded-xl" />

        {/* Contenido del carnet */}
        <div className="relative h-full p-6 flex flex-col justify-between">
          {/* Header del carnet */}
          <div>
            <h4
              className={`text-3xl font-bold tracking-tighter mb-1 ${
                entrada.esFundador ? "text-primary" : "text-primary/80"
              }`}
            >
              UMBRA
            </h4>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">Segunda Edición</p>
          </div>

          {/* Tipo de entrada */}
          <div className="space-y-1">
            <p className={`text-lg font-bold ${entrada.esFundador ? "text-primary" : "text-zinc-300"}`}>
              {entrada.nombre}
            </p>
            {entrada.esFundador && <p className="text-xs text-zinc-500 font-mono">Numerado · Personalizado</p>}
          </div>

          {/* Footer con detalles */}
          <div className="flex justify-between items-end">
            <div className="text-xs text-zinc-600">
              <p>500 PERSONAS</p>
              <p>EXCLUSIVO</p>
            </div>

            {entrada.esFundador && (
              <div className="text-right">
                <p className="text-xs text-zinc-500 mb-1">N°</p>
                <p className="text-2xl font-bold text-primary">001</p>
              </div>
            )}
          </div>
        </div>

        {/* Patrón decorativo en la esquina */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent rounded-xl transform rotate-45" />
        </div>
      </div>

      {/* Descripción debajo del carnet */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        {entrada.esFundador
          ? "Carnet físico personalizado con tu nombre y número único"
          : "Carnet físico incluido con tu entrada"}
      </p>
    </div>
  )
}
