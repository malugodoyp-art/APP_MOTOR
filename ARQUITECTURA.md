# 📐 ARQUITECTURA - APP_MOTOR

## 1. Estructura del Proyecto

```
APP_MOTOR/
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx          # Navegación inferior (4 secciones)
│   │   ├── BottomNav.css
│   │   ├── SearchBar.jsx          # Componente búsqueda reutilizable
│   │   ├── ProgressBar.jsx        # Barra de progreso
│   │   ├── CatalogCard.jsx        # Card de categoría
│   │   └── PartCard.jsx           # Card de parte del motor
│   │
│   ├── pages/
│   │   ├── Home.jsx               # Página principal - Catálogo
│   │   ├── Home.css
│   │   ├── Parts.jsx              # Página de partes detalladas
│   │   ├── Parts.css
│   │   ├── Strokes.jsx            # Página de ciclo 4 tiempos
│   │   ├── Strokes.css
│   │   ├── Quiz.jsx               # Página de cuestionarios (PENDIENTE)
│   │   └── Quiz.css
│   │
│   ├── data/
│   │   ├── motorParts.js          # 28 partes del motor, 6 categorías
│   │   ├── engineCycle.js         # 4 fases del ciclo del motor
│   │   └── quizzes.js             # 4 sets de preguntas (40+ preguntas)
│   │
│   ├── hooks/
│   │   ├── useSearch.js           # Hook para búsqueda y filtrado
│   │   └── useQuizProgress.js     # Hook para seguimiento de quiz
│   │
│   ├── styles/
│   │   ├── components.css         # Estilos base de componentes
│   │   └── responsive.css         # Utilidades responsive
│   │
│   ├── App.jsx                    # Componente principal con routing
│   ├── App.css                    # Estilos globales y variables CSS
│   ├── index.css                  # Importaciones de estilos
│   └── main.jsx                   # Punto de entrada
│
├── public/
│   └── assets/
│
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
├── README.md
├── ARQUITECTURA.md                # Este archivo
├── DETALLE_TECNICO.md            # Especificaciones técnicas
└── ESTADO_PROYECTO.md            # Estado actual y roadmap
```

## 2. Flujo de Datos

### 2.1 Estructura Jerárquica de Componentes

```
App (router principal)
├── BottomNav (navegación global)
│   └── NavLink items (4 rutas)
│
├── Home (route: /)
│   ├── SearchBar
│   ├── CatalogCard[] (6 categorías)
│   └── Info Section
│
├── Parts (route: /parts)
│   ├── SearchBar
│   ├── FilterPanel
│   ├── PartCard[] (28 partes)
│   └── Stats Section
│
├── Strokes (route: /strokes)
│   ├── CycleVisualization
│   │   ├── Cylinder (pistón, válvulas)
│   │   ├── Crankshaft (cigüeñal)
│   │   └── Spark (chispa)
│   ├── Controls
│   └── PhaseInfo
│
└── Quiz (route: /quiz) - PENDIENTE
    ├── QuizCard[] (4 quizzes)
    └── Stats
```

### 2.2 Flujo de Datos en Home Page

```
motorCategories (motorParts.js)
    ↓
Home.jsx (useState: searchTerm)
    ↓
useMemo → filteredCategories (búsqueda en tiempo real)
    ↓
CatalogCard[] (renderizado con animación)
    ↓
Navegación a /parts
```

### 2.3 Flujo de Datos en Parts Page

```
allMotorParts (motorParts.js)
    ↓
Parts.jsx (useState: searchTerm, selectedCategory)
    ↓
Filtrado combinado (search AND category)
    ↓
PartCard[] (renderizado en grid)
    ↓
Display: nombre, función, especificaciones
```

### 2.4 Flujo de Datos en Strokes Page

```
engineCycle (engineCycle.js)
    ↓
Strokes.jsx (useState: currentPhase, isAutoPlay, cycleProgress)
    ↓
useEffect → Auto-play (cambio de fase cada 4s)
    ↓
Phase Animation (pistón, válvulas, chispa)
    ↓
PhaseInfo (descripción, puntos clave, datos técnicos)
```

