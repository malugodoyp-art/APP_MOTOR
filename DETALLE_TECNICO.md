# 🔧 DETALLE TÉCNICO - APP_MOTOR

## 1. Stack Tecnológico

### 1.1 Dependencias Principales

```json
{
  "dependencies": {
    "react": "19.2.5",              // Framework UI
    "react-dom": "19.2.5",          // Rendering en DOM
    "react-router-dom": "7.14.2",   // Routing SPA
    "lucide-react": "latest"        // Icon library
  },
  "devDependencies": {
    "vite": "8.0.10",               // Build tool
    "@vitejs/plugin-react": "^4.0", // React plugin
    "eslint": "latest",             // Code linter
    "@eslint/js": "latest"          // ESLint config
  }
}
```

### 1.2 Versiones

| Paquete | Versión | Propósito |
|---------|---------|----------|
| React | 19.2.5 | Framework UI moderno con Hooks |
| React Router DOM | 7.14.2 | Routing client-side con 4 rutas |
| Vite | 8.0.10 | Build tool ultrarrápido |
| Lucide React | Latest | 50+ iconos SVG |
| ESLint | Latest | Code quality |

## 2. Configuración Vite

### 2.1 vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,           // Puerto por defecto (5174 si ocupado)
    strictPort: false,    // Permitir cambio de puerto
    open: true           // Abre navegador automáticamente
  },
  build: {
    outDir: 'dist',      // Directorio de salida
    sourcemap: false     // Sin sourcemaps en producción
  }
})
```

### 2.2 ESLint Configuration

```javascript
// eslint.config.js
import js from '@eslint/js'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { React: 'readonly' },
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    rules: { ...js.configs.recommended.rules }
  }
]
```

## 3. Especificaciones por Página

### 3.1 HOME PAGE

**Archivo:** `src/pages/Home.jsx`

**Props & Estado:**
```javascript
const [searchTerm, setSearchTerm] = useState('');

// useMemo para optimización
const filteredCategories = useMemo(() => {
  return motorCategories.filter(cat => {
    const matchName = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDesc = cat.description.toLowerCase().includes(searchTerm);
    const matchParts = cat.parts.some(p => 
      p.toLowerCase().includes(searchTerm)
    );
    return matchName || matchDesc || matchParts;
  });
}, [searchTerm]);
```

**Renderizado:**
- Grid de 6 categorías (2 cols desktop, 1 col móvil)
- SearchBar con input en tiempo real
- Info section con 3 cards de estadísticas
- CatalogCard[] con map y delay de animación

**CSS Classes:**
```css
.home-container          /* Contenedor principal */
.header                  /* Sección de header */
.title                   /* Título principal */
.categories-grid         /* Grid de categorías */
.info-section           /* Sección de información */
.info-card              /* Card individual de info */
```

**Especificaciones Visuales:**
- Fondo: Gradient #050A15 → #0A1428 → #001a4d
- Título: Gradient text con -webkit-background-clip
- Cards: Hover transform translateY(-6px)
- Animaciones: fadeIn, slideInLeft con delays escalonados

**Interactividad:**
- Click en CatalogCard → navigate('/parts')
- SearchBar con onChange → filtrado en tiempo real
- Botón "Limpiar" → clearSearch()

---

### 3.2 PARTS PAGE

**Archivo:** `src/pages/Parts.jsx`

**Props & Estado:**
```javascript
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('all');
const [showFilters, setShowFilters] = useState(true);

