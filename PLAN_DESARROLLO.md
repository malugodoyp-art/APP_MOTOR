# Plan de Desarrollo - Motor Parts Catalogue

## 📋 Descripción General

Aplicación educativa interactiva sobre el funcionamiento de motores de 4 tiempos. La aplicación proporciona un catálogo de partes del motor, visualizaciones interactivas, pruebas prácticas y cuestionarios para estudiantes de mecánica.

**Stack Tecnológico:**
- React 19.2.5
- React Router DOM 7.14.2
- Vite 8.0.10
- Lucide React (iconografía)
- CSS3 (estilos personalizados)

---

## 🎯 Interfaces a Desarrollar

### 1. **Home Page - Catálogo de Partes del Motor**
**Ruta:** `/`

#### Componentes Necesarios:
- `Home` (página principal)
- `CatalogCard` (tarjeta individual de categoría)
- Barra de búsqueda

#### Funcionalidades:
- Grid de 6 categorías de partes (2 columnas responsive)
- Búsqueda en tiempo real de partes
- Navegación a vista detallada de cada categoría
- Categorías: Pistón, Biela, Cigüeñal, Bloque de Cilindros, Culata, Árbol de Levas

#### Datos Necesarios:
```javascript
const motorParts = [
  { id: 1, name: "Pistón", image: "...", description: "..." },
  { id: 2, name: "Biela", image: "...", description: "..." },
  { id: 3, name: "Cigüeñal", image: "...", description: "..." },
  { id: 4, name: "Bloque de Cilindros", image: "...", description: "..." },
  { id: 5, name: "Culata", image: "...", description: "..." },
  { id: 6, name: "Árbol de Levas", image: "...", description: "..." }
];
```

#### Estados (State):
- `searchTerm` - término de búsqueda actual
- `filteredParts` - partes filtradas por búsqueda

---

### 2. **Parts Detail Page - Catálogo de Partes**
**Ruta:** `/parts`

#### Componentes Necesarios:
- `Parts` (contenedor principal)
- `PartCard` (tarjeta de parte individual)
- `SearchBar` (barra de búsqueda reutilizable)
- Modal/Drawer para detalles de partes

#### Funcionalidades:
- Vista de grid de todas las partes disponibles (28 piezas interactivas)
- Búsqueda y filtrado de partes
- Información detallada por parte:
  - Nombre
  - Función
  - Dimensiones
  - Material
  - Imágenes 3D o ilustraciones

#### Datos Necesarios:
```javascript
const allParts = [
  {
    id: 1,
    category: "Pistón",
    name: "Pistón Estándar",
    function: "Recibe la fuerza de combustión",
    specifications: { diameter: "80mm", height: "45mm", material: "Aluminio" }
  },
  // ... 27 partes más
];
```

#### Estados (State):
- `selectedPart` - parte seleccionada para ver detalles
- `searchTerm` - término de búsqueda
- `filteredParts` - partes filtradas

---

### 3. **Strokes Page - Panel de Control del Motor de 4 Tiempos**
**Ruta:** `/strokes`

#### Componentes Necesarios:
- `Strokes` (contenedor principal)
- `EngineVisualization` (diagrama interactivo del motor)
- `EngineStroke` (visualización de fase individual)
- `CycleProgress` (indicador de progreso del ciclo)
- `InfoPanel` (panel de información y recursos)
- `QuestionCard` (tarjeta de cuestionario)

#### Funcionalidades:
- Visualización 3D/2D del motor de 4 tiempos
- Ciclo interactivo con 4 fases:
  1. Admisión - Válvula de admisión abierta
  2. Compresión - Ambas válvulas cerradas
  3. Combustión - Ignición de mezcla
  4. Escape - Válvula de escape abierta
- Botón para ver ciclo completo (modal/animación)
- Información sobre recursos institucionales
- Cuestionario integrado sobre el ciclo:
  - Pregunta: "¿Qué tiempo es Admisión?"
  - Botón "Reanuddar Cuestionario"
  - Indicador de progreso (60% completado)

#### Datos Necesarios:
```javascript
const engineCycle = {
  strokes: [
    { 
      id: 1, 
      name: "Admisión", 
      icon: "intake", 
      description: "El pistón baja, la válvula de admisión se abre para la mezcla de aire/combustible.",
      animation: "..." 
    },
    { 
      id: 2, 
      name: "Compresión", 
      icon: "compress", 
      description: "El pistón sube, comprimiendo la mezcla con ambas válvulas cerradas.",
      animation: "..." 
    },
    { 
      id: 3, 
      name: "Combustión", 
      icon: "combustion", 
      description: "La bujía enciende la mezcla comprimida, forzando al pistón a bajar.",
      animation: "..." 
    },
    { 
      id: 4, 
      name: "Escape", 
      icon: "exhaust", 
      description: "El pistón sube, empujando los gases de escape fuera de la cámara.",
      animation: "..." 
    }
  ]
};

const resources = {
  institute: "Alberto Enríquez",
  manuals: ["Manuales Técnicos del Instituto"],
  news: ["Noticias del Proyecto de Grado"]
};

const currentQuiz = {
  progress: 60,
  currentQuestion: "¿Qué tiempo es Admisión?",
  testAvailable: "Test 2/5 disponible"
};
```

