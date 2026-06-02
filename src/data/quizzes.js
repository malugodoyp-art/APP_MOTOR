/**
 * Datos de cuestionarios y pruebas educativas
 */

export const quizzes = [
  {
    id: 1,
    title: "Test General de Conocimientos",
    subtitle: "Test General (Todas las Fases)",
    description: "Evaluación general sobre los conceptos fundamentales del motor de 4 tiempos",
    difficulty: "media",
    totalQuestions: 10,
    icon: "HelpCircle",
    color: "#0066CC",
    available: true,
    estimatedTime: "10 minutos",
    category: "general",
    questions: [
      {
        id: 1,
        question: "¿En qué tiempo entra la mezcla aire-combustible al cilindro?",
        options: [
          { text: "Admisión", correct: true },
          { text: "Compresión", correct: false },
          { text: "Combustión", correct: false },
          { text: "Escape", correct: false }
        ],
        explanation: "En la fase de admisión, el pistón baja y la válvula de admisión se abre permitiendo la entrada de la mezcla aire-combustible."
      },
      {
        id: 2,
        question: "¿Qué ocurre durante la fase de compresión?",
        options: [
          { text: "La mezcla se comprime entre el pistón y la culata", correct: true },
          { text: "La mezcla se quema", correct: false },
          { text: "Se expulsan los gases", correct: false },
          { text: "Entra aire fresco", correct: false }
        ],
        explanation: "En la compresión, el pistón sube con ambas válvulas cerradas, comprimiendo la mezcla a presiones de 10-15 bar."
      },
      {
        id: 3,
        question: "¿Cuál es la presión aproximada durante la combustión?",
        options: [
          { text: "1 bar", correct: false },
          { text: "10 bar", correct: false },
          { text: "50-60 bar", correct: true },
          { text: "100 bar", correct: false }
        ],
        explanation: "Durante la combustión, la explosión de la mezcla genera presiones de 50-60 bar que empujan el pistón hacia abajo."
      },
      {
        id: 4,
        question: "¿En qué fase se genera la potencia del motor?",
        options: [
          { text: "Admisión", correct: false },
          { text: "Compresión", correct: false },
          { text: "Combustión", correct: true },
          { text: "Escape", correct: false }
        ],
        explanation: "La potencia se genera en la fase de combustión cuando la mezcla se quema y expande violentamente."
      },
      {
        id: 5,
        question: "¿Qué temperatura aproximada alcanza la cámara de combustión?",
        options: [
          { text: "500°C", correct: false },
          { text: "1000°C", correct: false },
          { text: "2000-2500°C", correct: true },
          { text: "3000°C", correct: false }
        ],
        explanation: "Durante la combustión, la temperatura alcanza 2000-2500°C, lo que permite la rápida expansión de gases."
      },
      {
        id: 6,
        question: "¿Cuántas revoluciones completa el cigüeñal en un ciclo completo de 4 tiempos?",
        options: [
          { text: "1 revolución", correct: false },
          { text: "2 revoluciones", correct: true },
          { text: "3 revoluciones", correct: false },
          { text: "4 revoluciones", correct: false }
        ],
        explanation: "Un ciclo completo de 4 tiempos requiere 2 revoluciones del cigüeñal (720° de rotación)."
      },
      {
        id: 7,
        question: "¿Cuál es la función principal de los anillos del pistón?",
        options: [
          { text: "Sellar herméticamente el cilindro", correct: true },
          { text: "Conectar el pistón con la biela", correct: false },
          { text: "Evitar que se sobrecaliente", correct: false },
          { text: "Reducir velocidad de rotación", correct: false }
        ],
        explanation: "Los anillos del pistón crean un sello hermético entre el pistón y las paredes del cilindro evitando fugas de gases."
      },
      {
        id: 8,
        question: "¿Qué hace el árbol de levas?",
        options: [
          { text: "Genera la chispa para la combustión", correct: false },
          { text: "Controla la apertura y cierre de las válvulas", correct: true },
          { text: "Convierte movimiento rotativo en lineal", correct: false },
          { text: "Almacena energía de rotación", correct: false }
        ],
        explanation: "El árbol de levas, a través de sus levas, abre y cierra las válvulas de admisión y escape en el momento preciso."
      },
      {
        id: 9,
        question: "¿Cuál es la función de la biela?",
        options: [
          { text: "Conectar el pistón con el cigüeñal", correct: true },
          { text: "Sellar el cilindro", correct: false },
          { text: "Generar chispa de ignición", correct: false },
          { text: "Controlar las válvulas", correct: false }
        ],
        explanation: "La biela transmite la fuerza del pistón al cigüeñal, permitiendo que el movimiento lineal se convierta en rotatorio."
      },
      {
        id: 10,
        question: "¿Qué tiempo tiene la duración más corta en un motor?",
        options: [
          { text: "Todos tienen la misma duración", correct: true },
          { text: "Admisión", correct: false },
          { text: "Compresión", correct: false },
          { text: "Combustión", correct: false }
        ],
        explanation: "Los 4 tiempos tienen teóricamente la misma duración (180° de rotación cada uno)."
      }
    ]
  },

  {
    id: 2,
    title: "Test de Partes del Motor",
    subtitle: "Identificación de Piezas del Motor",
    description: "Identifica correctamente las 28 piezas interactivas del motor de 4 tiempos",
    difficulty: "fácil",
    totalQuestions: 8,
    icon: "Gauge",
    color: "#FF6600",
    available: true,
    estimatedTime: "8 minutos",
    category: "parts",
    questions: [
      {
        id: 1,
        question: "¿Cuál es la pieza que recibe directamente la fuerza de la combustión?",
        options: [
          { text: "Pistón", correct: true },
          { text: "Biela", correct: false },
          { text: "Cigüeñal", correct: false },
          { text: "Culata", correct: false }
        ],
        explanation: "El pistón es la pieza que recibe directamente la fuerza de la explosión de la mezcla aire-combustible."
      },
      {
        id: 2,
        question: "¿Qué pieza conecta el pistón con el cigüeñal?",
        options: [
          { text: "Anillo del pistón", correct: false },
          { text: "Biela", correct: true },
          { text: "Árbol de levas", correct: false },
          { text: "Válvula", correct: false }
        ],
        explanation: "La biela es la barra rígida que conecta el pistón con el cigüeñal transmitiendo la fuerza."
      },
      {
        id: 3,
        question: "¿Cuál es la función del bloque de cilindros?",
        options: [
          { text: "Alojar los cilindros y soportar el cigüeñal", correct: true },
          { text: "Controlar las válvulas", correct: false },
          { text: "Generar la chispa", correct: false },
          { text: "Comprimir la mezcla", correct: false }
        ],
        explanation: "El bloque de cilindros es la estructura principal que aloja los cilindros y proporciona apoyos para el cigüeñal."
      },
      {
        id: 4,
        question: "¿Qué componentes se encuentran en la culata?",
        options: [
          { text: "Válvulas, bujías y cámara de combustión", correct: true },
          { text: "Cigüeñal y bielas", correct: false },
          { text: "Pistones y anillos", correct: false },
          { text: "Solo el árbol de levas", correct: false }
        ],
        explanation: "La culata contiene las válvulas de admisión y escape, las bujías y la cámara de combustión."
      },
      {
        id: 5,
        question: "¿Cuál es el propósito de la bujía?",
        options: [
          { text: "Generar chispa para encender la mezcla", correct: true },
          { text: "Sellar el cilindro", correct: false },
          { text: "Abrir y cerrar válvulas", correct: false },
          { text: "Enfriar el motor", correct: false }
        ],
        explanation: "La bujía genera una chispa eléctrica que enciende la mezcla aire-combustible en la fase de combustión."
      },
      {
        id: 6,
        question: "¿Cuántos tipos de válvulas hay en cada cilindro?",
        options: [
          { text: "1 válvula", correct: false },
          { text: "2 válvulas (admisión y escape)", correct: true },
          { text: "3 válvulas", correct: false },
          { text: "4 válvulas", correct: false }
        ],
        explanation: "Cada cilindro tiene 2 válvulas: una de admisión y otra de escape que se controlan mediante el árbol de levas."
      },
      {
        id: 7,
        question: "¿Qué sincroniza el árbol de levas con el cigüeñal?",
        options: [
          { text: "La correa de distribución", correct: true },
          { text: "El volante", correct: false },
          { text: "Los anillos del pistón", correct: false },
          { text: "Los cojinetes", correct: false }
        ],
        explanation: "La correa de distribución dentada sincroniza el movimiento del árbol de levas con el cigüeñal."
      },
      {
        id: 8,
        question: "¿Cuál es la función del volante del motor?",
        options: [
          { text: "Almacenar energía y mantener velocidad de rotación", correct: true },
          { text: "Generar potencia", correct: false },
          { text: "Controlar válvulas", correct: false },
          { text: "Enfriar el motor", correct: false }
        ],
        explanation: "El volante es una rueda pesada que almacena energía cinética y mantiene la velocidad de rotación entre explosiones."
      }
    ]
  },

  {
    id: 3,
    title: "Prueba Práctica: Ciclo Completo",
    subtitle: "Simulación de Ciclo Completo",
    description: "Simula el ciclo completo del motor de 4 tiempos mediante pasos interactivos",
    difficulty: "avanzada",
    totalSteps: 8,
    icon: "Play",
    color: "#00AA00",
    available: true,
    estimatedTime: "15 minutos",
    category: "simulation",
    steps: [
      {
        id: 1,
        title: "Preparación Inicial",
        description: "El motor está preparado, todas las válvulas cerradas, el pistón en posición inicial."
      },
      {
        id: 2,
        title: "Inicio de Admisión",
        description: "Se abre la válvula de admisión, el pistón comienza a bajar."
      },
      {
        id: 3,
        title: "Fin de Admisión",
        description: "Se cierra la válvula de admisión, el cilindro está lleno de mezcla."
      },
      {
        id: 4,
        title: "Compresión",
        description: "Ambas válvulas cerradas, el pistón sube comprimiendo la mezcla."
      },
      {
        id: 5,
        title: "Ignición",
        description: "La bujía genera la chispa, se produce la combustión."
      },
      {
        id: 6,
        title: "Expansión de Gases",
        description: "Los gases se expanden, empujando el pistón hacia abajo (potencia)."
      },
      {
        id: 7,
        title: "Escape",
        description: "Se abre la válvula de escape, el pistón sube expulsando gases."
      },
      {
        id: 8,
        title: "Ciclo Completo",
        description: "El ciclo se completa, listo para reiniciar. Cigüeñal realizó 2 revoluciones."
      }
    ]
  },

  {
    id: 4,
    title: "Test Técnico: Fallas y Diagnóstico",
    subtitle: "Diagnóstico de Fallas Comunes",
    description: "Prueba de diagnóstico técnico sobre fallas comunes en motores de 4 tiempos",
    difficulty: "experto",
    totalQuestions: 12,
    icon: "AlertTriangle",
    color: "#FF0000",
    available: true,
    estimatedTime: "20 minutos",
    category: "diagnostic",
    questions: [
      {
        id: 1,
        question: "Si el motor no enciende, ¿cuál podría ser la causa más común?",
        options: [
          { text: "Bujía defectuosa o incorrectamente separada", correct: true },
          { text: "Falta de gasolina", correct: true },
          { text: "Cigüeñal dañado", correct: false },
          { text: "Pistones gastados", correct: false }
        ],
        explanation: "Las causas más comunes de no encendido son bujía defectuosa o carburación incorrecta."
      },
      {
        id: 2,
        question: "¿Qué indica un motor con bajo consumo de potencia?",
        options: [
          { text: "Compresión baja o anillos gastados", correct: true },
          { text: "Exceso de gasolina", correct: false },
          { text: "Cigüeñal bien balanceado", correct: false },
          { text: "Árbol de levas nuevo", correct: false }
        ],
        explanation: "Bajo consumo de potencia indica pérdida de compresión, típicamente por anillos desgastados."
      },
      {
        id: 3,
        question: "¿Cuándo se debe verificar la presión de compresión?",
        options: [
          { text: "Cuando el motor está frío", correct: true },
          { text: "Cuando el motor está caliente", correct: false },
          { text: "No es necesario verificarla", correct: false },
          { text: "Solo después de reparaciones", correct: false }
        ],
        explanation: "La compresión se debe verificar con el motor frío para obtener lecturas precisas."
      },
      {
        id: 4,
        question: "¿Qué síntoma indica desgaste de válvulas?",
        options: [
          { text: "Pérdida de compresión y baja potencia", correct: true },
          { text: "Exceso de vibración", correct: false },
          { text: "Ruido muy alto", correct: false },
          { text: "Humo blanco constante", correct: false }
        ],
        explanation: "El desgaste de válvulas produce pérdida de compresión y reducción de potencia del motor."
      },
      {
        id: 5,
        question: "¿Qué causa el sobrecalentamiento del motor?",
        options: [
          { text: "Refrigerante insuficiente, termostato dañado o ventilador defectuoso", correct: true },
          { text: "Cambio de aceite atrasado", correct: false },
          { text: "Bujías sucias", correct: false },
          { text: "Correa de distribución desgastada", correct: false }
        ],
        explanation: "El sobrecalentamiento es causado típicamente por problemas en el sistema de refrigeración."
      },
      {
        id: 6,
        question: "¿Qué indica humo azul en el escape?",
        options: [
          { text: "Quemado de aceite (problemas en anillos o válvulas)", correct: true },
          { text: "Gasolina adulterada", correct: false },
          { text: "Escape tapado", correct: false },
          { text: "Bujía de calor incorrecto", correct: false }
        ],
        explanation: "Humo azul indica que el aceite se está quemando en la cámara de combustión."
      },
      {
        id: 7,
        question: "¿Qué significa humo blanco en el escape?",
        options: [
          { text: "Agua/condensación en escape (normal al arrancar)", correct: true },
          { text: "Quema de aceite", correct: false },
          { text: "Falla en la ignición", correct: false },
          { text: "Fuga de refrigerante", correct: false }
        ],
        explanation: "Humo blanco al arrancar es normal debido a condensación. Si persiste, puede indicar problemas."
      },
      {
        id: 8,
        question: "¿Cuál es el rango normal de presión de compresión?",
        options: [
          { text: "150-200 PSI dependiendo del motor", correct: true },
          { text: "50-100 PSI", correct: false },
          { text: "300-400 PSI", correct: false },
          { text: "10-50 PSI", correct: false }
        ],
        explanation: "La presión de compresión normal es típicamente 150-200 PSI según las especificaciones del motor."
      },
      {
        id: 9,
        question: "¿Qué ocurre si la correa de distribución se rompe?",
        options: [
          { text: "Desalineación de árbol de levas y cigüeñal, daño severo del motor", correct: true },
          { text: "Solo pérdida de potencia menor", correct: false },
          { text: "Se detiene pero no hay daño", correct: false },
          { text: "Sobrecalentamiento leve", correct: false }
        ],
        explanation: "Ruptura de correa de distribución causa daño catastrófico al motor."
      },
      {
        id: 10,
        question: "¿Cómo se detecta una válvula pegada?",
        options: [
          { text: "Compresión desigual entre cilindros, pérdida de potencia", correct: true },
          { text: "Solo por fugas de aceite", correct: false },
          { text: "Siempre hay ruido fuerte", correct: false },
          { text: "No se puede detectar", correct: false }
        ],
        explanation: "Una válvula pegada se detecta midiendo compresión desigual entre cilindros."
      },
      {
        id: 11,
        question: "¿Qué significa si el motor golpea (knocking)?",
        options: [
          { text: "Combustión prematura o gasolina de bajo octanaje", correct: true },
          { text: "Bujía sucia", correct: false },
          { text: "Filtro de aire sucio", correct: false },
          { text: "Aceite limpio", correct: false }
        ],
        explanation: "El golpeteo del motor indica combustión prematura, típicamente por gasolina inadecuada."
      },
      {
        id: 12,
        question: "¿Cómo se verifica el juego de las válvulas?",
        options: [
          { text: "Con galga (feeler gauge) con motor frío", correct: true },
          { text: "Con el motor en funcionamiento", correct: false },
          { text: "Solo por inspección visual", correct: false },
          { text: "Con manómetro de presión", correct: false }
        ],
        explanation: "El juego de válvulas se verifica con una galga de espesor con el motor completamente frío."
      }
    ]
  }
];

