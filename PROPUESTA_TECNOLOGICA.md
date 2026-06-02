# CAPÍTULO III
# PROPUESTA TECNOLÓGICA

## 3.1. Introducción a la Propuesta
La presente propuesta tecnológica detalla el diseño, estructura y desarrollo de **APP_MOTOR**, un recurso didáctico interactivo enfocado en la enseñanza de las piezas móviles del motor de combustión interna de cuatro tiempos. Esta herramienta digital está orientada a los estudiantes de mecánica automotriz del Instituto Superior Tecnológico "Alberto Enríquez", buscando transformar el aprendizaje teórico en una experiencia visual e interactiva.

## 3.2. Metodología que va a utilizar
Para el desarrollo de la aplicación web/móvil se adopta la metodología **Scrum**, una metodología ágil que permite un desarrollo iterativo e incremental, flexible y orientado a la mejora continua del software.

Scrum es un marco de trabajo ágil utilizado para gestionar y desarrollar proyectos complejos. Divide el trabajo en ciclos cortos y regulares llamados sprints, permitiendo adaptarse a los cambios y fomentando la colaboración. Inicialmente, el proyecto se dividió en fases secuenciales de desarrollo (Fase 1 a Fase 7), implementando de forma progresiva los elementos básicos de la aplicación.

La implementación de este enfoque metodológico facilita una validación constante, haciendo posible revisar y ajustar la aplicación en cada una de sus etapas según los requerimientos establecidos. De esta manera, se asegura que el diseño, las funciones y la experiencia de usuario cumplan estrictamente con el propósito didáctico y formativo del proyecto.

El núcleo de Scrum radica en su capacidad para evolucionar constantemente a través de un marco de trabajo compuesto por roles específicos, artefactos y eventos. La producción se gestiona en bloques de tiempo cortos, lo que evita que el proyecto se desvíe. Cada periodo cierra con una entrega funcional (ej. finalización del módulo del ciclo de 4 tiempos). De este modo, aunque el panorama inicial sea incierto, el equipo mantiene la flexibilidad de modificar y realizar ajustes basándose en los resultados reales de cada ciclo.

De esta forma, Scrum facilita la identificación oportuna de fallas mediante evaluaciones constantes en cada ciclo de trabajo, lo que asegura que cada entrega de la aplicación sea operativa y robusta. Asimismo, este marco de trabajo aporta una gran adaptabilidad ante imprevistos, haciendo posible integrar optimizaciones o modificaciones técnicas sin poner en riesgo la estabilidad global de la app.

### 3.2.1. Herramienta de seguimiento metodológico
Para la gestión de los sprints y fases de desarrollo se emplea una plataforma de gestión visual de proyectos basada en la metodología Kanban. Su estructura intuitiva permite realizar el seguimiento de procesos y metodologías de forma dinámica, dividiendo el trabajo en tableros, listas y tarjetas (Backlog, En Progreso, En Revisión, Completado). Esta flexibilidad la convierte en una opción idónea tanto para metodologías ágiles como Scrum. Algunas de sus ventajas son:

• Interfaz visual clara para ver las fases del proyecto (ej. Infraestructura, Home Page, Strokes Page, Quiz Page) de un vistazo.
• Fechas límite que ayudan a cumplir plazos y organizar los sprints semanales.
• Centralización de los checklist de tareas de validación (Performance, Responsividad, etc.).
• Integración con repositorios de código para el seguimiento de versiones.

### 3.2.2. Análisis de los requerimientos funcionales y no funcionales 
Identificar y analizar los requerimientos funcionales y no funcionales de la aplicación educativa sobre las partes móviles de un motor de combustión interna de cuatro tiempos, a través de la recolección de información de docentes y estudiantes de la carrera de Mecánica Automotriz del Instituto Superior Tecnológico "Alberto Enríquez".

**Entrevista:** Aplicada al docente coordinador de la carrera, permite obtener información cualitativa y detallada sobre los contenidos técnicos, pedagógicos y las expectativas de la aplicación.
*Ejemplo de preguntas:*
 ¿Qué partes móviles del motor (pistón, biela, cigüeñal, etc.) requieren mayor énfasis en la aplicación?
 ¿Qué recursos considera más efectivos para el aprendizaje (catálogo interactivo, animación del ciclo de 4 tiempos, pruebas de diagnóstico)?

**Encuesta:** Aplicada a los estudiantes de la carrera, permite recopilar datos cuantitativos sobre preferencias de uso, accesibilidad y expectativas de la aplicación.
*Ejemplo de preguntas:*
 ¿Qué tan útil considera una visualización animada del ciclo de cuatro tiempos con control de fases?
 ¿Qué tipo de evaluaciones interactivas (selección múltiple, identificación visual) le resultan más motivadoras?
 ¿Desde qué dispositivo planea acceder principalmente a la aplicación?

El docente coordinador, mediante entrevista, aporta la visión pedagógica y técnica; mientras que los estudiantes, mediante encuesta, validan las necesidades prácticas y de usabilidad. Así se logra un análisis integral de los requerimientos funcionales y no funcionales.

### 3.2.3. Método seleccionado
Método cualitativo porque se basa en pasos secuenciales y lógicos sin cálculos numéricos. Utiliza herramientas como entrevistas, observación y análisis documental (manuales técnicos) para interpretar críticamente acciones y definir con precisión los flujos de aprendizaje dentro de la aplicación.