#### Estados (State):
- `currentStroke` - fase actual del ciclo (1-4)
- `isAnimating` - si la animación está activa
- `showFullCycle` - mostrar ciclo completo
- `quizProgress` - progreso del cuestionario

---

### 4. **Quiz Page - Pruebas y Cuestionarios**
**Ruta:** `/quiz`

#### Componentes Necesarios:
- `Quiz` (contenedor principal)
- `QuizCard` (tarjeta de test individual)
- `ProgressBar` (barra de progreso total)
- `TestModal` (modal para iniciar tests)

#### Funcionalidades:
- Barra de progreso general (45% completado)
- 4 tipos de pruebas:
  1. **Test General de Conocimientos**
     - 10 preguntas
     - Dificultad: Intermedia
     - Cobertura: Todas las fases
  
  2. **Test de Partes del Motor**
     - 8 preguntas
     - Dificultad: Fácil
     - Identificación de piezas
  
  3. **Prueba Práctica: Ciclo Completo**
     - 8 pasos
     - Dificultad: Avanzada
     - Simulación completa del ciclo
  
  4. **Test Técnico: Fallas y Diagnóstico**
     - 12 preguntas
     - Dificultad: Experto
     - Diagnóstico de problemas comunes

#### Datos Necesarios:
```javascript
const quizzes = [
  {
    id: 1,
    title: "Test General de Conocimientos",
    description: "Test General (Todas las Fases)",
    difficulty: "intermedia",
    questions: 10,
    icon: "engine",
    available: true
  },
  {
    id: 2,
    title: "Test de Partes del Motor",
    description: "Identificación de Piezas del Motor",
    difficulty: "fácil",
    questions: 8,
    icon: "gear",
    available: true
  },
  {
    id: 3,
    title: "Prueba Práctica: Ciclo Completo",
    description: "Simulación de Ciclo Completo",
    difficulty: "avanzada",
    steps: 8,
    icon: "workflow",
    available: true
  },
  {
    id: 4,
    title: "Test Técnico: Fallas y Diagnóstico",
    description: "Diagnóstico de Fallas Comunes",
    difficulty: "experto",
    questions: 12,
    icon: "alert-triangle",
    available: true
  }
];

const userProgress = {
  overallProgress: 45,
  currentQuestion: "¿Qué tiempo es Admisión?",
  testAvailable: "2/5"
};
```

#### Estados (State):
- `selectedQuiz` - test seleccionado
- `userProgress` - progreso del usuario
- `showModal` - mostrar modal de inicio de test

---

### 5. **Strokes Cycles Detail Page - Ciclos del Motor de 4 Tiempos**
**Pantalla/Modal adicional (puede ser `/strokes-cycles` o modal dentro de `/strokes`)**

#### Componentes Necesarios:
- `StrokesCycles` (contenedor)
- `CyclePhase` (tarjeta de fase del ciclo)
- `CycleVisualization` (animación de la fase)

#### Funcionalidades:
- Grid de 4 fases del ciclo motor
- Cada fase contiene:
  - Número de fase (1-4)
  - Nombre localizado
  - Descripción detallada
  - Ilustración animada
  - Botón "Más Información"
- Descripciones en español

#### Datos Necesarios:
```javascript
const cyclePhases = [
  {
    id: 1,
    number: "1",
    name: "Admisión",
    description: "El pistón baja, la válvula de admisión se abre para la mezcla de aire/combustible.",
    image: "..."
  },
  {
    id: 2,
    number: "2",
    name: "Compresión",
    description: "El pistón sube, comprimiendo la mezcla con ambas válvulas cerradas.",
    image: "..."
  },
  {
    id: 3,
    number: "3",
    name: "Combustión",
    description: "La bujía enciende la mezcla comprimida, forzando al pistón a bajar.",
    image: "..."
  },
  {
    id: 4,
    number: "4",
    name: "Escape",
    description: "El pistón sube, empujando los gases de escape fuera de la cámara.",
    image: "..."
  }
];
```

---

## 🏗️ Arquitectura de Componentes