/**
 * Datos de progreso del usuario
 */
export const userProgressTemplate = {
  overallProgress: 45,
  completedQuizzes: 2,
  totalQuizzes: 4,
  currentQuiz: null,
  currentQuestion: "¿Qué tiempo es Admisión?",
  questionsAnswered: {
    correct: 15,
    incorrect: 5,
    skipped: 2
  },
  testStatus: {
    general: { completed: true, score: 85 },
    parts: { completed: true, score: 92 },
    simulation: { completed: false, progress: 0 },
    diagnostic: { completed: false, progress: 0 }
  }
};

/**
 * Función para obtener cuestionario por ID
 */
export const getQuizById = (id) => {
  return quizzes.find(quiz => quiz.id === id);
};

/**
 * Función para obtener todas las preguntas de un cuestionario
 */
export const getQuizQuestions = (quizId) => {
  const quiz = getQuizById(quizId);
  return quiz ? quiz.questions : [];
};

/**
 * Función para calcular puntuación
 */
export const calculateScore = (answers, questions) => {
  let correct = 0;
  answers.forEach((answer, index) => {
    if (answer && questions[index].options[answer].correct) {
      correct++;
    }
  });
  return (correct / questions.length) * 100;
};

/**
 * Función para obtener cuestionarios por dificultad
 */
export const getQuizzesByDifficulty = (difficulty) => {
  return quizzes.filter(quiz => quiz.difficulty === difficulty);
};

/**
 * Función para obtener cuestionarios disponibles
 */
export const getAvailableQuizzes = () => {
  return quizzes.filter(quiz => quiz.available);
};
