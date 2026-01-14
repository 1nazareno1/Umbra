# Umbra II - Landing Page de Crowdfunding

Landing page premium para el evento nocturno exclusivo **Umbra II**. Sistema de crowdfunding transparente con visualización de progreso en tiempo real.

## 🎯 Características

- **Diseño Premium Nocturno**: Estética minimalista con paleta negro profundo + violeta brillante
- **Barra de Progreso Animada**: Visualización en tiempo real del progreso de recaudación
- **Hitos Desbloqueables**: Sistema de metas con feedback visual
- **Sistema de Entradas**: 3 tipos (Fundador, VIP, General) con stock dinámico
- **Mockups de Carnets**: Visualización realista de carnets físicos
- **100% Configurable**: Sin valores hardcodeados, todo centralizado en `umbra.config.ts`
- **Responsive**: Optimizado para mobile, tablet y desktop

## 📁 Estructura del Proyecto

\`\`\`
umbra-ii/
├── app/
│   ├── layout.tsx          # Layout principal con metadata
│   ├── page.tsx            # Página principal que orquesta todos los componentes
│   └── globals.css         # Estilos globales y tema personalizado
├── components/
│   ├── hero-umbra.tsx      # Sección hero con título y CTA
│   ├── barra-progreso.tsx  # Barra de progreso con hitos visuales
│   ├── seccion-hitos.tsx   # Cards de hitos desbloqueables
│   ├── tarjeta-entrada.tsx # Componente reutilizable para entradas
│   ├── mockup-carnet.tsx   # Visualización de carnets físicos
│   └── footer-umbra.tsx    # Footer con legal y redes sociales
├── config/
│   └── umbra.config.ts     # Configuración centralizada del evento
└── README.md
\`\`\`

## 🎨 Componentes Principales

### 1. HeroUmbra
Sección principal con título dramático, subtítulo informativo y call-to-action.

**Props:**
- `nombre`: Nombre del evento
- `edicion`: Número de edición
- `capacidad`: Capacidad máxima de personas
- `onVerEntradas`: Callback para scroll a entradas

### 2. BarraProgreso
Barra de progreso horizontal con marcadores de hitos.

**Props:**
- `montoActual`: Monto recaudado actual
- `montoObjetivo`: Monto objetivo total
- `hitos`: Array de hitos con monto y título

### 3. SeccionHitos
Grid de cards mostrando hitos con estado (bloqueado/desbloqueado).

**Props:**
- `hitos`: Array de objetos HitoEvento
- `montoActual`: Monto actual para calcular estado

### 4. TarjetaEntrada
Card reutilizable para cada tipo de entrada con stock, beneficios y botón de compra.

**Props:**
- `entrada`: Objeto TipoEntrada con toda la información

### 5. MockupCarnet
Visualización realista 3D de carnets físicos.

**Props:**
- `entrada`: Objeto TipoEntrada para renderizar el diseño

### 6. FooterUmbra
Footer con información legal, redes sociales y política de devolución.

**Props:**
- `instagramUrl`: URL del Instagram oficial

## ⚙️ Configuración

Toda la configuración está centralizada en `config/umbra.config.ts`:

\`\`\`typescript
export const CONFIGURACION_UMBRA: ConfiguracionEvento = {
  nombre: "UMBRA",
  edicion: 2,
  capacidadMaxima: 500,
  objetivoRecaudacion: 4000000,
  hitoConfirmacion: 3000000,
  montoActual: 2750000, // Actualizar desde API
  hitos: [...],
  entradas: [...],
  instagramUrl: "...",
}
\`\`\`

### Para crear Umbra III:

1. Actualizar `edicion: 3`
2. Ajustar `montoActual` desde tu backend/API
3. Modificar `hitos` y `entradas` según necesidad
4. Actualizar URLs de compra externa

## 🚀 Próximos Pasos (Producción)

### 1. Integrar Backend
Reemplazar `montoActual` estático con llamada a API:

\`\`\`typescript
// En page.tsx
const [montoActual, setMontoActual] = useState(0);

useEffect(() => {
  fetch('/api/progreso-recaudacion')
    .then(res => res.json())
    .then(data => setMontoActual(data.monto));
}, []);
\`\`\`

### 2. Actualización en Tiempo Real
Implementar WebSocket o polling para actualizar el progreso:

\`\`\`typescript
import useSWR from 'swr';

const { data } = useSWR('/api/progreso', fetcher, {
  refreshInterval: 5000 // Actualiza cada 5 segundos
});
\`\`\`

### 3. Gestión de Stock
Sincronizar stock con base de datos y plataforma de pagos.

### 4. Analytics
Trackear eventos importantes:
- Clicks en "Comprar entrada"
- Scroll a sección de entradas
- Tiempo en página

## 🎨 Paleta de Colores

- **Background**: `oklch(0.08 0 0)` - Negro profundo
- **Primary**: `oklch(0.60 0.25 285)` - Violeta brillante
- **Foreground**: `oklch(0.98 0 0)` - Blanco puro
- **Muted**: `oklch(0.60 0 0)` - Gris medio
- **Border**: `oklch(0.20 0 0)` - Gris oscuro

## 🔧 Funciones Utilitarias

### formatearPesos(monto: number)
Formatea números como moneda argentina (ARS).

### calcularPorcentaje(actual: number, objetivo: number)
Calcula porcentaje de progreso (máximo 100%).

## 📱 Responsive

- **Mobile**: Stack vertical, texto optimizado
- **Tablet**: Grid 2 columnas para entradas
- **Desktop**: Grid 3 columnas, experiencia completa

## 🔒 Seguridad

- URLs externas abiertas con `noopener,noreferrer`
- No se procesan pagos en el frontend
- Toda lógica de pagos delegada a plataforma externa

## 📄 Licencia

Código desarrollado para Umbra. Todos los derechos reservados.
