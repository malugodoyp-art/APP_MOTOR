# App Motor - Recurso Didáctico Interactivo

Esta es una aplicación web/móvil desarrollada con React y Vite. Fue creada como un recurso didáctico interactivo para la enseñanza de las piezas móviles del motor de combustión interna de cuatro tiempos.

## Objetivo
El objetivo principal de esta aplicación es mejorar el proceso de aprendizaje de los estudiantes de mecánica automotriz del **Instituto Superior Tecnológico "Alberto Enríquez"**, mediante una herramienta digital interactiva, accesible y efectiva.

## Características
* **Explorador de Piezas**: Información detallada sobre las diferentes piezas móviles del motor.
* **Tiempos del Motor**: Explicación interactiva de los cuatro tiempos del motor de combustión interna (Admisión, Compresión, Combustión/Explosión, Escape).
* **Evaluación (Quiz)**: Módulo de pruebas para evaluar los conocimientos adquiridos por los estudiantes de manera lúdica.
* **Diseño Responsivo**: Interfaz diseñada pensando primero en dispositivos móviles (Mobile-first) para facilitar el acceso de los estudiantes.

## Tecnologías Utilizadas
* [React](https://reactjs.org/) - Librería de JavaScript para construir interfaces de usuario.
* [Vite](https://vitejs.dev/) - Entorno de desarrollo rápido.
* **CSS Vanilla** - Estilizado personalizado para mantener el control y el rendimiento.
* [Lucide React](https://lucide.dev/) - Iconografía moderna y escalable.
* [React Router DOM](https://reactrouter.com/) - Enrutamiento del lado del cliente.

## Estructura del Proyecto

### Fases de Desarrollo

#### ✅ FASE 1: Infraestructura y Componentes Base (Completada)

**Archivos de Datos Creados:**
- `src/data/motorParts.js` - 28 partes del motor organizadas por 6 categorías
- `src/data/engineCycle.js` - 4 fases del motor de 4 tiempos con descripciones detalladas
- `src/data/quizzes.js` - 4 cuestionarios educativos con preguntas de evaluación

**Componentes Reutilizables:**
- `src/components/SearchBar.jsx` - Barra de búsqueda con filtrado en tiempo real
- `src/components/ProgressBar.jsx` - Barra de progreso personalizable
- `src/components/CatalogCard.jsx` - Tarjeta de categoría del catálogo
- `src/components/PartCard.jsx` - Tarjeta de parte individual

**Hooks Custom:**
- `src/hooks/useSearch.js` - Búsqueda y filtrado avanzado
- `src/hooks/useQuizProgress.js` - Gestión de progreso de cuestionarios

**Estilos Base:**
- `src/styles/components.css` - Estilos de componentes y tema visual
- `src/styles/responsive.css` - Media queries para todos los tamaños de pantalla

### Próximas Fases
- **FASE 2**: Home Page (Catálogo de partes)
- **FASE 3**: Parts Page (Detalle de todas las partes)
- **FASE 4**: Strokes Page (Panel de control motor)
- **FASE 5**: Quiz Page (Pruebas y cuestionarios)
- **FASE 6**: Strokes Cycles (Visualización de ciclos)
- **FASE 7**: Pulido, Testing y Optimizaciones

## Tecnologías Utilizadas
* [React](https://reactjs.org/) - Librería de JavaScript para construir interfaces de usuario.
* [Vite](https://vitejs.dev/) - Entorno de desarrollo rápido.
* **CSS Vanilla** - Estilizado personalizado para mantener el control y el rendimiento.

## Instalación y Uso Local

Para ejecutar este proyecto localmente en tu computadora, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/malugodoyp-art/APP_MOTOR.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd APP_MOTOR
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador web en la URL que se muestra en la terminal (generalmente `http://localhost:5173`).

## Institución
Instituto Superior Tecnológico "Alberto Enríquez".
