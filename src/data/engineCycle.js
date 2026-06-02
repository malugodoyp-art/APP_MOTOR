/**
 * Datos de ciclos del motor de 4 tiempos
 */

export const engineCycle = [
  {
    id: 1,
    number: 1,
    name: "Admisión",
    spanishName: "Admisión",
    icon: "Intake",
    description: "El pistón baja, la válvula de admisión se abre para la mezcla de aire/combustible.",
    detailedDescription: "Durante la fase de admisión (1er tiempo):\n\n• El pistón se mueve hacia abajo (desplazamiento).\n• La válvula de admisión se abre completamente.\n• La válvula de escape permanece cerrada.\n• Entra una mezcla de aire y gasolina al cilindro.\n• La presión dentro del cilindro disminuye.\n• Al final de esta fase, el cilindro está lleno de mezcla explosiva.\n\nDuración: 180° de rotación del cigüeñal.",
    keyPoints: [
      "Válvula de admisión: ABIERTA",
      "Válvula de escape: CERRADA",
      "Movimiento del pistón: HACIA ABAJO",
      "Presión: DISMINUYE",
      "Mezcla: ENTRA AL CILINDRO"
    ],
    affectedParts: [
      "Válvula de admisión",
      "Pistón",
      "Biela",
      "Cigüeñal",
      "Leva de admisión"
    ],
    temperature: "~40°C",
    pressure: "~0.5 bar",
    color: "#00AA00" // Verde
  },
  {
    id: 2,
    number: 2,
    name: "Compresión",
    spanishName: "Compresión",
    icon: "Compress",
    description: "El pistón sube, comprimiendo la mezcla con ambas válvulas cerradas.",
    detailedDescription: "Durante la fase de compresión (2do tiempo):\n\n• El pistón se mueve hacia arriba.\n• Ambas válvulas (admisión y escape) están cerradas herméticamente.\n• La mezcla aire-combustible se comprime en la cámara de combustión.\n• El volumen disminuye significativamente.\n• La presión aumenta considerablemente.\n• La temperatura sube a unos 400-500°C.\n• Se comprime hasta ~1/10 del volumen inicial.\n\nDuración: 180° de rotación del cigüeñal.",
    keyPoints: [
      "Válvula de admisión: CERRADA",
      "Válvula de escape: CERRADA",
      "Movimiento del pistón: HACIA ARRIBA",
      "Presión: AUMENTA (10-15 bar)",
      "Temperatura: SUBE SIGNIFICATIVAMENTE"
    ],
    affectedParts: [
      "Pistón",
      "Biela",
      "Cigüeñal",
      "Anillos del pistón",
      "Culata"
    ],
    temperature: "~400-500°C",
    pressure: "~10-15 bar",
    color: "#CCAA00" // Naranja
  },
  {
    id: 3,
    number: 3,
    name: "Combustión",
    spanishName: "Combustión",
    icon: "Combustion",
    description: "La bujía enciende la mezcla comprimida, forzando al pistón a bajar.",
    detailedDescription: "Durante la fase de combustión o explosión (3er tiempo):\n\n• La mezcla comprimida está lista para ignición.\n• La bujía genera una chispa eléctrica (25,000 voltios).\n• La mezcla se inflama instantáneamente.\n• Se produce una explosión controlada.\n• Los gases se expanden violentamente.\n• La presión aumenta a 50-60 bar.\n• El pistón es empujado violentamente hacia abajo.\n• Esta es la fase que genera la potencia del motor.\n• La temperatura alcanza 2,000-2,500°C.\n\nDuración: 180° de rotación del cigüeñal.",
    keyPoints: [
      "Válvula de admisión: CERRADA",
      "Válvula de escape: CERRADA",
      "Ignición: POR BUJÍA",
      "Presión: MÁXIMA (50-60 bar)",
      "Temperatura: MÁXIMA (2000-2500°C)",
      "Potencia: GENERADA"
    ],
    affectedParts: [
      "Bujía",
      "Pistón",
      "Biela",
      "Cigüeñal",
      "Culata"
    ],
    temperature: "~2000-2500°C",
    pressure: "~50-60 bar",
    color: "#FF4400" // Rojo-Naranja
  },
  {
    id: 4,
    number: 4,
    name: "Escape",
    spanishName: "Escape",
    icon: "Exhaust",
    description: "El pistón sube, empujando los gases de escape fuera de la cámara.",
    detailedDescription: "Durante la fase de escape (4to tiempo):\n\n• Los gases de la combustión aún están calientes (~1000°C).\n• La válvula de escape se abre.\n• La válvula de admisión permanece cerrada.\n• El pistón se mueve hacia arriba.\n• Los gases son expulsados del cilindro hacia el escape.\n• La presión disminuye a valores normales.\n• Casi al final de esta fase, la válvula de escape se cierra.\n• El cilindro queda vacío listo para el siguiente ciclo.\n• El cigüeñal completa 2 revoluciones en un ciclo completo de 4 tiempos.\n\nDuración: 180° de rotación del cigüeñal.",
    keyPoints: [
      "Válvula de admisión: CERRADA",
      "Válvula de escape: ABIERTA",
      "Movimiento del pistón: HACIA ARRIBA",
      "Presión: DISMINUYE",
      "Gases: SALEN DEL CILINDRO",
      "Ciclo: SE REINICIA"
    ],
    affectedParts: [
      "Válvula de escape",
      "Pistón",
      "Biela",
      "Cigüeñal",
      "Leva de escape",
      "Sistema de escape"
    ],
    temperature: "~1000°C",
    pressure: "~1 bar",
    color: "#6666FF" // Azul
  }
];

