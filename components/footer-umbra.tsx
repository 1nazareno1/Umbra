"use client"

/**
 * Componente Footer
 * Información legal, redes sociales y políticas de devolución
 */

import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterUmbraProps {
  instagramUrl: string
}

export function FooterUmbra({ instagramUrl }: FooterUmbraProps) {
  return (
    <footer className="border-t border-border bg-card/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Columna 1: Branding */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">UMBRA II</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Una experiencia nocturna exclusiva e irrepetible en el interior de Buenos Aires.
            </p>
          </div>

          {/* Columna 2: Legal */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Información Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Evento para mayores de 18 años</li>
              <li>Documento requerido en el ingreso</li>
              <li>Transferencias no permitidas</li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Seguinos</h4>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
              onClick={() => window.open(instagramUrl, "_blank", "noopener,noreferrer")}
            >
              <Instagram className="w-4 h-4" />
              @umbra.oficial
            </Button>
          </div>
        </div>

        {/* Política de devolución destacada */}
        <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 mb-8">
          <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Garantía de devolución</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Si no se alcanza el objetivo mínimo de $3.000.000, el evento no se realizará y se devolverá el 100% del
            dinero a todos los compradores. Sin excepciones.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Umbra. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Diseñado y desarrollado con tecnología moderna para una experiencia premium.
          </p>
        </div>
      </div>
    </footer>
  )
}
