/**
 * Configuración centralizada de Umbra
 * Este archivo contiene todos los valores configurables para escalabilidad
 * Permite crear fácilmente Umbra III, IV, etc.
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

/**
 * Configuración de Umbra II
 * Todos los valores son configurables y no están hardcodeados en los componentes
 */
export const CONFIGURACION_UMBRA: ConfiguracionEvento = {
  nombre: "UMBRA",
  edicion: 2,
  capacidadMaxima: 500,
  objetivoRecaudacion: 4000000,
  hitoConfirmacion: 3000000,
  montoActual: 2750000,

  hitos: [
    {
      monto: 3000000,
      titulo: "Evento confirmado",
      descripcion: "El evento se realizará. Todas las entradas quedan garantizadas.",
    },
    {
      monto: 3500000,
      titulo: "Mejoras de experiencia",
      descripcion: "Artistas adicionales, instalaciones visuales y mejoras en el espacio.",
    },
    {
      monto: 4000000,
      titulo: "Experiencia Umbra completa",
      descripcion: "Evento con todas las experiencias planificadas. Setup completo profesional.",
    },
  ],

  entradas: [
    {
      id: "fundador",
      nombre: "Carnet Fundador",
      precio: 25000,
      descripcion: "Acceso VIP máximo con beneficios exclusivos",
      beneficios: [
        "Carnet físico personalizado y numerado",
        "Acceso prioritario al evento",
        "Zona VIP exclusiva",
        "Bebida de bienvenida premium",
        "Acceso anticipado (30 min antes)",
        "Merchandise exclusivo Umbra",
      ],
      cantidadDisponible: 18,
      cantidadTotal: 50,
      urlCompra: "https://tu-plataforma-externa.com/umbra/fundador",
      esVIP: true,
      esFundador: true,
    },
    {
      id: "vip",
      nombre: "Entrada VIP",
      precio: 15000,
      descripcion: "Experiencia premium con acceso a zona exclusiva",
      beneficios: ["Acceso a zona VIP", "Bebida de bienvenida", "Acceso prioritario", "Guardarropas sin cargo"],
      cantidadDisponible: 82,
      cantidadTotal: 150,
      urlCompra: "https://tu-plataforma-externa.com/umbra/vip",
      esVIP: true,
      esFundador: false,
    },
    {
      id: "general",
      nombre: "Entrada General",
      precio: 8000,
      descripcion: "Acceso completo al evento principal",
      beneficios: ["Acceso al evento principal", "Acceso a todas las instalaciones", "Experiencia Umbra completa"],
      cantidadDisponible: 243,
      cantidadTotal: 300,
      urlCompra: "https://tu-plataforma-externa.com/umbra/general",
      esVIP: false,
      esFundador: false,
    },
  ],

  instagramUrl: "https://instagram.com/umbra.oficial",
  fechaEvento: "15 de Marzo, 2026",
  ubicacion: "Interior de Buenos Aires",
}

/**
 * Función para formatear montos en pesos argentinos
 */
export const formatearPesos = (monto: number): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(monto)
}

/**
 * Función para calcular el porcentaje de progreso
 */
export const calcularPorcentaje = (actual: number, objetivo: number): number => {
  return Math.min((actual / objetivo) * 100, 100)
}