## 3. Componentes y Responsabilidades

### 3.1 Componentes Presentacionales

| Componente | Responsabilidad | Props |
|-----------|-----------------|-------|
| **SearchBar** | Input de búsqueda reutilizable | `value`, `onChange`, `onClear` |
| **ProgressBar** | Barra de progreso visual | `percentage`, `color` |
| **CatalogCard** | Card de categoría con icono | `category`, `onClick` |
| **PartCard** | Card de parte con especificaciones | `part`, `categoryName` |

### 3.2 Componentes Contenedor

| Componente | Responsabilidad | Estado |
|-----------|-----------------|--------|
| **Home** | Página principal con búsqueda | `searchTerm` |
| **Parts** | Página de partes con filtros | `searchTerm`, `selectedCategory`, `showFilters` |
| **Strokes** | Ciclo del motor interactivo | `currentPhase`, `isAutoPlay`, `cycleProgress` |
| **BottomNav** | Navegación global | `location.pathname` (React Router) |

### 3.3 Custom Hooks

| Hook | Propósito | Retorna |
|-----|----------|---------|
| **useSearch** | Búsqueda y filtrado | `{searchTerm, filteredData, clearSearch}` |
| **useQuizProgress** | Seguimiento de quiz | `{progress, answers, score}` |

## 4. Capa de Datos

### 4.1 motorParts.js
```
Estructura:
├── motorCategories[] (6)
│   ├── id, name, icon, description
│   └── Categorías: Cigüeñal, Pistón, Válvulas, Cámara, Anillos, Biela
│
└── allMotorParts[] (28)
    ├── id, categoryId, name, category, function
    └── specifications: {...}
```

**Funciones Helper:**
- `searchMotorParts(term)` - Busca por nombre, función, especificaciones
- `getPartsByCategory(categoryId)` - Filtra partes por categoría
- `getPartById(id)` - Obtiene una parte específica

### 4.2 engineCycle.js
```
Estructura:
└── engineCycle[] (4 fases)
    ├── Phase 1: Admisión (Intake)
    ├── Phase 2: Compresión (Compression)
    ├── Phase 3: Combustión (Combustion)
    └── Phase 4: Escape (Exhaust)
    
Por cada fase:
├── number, name, description, detailedDescription
├── keyPoints[] - Puntos clave educativos
├── affectedParts[] - Partes involucradas
├── temperature, pressure - Datos técnicos
├── color - Color para visualización
└── icon - Icono representativo
```

**Funciones Helper:**
- `getPhaseByNumber(n)` - Obtiene fase por número
- `getNextPhase()` - Calcula siguiente fase
- `getPreviousPhase()` - Calcula fase anterior
- `getPhaseProgress()` - Calcula progreso (25%, 50%, 75%, 100%)

### 4.3 quizzes.js
```
Estructura:
└── quizzes[] (4 sets)
    ├── Pruebas Generales (General) - Medium
    ├── Pruebas de Partes (Parts) - Easy
    ├── Simulación (Simulation) - Advanced
    └── Diagnóstico (Diagnostic) - Expert
    
Por cada quiz:
├── id, title, description, difficulty
├── questions[]
│   ├── id, question, options[], correctAnswer
│   └── explanation
└── passingScore
```

**Funciones Helper:**
- `calculateScore(answers, questions)` - Calcula puntuación
- `getQuizById(id)` - Obtiene quiz específico
- `getAvailableQuizzes()` - Lista todos disponibles

## 5. Sistema de Estilos

### 5.1 Jerarquía de CSS

```
index.css (punto de entrada)
├── App.css (variables globales + animaciones)
├── components.css (SearchBar, ProgressBar, Cards)
├── responsive.css (utilidades responsive)
├── BottomNav.css (navegación)
├── Home.css (página principal)
├── Parts.css (página de partes)
├── Strokes.css (página de ciclo)
└── Quiz.css (página de quiz - PENDIENTE)
```

### 5.2 Variables CSS Globales (App.css)

