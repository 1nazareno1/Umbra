/**
 * Tipos TypeScript para Umbra
 * Interfaces y tipos reutilizables
 */

export interface HitoEvento {
  monto: number
  titulo: string
  descripcion: string
}

export interface TipoEntrada {
  id: string
  nombre: string
  precio: number
  descripcion: string
  beneficios: string[]
  cantidadDisponible: number
  cantidadTotal: number
  urlCompra: string
  esVIP: boolean
  esFundador: boolean
}

export interface ConfiguracionEvento {
  nombre: string
  edicion: number
  capacidadMaxima: number
  objetivoRecaudacion: number
  hitoConfirmacion: number
  montoActual: number
  hitos: HitoEvento[]
  entradas: TipoEntrada[]
  instagramUrl: string
  fechaEvento?: string
  ubicacion?: string
}