### Estructura de Carpetas
```
src/
├── components/
│   ├── BottomNav.jsx          (✓ Existente)
│   ├── SearchBar.jsx          (NUEVO)
│   ├── CatalogCard.jsx        (NUEVO)
│   ├── PartCard.jsx           (NUEVO)
│   ├── EngineVisualization.jsx (NUEVO)
│   ├── EngineStroke.jsx       (NUEVO)
│   ├── CycleProgress.jsx      (NUEVO)
│   ├── QuizCard.jsx           (NUEVO)
│   ├── ProgressBar.jsx        (NUEVO)
│   └── modals/
│       ├── PartDetailModal.jsx     (NUEVO)
│       ├── CycleDetailModal.jsx    (NUEVO)
│       └── TestStartModal.jsx      (NUEVO)
├── pages/
│   ├── Home.jsx               (✓ Existente - A completar)
│   ├── Parts.jsx              (✓ Existente - A completar)
│   ├── Strokes.jsx            (✓ Existente - A completar)
│   ├── Quiz.jsx               (✓ Existente - A completar)
│   └── StrokesCycles.jsx      (NUEVO - Opcional)
├── data/
│   ├── motorParts.js          (NUEVO)
│   ├── engineCycle.js         (NUEVO)
│   ├── quizzes.js             (NUEVO)
│   └── userProgress.js        (NUEVO)
├── hooks/
│   ├── useSearch.js           (NUEVO)
│   ├── useEngineAnimation.js  (NUEVO)
│   └── useQuizProgress.js     (NUEVO)
├── styles/
│   ├── components.css         (NUEVO)
│   ├── modals.css             (NUEVO)
│   ├── animations.css         (NUEVO)
│   └── responsive.css         (NUEVO)
├── App.jsx                    (✓ Existente)
├── main.jsx                   (✓ Existente)
└── index.css                  (✓ Existente)
```

---

## 📅 Plan de Desarrollo por Fases

### **FASE 1: Infraestructura y Componentes Base (Semana 1)**

#### Tareas:
1. **Crear estructura de datos**
   - [ ] Crear `data/motorParts.js` con todas las 28 partes
   - [ ] Crear `data/engineCycle.js` con fases del motor
   - [ ] Crear `data/quizzes.js` con preguntas de tests

2. **Desarrollar componentes reutilizables**
   - [ ] `SearchBar.jsx` - Barra de búsqueda
   - [ ] `ProgressBar.jsx` - Barra de progreso
   - [ ] `CatalogCard.jsx` - Tarjeta de categoría
   - [ ] `PartCard.jsx` - Tarjeta de parte

3. **Crear hooks custom**
   - [ ] `useSearch.js` - Lógica de búsqueda filtrada
   - [ ] `useQuizProgress.js` - Manejo de progreso

4. **Estilos base**
   - [ ] `styles/components.css` - Estilos de componentes
   - [ ] `styles/responsive.css` - Media queries responsive

---

### **FASE 2: Página Home (Semana 1-2)**

#### Tareas:
1. **Completar `Home.jsx`**
   - [ ] Implementar grid de 6 categorías
   - [ ] Integrar barra de búsqueda
   - [ ] Filtrado en tiempo real
   - [ ] Links de navegación a `/parts`

2. **Crear estilos**
   - [ ] Grid responsive (2 columnas)
   - [ ] Tarjetas con hover effects
   - [ ] Animaciones suaves

3. **Testing**
   - [ ] Verificar búsqueda funciona
   - [ ] Verificar navegación
   - [ ] Testing responsive en móvil/tablet/desktop

---

### **FASE 3: Página Parts (Semana 2)**

#### Tareas:
1. **Completar `Parts.jsx`**
   - [ ] Grid de todas las partes (28 elementos)
   - [ ] Búsqueda y filtrado por categoría
   - [ ] Navegación responsiva

2. **Crear `PartDetailModal.jsx`**
   - [ ] Mostrar información detallada de parte
   - [ ] Especificaciones técnicas
   - [ ] Galería de imágenes

3. **Integración**
   - [ ] Click en tarjeta abre modal
   - [ ] Cerrar modal funciona correctamente

---

### **FASE 4: Página Strokes - Motor Cycles (Semana 3)**

#### Tareas:
1. **Completar `Strokes.jsx`**
   - [ ] Crear `EngineVisualization.jsx` - diagrama del motor
   - [ ] Crear `EngineStroke.jsx` - visualización de fase

2. **Ciclo Interactivo**
   - [ ] Implementar navegación entre 4 fases
   - [ ] Botones Next/Previous para fases
   - [ ] Mostrar información de cada fase

3. **Crear `CycleDetailModal.jsx`**
   - [ ] Mostrar ciclo completo
   - [ ] Animación de ciclo
   - [ ] Información sobre recursos

4. **Integración Quiz Parcial**
   - [ ] Mostrar pregunta actual
   - [ ] Botón "Reanuddar Cuestionario"
   - [ ] Barra de progreso (60%)