/**
 * Información sobre recursos educativos
 */
export const educationalResources = {
  institute: "Alberto Enríquez",
  instituteType: "Instituto Superior Tecnológico",
  location: "Ecuador",
  resources: [
    {
      id: 1,
      title: "Manuales Técnicos del Instituto",
      description: "Documentación oficial sobre mecánica de motores",
      link: "#"
    },
    {
      id: 2,
      title: "Noticias del Proyecto de Grado",
      description: "Actualizaciones sobre el proyecto educativo",
      link: "#"
    }
  ]
};

/**
 * Información sobre el ciclo completo
 */
export const cycleInfo = {
  title: "Ciclo de 4 Tiempos",
  description: "Proceso completo de funcionamiento de un motor de gasolina",
  totalDuration: "720° rotación del cigüeñal (2 revoluciones)",
  totalTime: "~0.05 segundos a 1200 RPM",
  stages: 4,
  revolutionsPerCycle: 2,
  keyCharacteristics: [
    "Ciclo termodinámico de 4 etapas",
    "Genera potencia mediante combustión controlada",
    "Optimizado para eficiencia y potencia",
    "Base de la mayoría de motores modernos"
  ]
};

/**
 * Función para obtener fase por número
 */
export const getPhaseByNumber = (number) => {
  return engineCycle.find(phase => phase.number === number);
};

/**
 * Función para obtener fase siguiente
 */
export const getNextPhase = (currentNumber) => {
  const nextNumber = currentNumber === 4 ? 1 : currentNumber + 1;
  return getPhaseByNumber(nextNumber);
};

/**
 * Función para obtener fase anterior
 */
export const getPreviousPhase = (currentNumber) => {
  const prevNumber = currentNumber === 1 ? 4 : currentNumber - 1;
  return getPhaseByNumber(prevNumber);
};

/**
 * Función para obtener todas las fases
 */
export const getAllPhases = () => {
  return engineCycle;
};

/**
 * Función para obtener información de progreso del ciclo
 */
export const getPhaseProgress = (currentPhase) => {
  return {
    current: currentPhase,
    total: engineCycle.length,
    percentage: (currentPhase / engineCycle.length) * 100,
    remaining: engineCycle.length - currentPhase
  };
};