```css
--primary-color: #0066CC
--primary-light: #0088FF
--primary-dark: #004499
--background-dark: #050A15
--background-darker: #0A1428
--background-darkest: #001a4d
--text-light: #C5D3E8
--text-muted: #8A9AB8
--border-color: #1a2d4d
--shadow-md: 0 4px 15px rgba(0, 0, 0, 0.3)
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--spacing-lg: 32px
--spacing-md: 24px
--spacing-sm: 16px
```

### 5.3 Breakpoints Responsive

```css
Escritorio:      1024px+
Tablet:          768px - 1023px
Móvil Grande:    640px - 767px
Móvil Mediano:   480px - 639px
Móvil Pequeño:   360px - 479px
```

## 6. Flujo de Routing

```
React Router Setup en App.jsx:

/                → Home (Catálogo de categorías)
/parts           → Parts (Todas las partes)
/strokes         → Strokes (Ciclo 4 tiempos)
/quiz            → Quiz (Cuestionarios)

Navegación:
BottomNav.jsx actualiza activa basada en pathname actual
Active state aplicado según React Router isActive param
Transiciones suaves entre páginas
```

## 7. Pipeline de Renderizado

```
1. Carga de Datos
   motorParts.js → motorCategories + allMotorParts
   engineCycle.js → 4 fases
   quizzes.js → 4 sets de preguntas

2. Inicialización de Estado
   Home: useState(searchTerm)
   Parts: useState(searchTerm, selectedCategory)
   Strokes: useState(currentPhase, isAutoPlay, cycleProgress)

3. Procesamiento de Datos
   useMemo para búsqueda y filtrado
   useEffect para auto-play

4. Renderización
   Componentes presentacionales reciben props
   CSS aplica estilos + animaciones
   Media queries ajustan para responsive

5. Interacción
   Usuario inputs (búsqueda, clicks, botones)
   State actualiza
   Re-renderizado y transiciones
```

## 8. Patrones de Diseño

### 8.1 Componentes Reutilizables
- **SearchBar** - Usado en Home y Parts
- **ProgressBar** - Usado en Strokes
- **Card Components** - CatalogCard, PartCard

### 8.2 Custom Hooks
- **useSearch** - Lógica de búsqueda centralizada
- **useQuizProgress** - Gestión de estado de quiz

### 8.3 Data-Driven Architecture
- Datos separados de componentes (motorParts.js, engineCycle.js, quizzes.js)
- Funciones helper para acceso consistente
- Fácil mantenimiento y actualización

### 8.4 Mobile-First Responsive
- CSS base para móvil
- Media queries progresivas para pantallas mayores
- Utilidades responsivas reutilizables

## 9. Convenciones de Codificación

### 9.1 Nomenclatura
- **Componentes**: PascalCase (Home.jsx, SearchBar.jsx)
- **Archivos de datos**: lowercase (motorParts.js, engineCycle.js)
- **Hooks**: camelCase con prefijo 'use' (useSearch, useQuizProgress)
- **Clases CSS**: kebab-case (.phase-indicator, .control-button)
- **Variables CSS**: kebab-case (--primary-color, --spacing-lg)

### 9.2 Estructura de Archivos
- Componentes con sus CSS en el mismo directorio
- Datos centralizados en carpeta /data
- Hooks reutilizables en carpeta /hooks
- Estilos globales en /styles

### 9.3 Importaciones
```javascript
// React y librerías externas
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// Componentes
import SearchBar from '../components/SearchBar';

// Datos
import { motorCategories, allMotorParts } from '../data/motorParts';

// Hooks
import { useSearch } from '../hooks/useSearch';

// Estilos
import './Home.css';
```

## 10. Diagrama de Componentes

```
                        App.jsx (Router)
                            |
                ____________|____________
               |            |            |
            Home          Parts       Strokes
            |              |            |
        SearchBar      SearchBar+    CycleViz
            |          FilterPanel      |
        CatalogCard[]   PartCard[]   Controls
```

---

**Documento Actualizado:** Junio 2, 2026
**Estado:** Fases 1-3 Completadas | Fase 4 Pendiente
**Responsable:** APP_MOTOR Development Team