5. **Estilos y Animaciones**
   - [ ] `styles/animations.css` - Keyframes para ciclo
   - [ ] Transiciones suaves entre fases
   - [ ] Efectos visuales

---

### **FASE 5: Página Quiz (Semana 3-4)**

#### Tareas:
1. **Completar `Quiz.jsx`**
   - [ ] Grid de 4 tests
   - [ ] Barra de progreso general (45%)

2. **Crear componentes**
   - [ ] `QuizCard.jsx` - Tarjeta de test
   - [ ] `TestStartModal.jsx` - Modal para iniciar test

3. **Funcionalidades**
   - [ ] Click en test abre modal
   - [ ] Modal muestra detalles
   - [ ] Botón "Iniciar Test" navega a test
   - [ ] Botón "Iniciar Simulación" para ciclo completo

4. **Integración de rutas**
   - [ ] Crear página para vista de test (ejemplo: `/quiz/general`)
   - [ ] Crear página para simulación (ejemplo: `/quiz/simulation`)

---

### **FASE 6: Página Strokes Cycles (Semana 4)**

#### Tareas:
1. **Crear `StrokesCycles.jsx` (Opcional/Modal)**
   - [ ] Grid de 4 fases
   - [ ] Información detallada de cada fase
   - [ ] Botones "Más Info"

2. **Integración**
   - [ ] Accesible desde Strokes page
   - [ ] Botón "Ver Ciclo Completo"

---

### **FASE 7: Pulido y Optimizaciones (Semana 4)**

#### Tareas:
1. **Testing Completo**
   - [ ] Tests unitarios para componentes
   - [ ] Tests de integración entre páginas
   - [ ] Testing responsivo (móvil/tablet/desktop)
   - [ ] Testing de accesibilidad

2. **Optimizaciones**
   - [ ] Code splitting por rutas
   - [ ] Lazy loading de imágenes
   - [ ] Caché de datos
   - [ ] Minificación de CSS

3. **UX/UI**
   - [ ] Revisar design consistency
   - [ ] Mejorar animaciones
   - [ ] Feedback visual para interacciones
   - [ ] Loading states

4. **Documentación**
   - [ ] Comentarios de código
   - [ ] README actualizado
   - [ ] Guía de instalación y uso

---

## 🎨 Especificaciones de Diseño

### Colores
```
Primary: #0066CC (Azul)
Secondary: #004499 (Azul oscuro)
Background: #001a4d (Azul muy oscuro)
Text: #FFFFFF (Blanco)
Accent: #00FF00 / #FF6600 (Verde/Naranja para fases)
Hover: rgba(255, 255, 255, 0.1)
```

### Tipografía
- Headings (H1, H2): Font-size 24-48px, Bold
- Body Text: Font-size 14-16px, Regular
- Button Text: Font-size 14-16px, Bold

### Espaciado
- Padding estándar: 16px / 24px
- Margin estándar: 16px / 24px / 32px
- Gap en grids: 20px

### Breakpoints
```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

---

## 🔧 Configuración Técnica Adicional

### Dependencias Adicionales (Si se necesitan)
```bash
# Para gráficos/animaciones avanzadas
npm install react-transition-group

# Para manejo de formularios (para tests)
npm install react-hook-form

# Para notificaciones/toasts
npm install react-hot-toast

# Para lazy loading de imágenes
npm install react-lazyload

# Para analytics (opcional)
npm install react-google-analytics
```

### Variables de Entorno (.env)
```
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=Motor Parts Catalogue
VITE_VERSION=1.0.0
```

---

## 📊 Checklist General de Desarrollo

- [ ] Fase 1: Infraestructura completa
- [ ] Fase 2: Home page funcional
- [ ] Fase 3: Parts page funcional
- [ ] Fase 4: Strokes page funcional
- [ ] Fase 5: Quiz page funcional
- [ ] Fase 6: Strokes Cycles completo
- [ ] Fase 7: Pulido y testing
- [ ] Deploy en producción
- [ ] Documentación final

---

## 🚀 Próximos Pasos

1. Iniciar con **FASE 1**: Crear estructura de datos y componentes base
2. Validar datos y estructura con stakeholders
3. Comenzar desarrollo front-end progresivamente
4. Integrar assets (imágenes/iconos) según disponibilidad
5. Testing continuo en cada fase

---

## 📞 Notas Importantes

- La aplicación debe ser **fully responsive** para móviles
- Las animaciones deben ser **suaves y optimizadas**
- El contenido educativo debe ser **preciso y claro**
- El interfaz debe seguir **principios de UX/UI** modernos
- Los tests deben tener **validación y feedback** claros
- Se recomienda usar **lazy loading** para optimización

---

**Documento creado:** Junio 2, 2026  
**Versión:** 1.0  
**Estado:** Listo para desarrollo