### 3.2.4. Resultados del análisis de los requerimientos

**Requerimientos funcionales**
*Tabla 1*
| Funcionalidad | Descripción |
|---|---|
| Explorador de Piezas | Visualización interactiva y detallada de 28 piezas móviles del motor organizadas en 6 categorías. |
| Búsqueda y Filtrado | Herramienta de búsqueda en tiempo real por nombre, función o especificación técnica. |
| Simulación del Ciclo | Representación visual e interactiva de las fases de admisión, compresión, combustión y escape con datos técnicos en vivo. |
| Evaluaciones (Quiz) | Ofrecer pruebas de distintos niveles (General, Partes, Simulación, Diagnóstico) con retroalimentación inmediata. |
| Control de Progreso | Barra de seguimiento que muestra el avance en el aprendizaje y los cuestionarios completados. |
| Contenido Educativo | Inclusión de textos descriptivos, puntos clave de funcionamiento y diagramas visuales de cada pieza. |

**Requerimientos no funcionales**
*Tabla 2*
| Característica | Descripción |
|---|---|
| Usabilidad y Diseño | Enfoque *Mobile-first* (360px a 1920px), con interfaz intuitiva y navegación inferior unificada. |
| Rendimiento | Animaciones CSS optimizadas (60 FPS) y tiempos de carga mínimos (< 1.5s). |
| Compatibilidad | Aplicación multiplataforma accesible desde navegadores web en dispositivos Android, iOS y Desktop. |
| Escalabilidad | Arquitectura modular basada en componentes de React que facilita la integración de nuevos módulos o motores. |
| Mantenibilidad | Código estandarizado, estructurado con separación de responsabilidades y totalmente documentado. |

## 3.3. Diseño de la interfaz
El diseño de la interfaz se rige por principios de Experiencia de Usuario (UX) modernos, utilizando una paleta de colores de alto contraste orientada al área técnica (azul principal, con indicadores en colores semánticos para fases: verde, naranja, rojo, gris). 

*Figura 5. Diagrama de flujo de la interfaz*
(El diagrama de flujo detalla el recorrido del usuario comenzando en la Pantalla de Inicio (Home), con acceso directo a la Búsqueda General, y ramificándose en tres áreas principales mediante la barra de navegación inferior: Catálogo de Partes (/parts), Visualización 4 Tiempos (/strokes) y Sección de Evaluación (/quiz).)
*Fuente: Elaboración propia*

## 3.4. Implementación del software

### 3.4.1. Arquitectura seleccionada
Se ha seleccionado una arquitectura de Aplicación de Página Única (SPA) basada en componentes web. La capa de presentación está construida utilizando el framework **React** junto con **Vite** como herramienta de empaquetado, lo que asegura tiempos de compilación y carga ultra rápidos. Los datos técnicos (partes del motor, ciclos, cuestionarios) se manejan de manera centralizada a través de estructuras JSON locales (`motorParts.js`, `engineCycle.js`), garantizando alta disponibilidad sin depender de bases de datos externas en su versión base.

### 3.4.2. Codificación de las funcionalidades especificadas
La codificación se desarrolla mediante JavaScript (ECMAScript 2020) utilizando JSX para la renderización de componentes. La separación de responsabilidades está claramente definida:
* **Componentes Presentacionales:** Barras de progreso, tarjetas de catálogo, visualizadores del cilindro.
* **Lógica de Negocio (Custom Hooks):** Como `useSearch` para filtrado en tiempo real y `useQuizProgress` para el control de evaluaciones.
* **Animaciones y Estilos:** Implementados a través de CSS Vanilla puro en lugar de JavaScript para evitar sobrecarga en la renderización, utilizando keyframes (`@keyframes`) y media queries orientadas a la responsividad.

### 3.4.3. Pruebas o test de validación de funcionamiento
Concluidas las fases de desarrollo (Sprints), se llevan a cabo pruebas exhaustivas:
1. **Pruebas de Componentes:** Verificación del renderizado correcto del grid y búsqueda.
2. **Pruebas de Rendimiento y Animación:** Monitoreo del flujo de las animaciones de 4 tiempos bajo diversas configuraciones de hardware para evitar caídas de cuadros.
3. **Pruebas de Responsividad:** Inspección en breakpoints específicos (Móvil Pequeño, Móvil Grande, Tablet, Desktop) asegurando el correcto reajuste estructural.

### 3.4.4. Despliegue de la aplicación
El proceso de despliegue se realiza tras ejecutar la rutina de compilación de optimización para producción (`npm run build`). Al no requerir infraestructura de backend en esta iteración, el paquete optimizado generado (`/dist`) se aloja en un servidor estático web escalable. Esto asegura la disponibilidad de la plataforma educativa a través de una URL pública para todo el estudiantado.

### 3.4.5. Encuesta de satisfacción del software
Posterior al despliegue, se planifica una etapa de validación donde un grupo piloto de estudiantes y docentes del instituto interactuarán con el sistema en un escenario real. Tras la experiencia, se distribuirá una encuesta de satisfacción digital focalizada en recopilar impresiones de usabilidad, claridad de las animaciones, eficacia del módulo de cuestionarios y recepción pedagógica, cuyos resultados servirán para programar actualizaciones de mejora continua.