// Filtrado doble
const filteredParts = useMemo(() => {
  return allMotorParts.filter(part => {
    const matchSearch = searchTerm === '' || 
      part.name.toLowerCase().includes(searchTerm) ||
      part.function.toLowerCase().includes(searchTerm) ||
      Object.values(part.specifications).some(spec =>
        String(spec).toLowerCase().includes(searchTerm)
      );
    
    const matchCategory = selectedCategory === 'all' || 
      part.categoryId === parseInt(selectedCategory);
    
    return matchSearch && matchCategory;
  });
}, [searchTerm, selectedCategory]);
```

**Renderizado:**
- Header con badge "CATÁLOGO"
- SearchBar + FilterPanel
- Grid de PartCard[] (auto-fill minmax layout)
- Stats section con información agregada
- Empty state inteligente

**CSS Classes:**
```css
.parts-container        /* Contenedor principal */
.filter-panel          /* Panel de filtros */
.filter-button         /* Botón de categoría */
.parts-grid            /* Grid responsivo */
.part-card             /* Card de parte */
.stats-section         /* Sección de estadísticas */
```

**Especificaciones Visuales:**
- FilterPanel: backdrop-filter blur(20px), gradient background
- Grid: repeat(auto-fill, minmax(220px, 1fr))
- PartCard: Border gradiente, hover effects
- Stats: Números con gradientes, iconos de Lucide

**Interactividad:**
- SearchBar → filtrado por nombre, función, especificaciones
- Dropdown de categorías → filtrado por categoryId
- Toggle "Mostrar Filtros" → mostrar/ocultar panel
- Display de partes encontradas vs total

---

### 3.3 STROKES PAGE (4 TIEMPOS)

**Archivo:** `src/pages/Strokes.jsx` (~250 líneas)

**Props & Estado:**
```javascript
const [currentPhase, setCurrentPhase] = useState(0);  // 0-3
const [isAutoPlay, setIsAutoPlay] = useState(false);
const [cycleProgress, setCycleProgress] = useState(0); // 0-100

// Auto-play effect
useEffect(() => {
  if (!isAutoPlay) return;
  
  const interval = setInterval(() => {
    setCurrentPhase(prev => (prev + 1) % 4);
  }, 4000);
  
  return () => clearInterval(interval);
}, [isAutoPlay]);

// Actualizar progreso
useEffect(() => {
  setCycleProgress((currentPhase + 1) * 25);
}, [currentPhase]);
```

**Componentes Visuales:**

1. **Cylinder Visualization**
   - Contenedor 200px × 320px
   - Paredes con gradiente
   - Piston (animado)
   - Valves (intake/exhaust)
   - Spark (fase 3)
   - Crankshaft (rotativo)

2. **Phase Information**
   - Phase indicator (4 círculos)
   - Progress bar (25%, 50%, 75%, 100%)
   - Phase name + description
   - Key points list
   - Affected parts list
   - Technical data (temp, pressure)

3. **Controls**
   - Anterior (prev phase)
   - Reproducir (auto-play toggle)
   - Reiniciar (reset)
   - Siguiente (next phase)

4. **Educational Info**
   - 4 cards con emojis
   - Explicaciones del ciclo

**Animaciones CSS:**

```css
@keyframes piston-down {
  from { top: 0px; }
  to { top: 200px; }
}

