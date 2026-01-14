"use client"

/**
 * Componente Reutilizable de Tarjeta de Entrada
 * Muestra información de cada tipo de entrada con stock y botón de compra
 */

import { Button } from "@/components/ui/button"
import { formatearPesos } from "@/lib/umbra-utils"
import type { TipoEntrada } from "@/lib/umbra-types"
import { Sparkles, Crown } from "lucide-react"

interface TarjetaEntradaProps {
  entrada: TipoEntrada
}

export function TarjetaEntrada({ entrada }: TarjetaEntradaProps) {
  const porcentajeDisponible = (entrada.cantidadDisponible / entrada.cantidadTotal) * 100
  const stockBajo = porcentajeDisponible < 30
  const sinStock = entrada.cantidadDisponible === 0

  const handleComprar = () => {
    // Redirige a la plataforma externa de compra
    window.open(entrada.urlCompra, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={`relative group p-8 rounded-xl border transition-all duration-300 ${
        entrada.esFundador
          ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
          : "bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      }`}
    >
      {/* Badge de tipo de entrada */}
      {entrada.esFundador && (
        <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
          <Crown className="w-3 h-3" />
          Exclusivo
        </div>
      )}

      {/* Icono decorativo */}
      {entrada.esVIP && (
        <div className="mb-4">
          <Sparkles className={`w-8 h-8 ${entrada.esFundador ? "text-primary" : "text-muted-foreground"}`} />
        </div>
      )}

      {/* Nombre de la entrada */}
      <h3 className="text-2xl font-bold mb-2 text-foreground">{entrada.nombre}</h3>

      {/* Precio */}
      <p className="text-3xl font-bold text-primary mb-4">{formatearPesos(entrada.precio)}</p>

      {/* Descripción */}
      <p className="text-sm text-muted-foreground mb-6">{entrada.descripcion}</p>

      {/* Lista de beneficios */}
      <ul className="space-y-3 mb-6">
        {entrada.beneficios.map((beneficio, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">{beneficio}</span>
          </li>
        ))}
      </ul>

      {/* Indicador de stock */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground">Stock disponible</span>
          <span className={`text-xs font-medium ${stockBajo ? "text-destructive" : "text-primary"}`}>
            {entrada.cantidadDisponible} / {entrada.cantidadTotal}
          </span>
        </div>

        {/* Barra de stock */}
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${stockBajo ? "bg-destructive" : "bg-primary"}`}
            style={{ width: `${porcentajeDisponible}%` }}
          />
        </div>

        {stockBajo && !sinStock && (
          <p className="text-xs text-destructive mt-2 font-medium">⚠ Últimas unidades disponibles</p>
        )}
      </div>

      {/* Botón de compra */}
      <Button
        onClick={handleComprar}
        disabled={sinStock}
        className={`w-full ${entrada.esFundador ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" : ""}`}
        size="lg"
      >
        {sinStock ? "Agotado" : "Comprar entrada"}
      </Button>
    </div>
  )
}
