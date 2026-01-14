/**
 * Funciones utilitarias para Umbra
 * Formateadores y cálculos reutilizables
 */

/**
 * Función para formatear montos en pesos argentinos
 */
export function formatearPesos(monto: number): string {
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
export function calcularPorcentaje(actual: number, objetivo: number): number {
  return Math.min((actual / objetivo) * 100, 100)
}