@keyframes valve-open {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes spark {
  0% { transform: scale(0.5); opacity: 0; }
  50% { opacity: 1; transform: scale(1); }
  100% { transform: scale(0.5); opacity: 0; }
}

@keyframes crankRotate {
  from { transform: rotateZ(0deg); }
  to { transform: rotateZ(360deg); }
}
```

**Renderizado Condicional:**

```javascript
// Piston position
className={`piston ${
  currentPhase === 0 ? 'piston-up' :
  currentPhase === 1 ? 'piston-down' :
  'piston-middle'
}`}

// Spark only in combustion
{engineCycle[currentPhase].number === 3 && <div className="spark" />}

// Valve colors
intakeValve: currentPhase === 0 ? 'open' : 'closed'
exhaustValve: currentPhase === 3 ? 'open' : 'closed'
```

**Especificaciones Técnicas:**

| Fase | Nombre | Temp | Presión | Color | Duración |
|------|--------|------|---------|-------|----------|
| 1 | Admisión | 40°C | 0.5 bar | Verde | 180° |
| 2 | Compresión | 400-500°C | 10-15 bar | Naranja | 180° |
| 3 | Combustión | 2000-2500°C | 50-60 bar | Rojo | 10° |
| 4 | Escape | ~1000°C | Baja | Gris | 170° |

**Interactividad:**
- Anterior/Siguiente → cambiar fase (desactiva auto-play)
- Reproducir → toggle auto-play (cambio cada 4s)
- Reiniciar → volver a fase 1, detener auto-play
- Click en indicadores → saltar a fase directa

---

### 3.4 QUIZ PAGE (PENDIENTE - FASE 4)

**Especificaciones Previstas:**

```javascript
// Props & Estado esperado
const [selectedQuiz, setSelectedQuiz] = useState(null);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState([]);
const [showResults, setShowResults] = useState(false);

// Renderizado esperado
4 Quiz Cards:
- Pruebas Generales (Medium)
- Pruebas de Partes (Easy)
- Simulación (Advanced)
- Diagnóstico (Expert)

Cada card mostrará:
- Título del quiz
- Descripción
- Nivel de dificultad
- Botón "Iniciar Test"
- Icono representativo
```

## 4. Sistema de Animaciones

### 4.1 Keyframes Globales (App.css)

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### 4.2 Aplicación de Animaciones

| Elemento | Animación | Duración | Delay |
|----------|-----------|----------|-------|
| CatalogCard | slideInUp | 0.6s | calc(var(--index) * 100ms) |
| PartCard | fadeIn | 0.4s | calc(var(--index) * 50ms) |
| BottomNav Active | scaleIn | 0.3s | - |
| Piston | slideInUp/Down | 0.8s | - |
| Spark | pulse | 0.6s | - |
| Phase Indicator | scaleIn | 0.3s | - |

## 5. Sistema de Colores

### 5.1 Paleta de Colores

```css
/* Colores Principales */
--primary-color: #AEC6CF;          /* Azul pastel */
--primary-light: #CDE0E7;          /* Azul pastel claro */
--primary-dark: #8EAEBD;           /* Azul pastel oscuro */

/* Fondos */
--background-dark: #FDFDFD;        /* Blanco/Gris muy claro pastel */
--background-darker: #F4F7FB;      /* Gris azulado pastel */
--background-darkest: #EBF0F5;     /* Gris pastel suave */

/* Texto */
--text-light: #2D3748;             /* Texto principal oscuro para fondo claro */
--text-muted: #718096;             /* Texto secundario medio */

/* Bordes y Sombras */
--border-color: #E2E8F0;
--shadow-md: 0 4px 15px rgba(0, 0, 0, 0.05);

/* Colores de Fases */
--phase-intake: #B7E4C7;           /* Verde pastel */
--phase-compression: #FFDFBA;      /* Naranja pastel */
--phase-combustion: #FFB3BA;       /* Rojo pastel */
--phase-exhaust: #E2E8F0;          /* Gris pastel */
```

### 5.2 Colores por Sección de Navegación

| Sección | Color | Hex |
|---------|-------|-----|
| Inicio | Rojo | #FF4444 |
| Partes | Verde/Teal | #00AA88 |
| 4 Tiempos | Amarillo | #FFAA00 |
| Quiz | Turquesa | #00AAFF |

## 6. Responsive Design

### 6.1 Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) {
  Grid: 2 columnas (Home), auto-fill (Parts)
  Font: Máximo (40px, 16px)
  Padding: 32px
}

/* Tablet */
@media (max-width: 768px) and (min-width: 769px) {
  Grid: 2 columnas (Home), repeat(auto-fill, minmax(180px, 1fr))
  Font: 36px h1, 14px base
  Padding: 24px
}

/* Mobile Grande */
@media (max-width: 640px) {
  Grid: 1 columna (Home), repeat(2, 1fr) (Parts)
  Font: 32px h1, 13px base
  Padding: 20px
}

/* Mobile Mediano */
@media (max-width: 480px) {
  Grid: 1 columna
  Font: 28px h1, 12px base
  Padding: 16px
  BottomNav: 65px height
}

/* Mobile Pequeño */
@media (max-width: 360px) {
  Grid: 1 columna
  Font: 24px h1, 11px base
  Padding: 12px
  Icons: 18px
}
```

### 6.2 Estrategia Mobile-First

1. **Base**: Estilos para móvil pequeño (360px)
2. **Progresión**: Media queries añaden estilos para pantallas mayores
3. **Componentes**: Cada componente tiene sus propias media queries
4. **Utilidades**: responsive.css con clases helper

## 7. Estructura de Datos

### 7.1 motorParts.js

```javascript
// Estructura de motorCategories
{
  id: 1,
  name: "Cigüeñal y Biela",
  icon: "RotateCcw",
  description: "Sistema de transmisión de movimiento...",
  parts: ["Cigüeñal", "Biela", "...]
}

// Estructura de allMotorParts
{
  id: 1,
  categoryId: 1,
  name: "Cigüeñal",
  category: "Cigüeñal y Biela",
  function: "Convierte movimiento lineal del pistón en rotacional",
  specifications: {
    material: "Acero forjado",
    length: "250mm",
    weight: "2.5kg",
    rotationSpeed: "5000-7000 RPM"
  }
}
```

### 7.2 engineCycle.js

```javascript
// Estructura de engineCycle
{
  number: 1,
  name: "Admisión",
  description: "El pistón baja, abriendo válvula de admisión",
  detailedDescription: "Durante la fase de admisión...",
  keyPoints: [
    "Válvula de admisión: ABIERTA",
    "Válvula de escape: CERRADA",
    "Movimiento del pistón: HACIA ABAJO",
    "Presión: BAJA (< 0.5 bar)"
  ],
  affectedParts: ["Pistón", "Biela", "Cigüeñal", "Válvula de admisión"],
  temperature: 40,
  pressure: 0.5,
  color: "#00AA00",
  icon: "ArrowDown"
}
```

### 7.3 quizzes.js

```javascript
// Estructura de quizzes
{
  id: 1,
  title: "Pruebas Generales",
  description: "Conocimiento general del motor de 4 tiempos",
  difficulty: "medium",
  icon: "BookOpen",
  passingScore: 70,
  questions: [
    {
      id: 1,
      question: "¿Cuántos tiempos tiene este motor?",
      options: ["2", "4", "6", "8"],
      correctAnswer: 1,
      explanation: "El motor de 4 tiempos tiene..."
    }
  ]
}
```

## 8. Performance

### 8.1 Optimizaciones Implementadas

1. **useMemo**: Búsqueda y filtrado solo recalculan cuando necesario
2. **React.lazy**: Carga perezosa de componentes (Fase 5)
3. **CSS Classes**: Animaciones CSS puras (no JavaScript)
4. **Vite**: Bundling y minificación automática

### 8.2 Métricas Esperadas

| Métrica | Valor |
|---------|-------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 2s |
| Lighthouse Score | > 85 |
| Bundle Size | < 150KB (gzipped) |

## 9. Comandos Principales

### 9.1 Desarrollo

```bash
npm install              # Instalar dependencias
npm run dev             # Iniciar servidor Vite (puerto 5173 o 5174)
npm run build           # Build para producción
npm run preview         # Preview de producción local
npm run lint            # Ejecutar ESLint
```

### 9.2 Estructura del Comando npm run dev

```
Vite compila con:
- HMR (Hot Module Replacement)
- Source maps para debugging
- Servidor en http://localhost:5173 (o siguiente puerto libre)
- Watch mode automático
```

## 10. Convenciones y Estándares

### 10.1 Imports

```javascript
// Orden de importaciones:
// 1. React y librerías externas
// 2. Componentes
// 3. Datos
// 4. Hooks
// 5. Estilos

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { motorCategories } from '../data/motorParts';
import { useSearch } from '../hooks/useSearch';
import './Home.css';
```

### 10.2 Componentes Funcionales

```javascript
// Estructura estándar
export default function ComponentName() {
  // 1. State hooks
  const [state, setState] = useState(initial);
  
  // 2. Computed values
  const computed = useMemo(() => {}, [deps]);
  
  // 3. Effects
  useEffect(() => {}, [deps]);
  
  // 4. Event handlers
  const handleEvent = () => {};
  
  // 5. Render
  return <div>...</div>;
}
```

### 10.3 Naming Conventions

```
Componentes: Home, Parts, BottomNav (PascalCase)
Archivos: Home.jsx, motorParts.js (camelCase o lowercase)
CSS Classes: .primary-button, .phase-indicator (kebab-case)
Variables CSS: --primary-color, --spacing-lg (kebab-case)
Functions: searchParts(), calculateScore() (camelCase)
Constants: PHASE_COLORS, DEFAULT_DELAY (UPPER_SNAKE_CASE)
```

---

**Documento Actualizado:** Junio 2, 2026
**Stack:** React 19.2.5 + Vite 8.0.10 + React Router 7.14.2
**Responsable:** APP_MOTOR Development Team
