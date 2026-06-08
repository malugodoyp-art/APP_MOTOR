/**
 * Datos de partes del motor de 4 tiempos
 * 28 piezas interactivas organizadas por categoría
 */

export const motorCategories = [
  {
    id: 1,
    name: "Pistón",
    icon: "Piston",
    description: "Recibe la fuerza de combustión",
    color: "#AEC6CF"
  },
  {
    id: 2,
    name: "Biela",
    icon: "Link",
    description: "Conecta pistón con cigüeñal",
    color: "#AEC6CF"
  },
  {
    id: 3,
    name: "Cigüeñal",
    icon: "Zap",
    description: "Convierte movimiento lineal en rotativo",
    color: "#AEC6CF"
  },
  {
    id: 4,
    name: "Bloque de Cilindros",
    icon: "Box",
    description: "Estructura principal del motor",
    color: "#AEC6CF"
  },
  {
    id: 5,
    name: "Culata",
    icon: "Layers",
    description: "Tapa superior del cilindro",
    color: "#AEC6CF"
  },
  {
    id: 6,
    name: "Árbol de Levas",
    icon: "Zap",
    description: "Controla apertura de válvulas",
    color: "#AEC6CF"
  }
];

export const allMotorParts = [
  // Categoría: Pistón
  {
    id: 1,
    categoryId: 1,
    category: "Pistón",
    name: "Pistón Estándar",
    function: "Recibe la fuerza de combustión y transmite movimiento a la biela",
    specifications: {
      diameter: "80 mm",
      height: "45 mm",
      weight: "450 g",
      material: "Aluminio aleado"
    },
    image: "piston-standard.png",
    description: "Pieza cilíndrica que se mueve dentro del cilindro. Es donde ocurre la combustión y la potencia se transmite al cigüeñal."
  },
  {
    id: 2,
    categoryId: 1,
    category: "Pistón",
    name: "Anillos del Pistón",
    function: "Sellan el cilindro para evitar fugas de gases",
    specifications: {
      externalDiameter: "80 mm",
      internalDiameter: "76 mm",
      thickness: "2 mm",
      material: "Hierro fundido"
    },
    image: "piston-rings.png",
    description: "Anillos elásticos que rodean el pistón. Crean un sello hermético entre el pistón y las paredes del cilindro."
  },
  {
    id: 3,
    categoryId: 1,
    category: "Pistón",
    name: "Pasador del Pistón",
    function: "Une el pistón con la biela",
    specifications: {
      diameter: "18 mm",
      length: "55 mm",
      material: "Acero templado",
      tolerancia: "Clase H7"
    },
    image: "piston-pin.png",
    description: "Pasador cilíndrico de acero que conecta el pistón con la cabeza de la biela, permitiendo su articulación."
  },
  {
    id: 4,
    categoryId: 1,
    category: "Pistón",
    name: "Ranuras del Pistón",
    function: "Alojan los anillos del pistón",
    specifications: {
      numberOfGrooves: 3,
      depth: "2.5 mm",
      width: "2.5 mm",
      spacing: "5 mm"
    },
    image: "piston-grooves.png",
    description: "Surcos precisamente mecanizados en el cuerpo del pistón que retienen los anillos de sello."
  },

  // Categoría: Biela
  {
    id: 5,
    categoryId: 2,
    category: "Biela",
    name: "Biela Completa",
    function: "Conecta el pistón con el cigüeñal",
    specifications: {
      length: "150 mm",
      weight: "300 g",
      material: "Acero forjado",
      resistencia: "800-900 MPa"
    },
    image: "connecting-rod.png",
    description: "Barra rígida que transmite la fuerza del pistón al cigüeñal. Articula en ambos extremos para permitir movimiento."
  },
  {
    id: 6,
    categoryId: 2,
    category: "Biela",
    name: "Cabeza de Biela",
    function: "Se conecta con el pasador del pistón",
    specifications: {
      diameter: "18 mm",
      type: "Horquilla",
      acabado: "Pulido"
    },
    image: "rod-head.png",
    description: "Extremo superior de la biela con un agujero para el pasador del pistón."
  },
  {
    id: 7,
    categoryId: 2,
    category: "Biela",
    name: "Pie de Biela",
    function: "Se conecta con el cigüeñal",
    specifications: {
      diameter: "45 mm",
      type: "Articulación",
      acabado: "Pulido"
    },
    image: "rod-foot.png",
    description: "Extremo inferior de la biela que se articula con el muñequilla del cigüeñal."
  },
  {
    id: 8,
    categoryId: 2,
    category: "Biela",
    name: "Cojinetes de Biela",
    function: "Reducen fricción entre biela y cigüeñal",
    specifications: {
      diameter: "45 mm",
      material: "Bronce/Latón",
      grosor: "2 mm"
    },
    image: "rod-bearings.png",
    description: "Casquillos de bronce que se insertan en el pie de la biela para reducir fricción con el cigüeñal."
  },

  // Categoría: Cigüeñal
  {
    id: 9,
    categoryId: 3,
    category: "Cigüeñal",
    name: "Cigüeñal Completo",
    function: "Convierte movimiento alternativo en rotatorio",
    specifications: {
      length: "250 mm",
      weight: "4500 g",
      material: "Acero forjado",
      resistencia: "1200-1400 MPa"
    },
    image: "crankshaft.png",
    description: "Eje principal del motor que recibe la fuerza de los pistones y la transmite como rotación continua."
  },
  {
    id: 10,
    categoryId: 3,
    category: "Cigüeñal",
    name: "Muñequilla del Cigüeñal",
    function: "Articula con la biela",
    specifications: {
      diameter: "45 mm",
      length: "50 mm",
      excentricidad: "40 mm"
    },
    image: "crankshaft-pin.png",
    description: "Porción excéntrica del cigüeñal donde se conecta la biela, transformando movimiento lineal en rotatorio."
  },
  {
    id: 11,
    categoryId: 3,
    category: "Cigüeñal",
    name: "Cojinetes de Cigüeñal",
    function: "Soportan y reducen fricción del cigüeñal",
    specifications: {
      diameter: "60 mm",
      material: "Bronce especial",
      grosor: "2.5 mm"
    },
    image: "crankshaft-bearings.png",
    description: "Casquillos que se insertan en los apoyos del bloque para soportar el cigüeñal."
  },
  {
    id: 12,
    categoryId: 3,
    category: "Cigüeñal",
    name: "Volante del Motor",
    function: "Almacena energía de rotación",
    specifications: {
      diameter: "200 mm",
      weight: "3000 g",
      material: "Hierro fundido",
      inercia: "Alta"
    },
    image: "flywheel.png",
    description: "Rueda pesada acoplada al cigüeñal que mantiene la velocidad de rotación constante entre explosiones."
  },

  // Categoría: Bloque de Cilindros
  {
    id: 13,
    categoryId: 4,
    category: "Bloque de Cilindros",
    name: "Bloque Motor Completo",
    function: "Estructura principal que aloja los cilindros",
    specifications: {
      cylinders: 4,
      material: "Hierro fundido",
      weight: "80000 g",
      capacidad: "2000 cc"
    },
    image: "engine-block.png",
    description: "Componente más robusto del motor. Contiene los cilindros, los apoyos del cigüeñal y canales de refrigeración."
  },
  {
    id: 14,
    categoryId: 4,
    category: "Bloque de Cilindros",
    name: "Cilindro",
    function: "Aloja el movimiento del pistón",
    specifications: {
      diameter: "80 mm",
      length: "120 mm",
      superficie: "Cromada"
    },
    image: "cylinder.png",
    description: "Orificio cilíndrico mecanizado donde se mueve el pistón. Debe ser perfectamente cilíndrico para sellar bien."
  },
  {
    id: 15,
    categoryId: 4,
    category: "Bloque de Cilindros",
    name: "Camisas de Cilindro",
    function: "Protegen los cilindros del desgaste",
    specifications: {
      material: "Hierro de mayor dureza",
      grosor: "3 mm",
      acabado: "Rectificado"
    },
    image: "cylinder-liners.png",
    description: "Tubos insertados en los cilindros que prolongan su vida útil al ser remplazables cuando se desgastan."
  },
  {
    id: 16,
    categoryId: 4,
    category: "Bloque de Cilindros",
    name: "Apoyo del Cigüeñal",
    function: "Soporta al cigüeñal",
    specifications: {
      number: 5,
      diameter: "60 mm",
      material: "Hierro fundido"
    },
    image: "crankshaft-support.png",
    description: "Proyecciones del bloque que sirven como apoyos para el cigüeñal, manteniéndolo alineado y firme."
  },

  // Categoría: Culata
  {
    id: 17,
    categoryId: 5,
    category: "Culata",
    name: "Culata Completa",
    function: "Tapa superior del cilindro y aloja válvulas",
    specifications: {
      material: "Aluminio aleado",
      weight: "2000 g",
      válvulas: 4,
      capacidad: "Cámara de combustión"
    },
    image: "cylinder-head.png",
    description: "Componente que cierra la parte superior del cilindro. Contiene la cámara de combustión, bujías y válvulas."
  },
  {
    id: 18,
    categoryId: 5,
    category: "Culata",
    name: "Válvula de Admisión",
    function: "Controla entrada de mezcla aire-combustible",
    specifications: {
      diameter: "30 mm",
      material: "Acero especial",
      ángulo: "45°"
    },
    image: "intake-valve.png",
    description: "Válvula que se abre durante la fase de admisión para permitir que entre la mezcla aire-combustible al cilindro."
  },
  {
    id: 19,
    categoryId: 5,
    category: "Culata",
    name: "Válvula de Escape",
    function: "Controla salida de gases de escape",
    specifications: {
      diameter: "28 mm",
      material: "Acero especial",
      ángulo: "45°"
    },
    image: "exhaust-valve.png",
    description: "Válvula que se abre durante la fase de escape para permitir que salgan los gases quemados del cilindro."
  },
  {
    id: 20,
    categoryId: 5,
    category: "Culata",
    name: "Bujía",
    function: "Ignición de la mezcla aire-combustible",
    specifications: {
      rosca: "M14",
      alcance: "12.7 mm",
      abertura: "0.9 mm"
    },
    image: "spark-plug.png",
    description: "Dispositivo que genera una chispa eléctrica para encender la mezcla aire-combustible en la cámara de combustión."
  },

  // Categoría: Árbol de Levas
  {
    id: 21,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Árbol de Levas Completo",
    function: "Controla apertura y cierre de válvulas",
    specifications: {
      length: "200 mm",
      weight: "1200 g",
      material: "Acero forjado",
      levas: 4
    },
    image: "camshaft.png",
    description: "Eje rotativo con levas que accionan las válvulas según el ciclo del motor. Se sincroniza con el cigüeñal."
  },
  {
    id: 22,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Leva de Admisión",
    function: "Abre la válvula de admisión",
    specifications: {
      altura: "8 mm",
      ángulo: "120°",
      material: "Acero templado"
    },
    image: "intake-cam.png",
    description: "Protuberancia en el árbol de levas que presiona el taqué para abrir la válvula de admisión."
  },
  {
    id: 23,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Leva de Escape",
    function: "Abre la válvula de escape",
    specifications: {
      altura: "8 mm",
      ángulo: "120°",
      material: "Acero templado"
    },
    image: "exhaust-cam.png",
    description: "Protuberancia en el árbol de levas que presiona el taqué para abrir la válvula de escape."
  },
  {
    id: 24,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Taqué de Válvula",
    function: "Transmite movimiento de leva a válvula",
    specifications: {
      diameter: "15 mm",
      altura: "30 mm",
      material: "Acero"
    },
    image: "valve-tappet.png",
    description: "Elemento de contacto entre la leva y la válvula que transmite el movimiento de apertura."
  },
  {
    id: 25,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Engranaje de Distribución",
    function: "Sincroniza árbol de levas con cigüeñal",
    specifications: {
      dientes: 40,
      diameter: "120 mm",
      material: "Acero"
    },
    image: "timing-gear.png",
    description: "Engranaje que acopla el árbol de levas con el cigüeñal, manteniendo la sincronización exacta del ciclo."
  },
  {
    id: 26,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Cojinete del Árbol de Levas",
    function: "Soporta y reduce fricción del árbol de levas",
    specifications: {
      diameter: "25 mm",
      material: "Bronce",
      grosor: "2 mm"
    },
    image: "camshaft-bearing.png",
    description: "Casquillo que se inserta en la culata para soportar el árbol de levas."
  },
  {
    id: 27,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Correa de Distribución",
    function: "Transmite movimiento del cigüeñal al árbol de levas",
    specifications: {
      ancho: "15 mm",
      dientes: "Trapezoidal",
      material: "Goma reforzada con fibra"
    },
    image: "timing-belt.png",
    description: "Correa de goma dentada que sincroniza el movimiento entre el cigüeñal y el árbol de levas."
  },
  {
    id: 28,
    categoryId: 6,
    category: "Árbol de Levas",
    name: "Tensor de Correa",
    function: "Mantiene tensión de la correa de distribución",
    specifications: {
      type: "Rodillo tensador",
      diameter: "50 mm",
      material: "Acero"
    },
    image: "belt-tensioner.png",
    description: "Dispositivo que mantiene una tensión uniforme en la correa de distribución para evitar que resbale."
  }
];

/**
 * Función para buscar partes por término
 */
export const searchMotorParts = (term) => {
  const lowerTerm = term.toLowerCase();
  return allMotorParts.filter(
    part =>
      part.name.toLowerCase().includes(lowerTerm) ||
      part.category.toLowerCase().includes(lowerTerm) ||
      part.function.toLowerCase().includes(lowerTerm)
  );
};

/**
 * Función para obtener partes por categoría
 */
export const getPartsByCategory = (categoryId) => {
  return allMotorParts.filter(part => part.categoryId === categoryId);
};

/**
 * Función para obtener una parte por ID
 */
export const getPartById = (id) => {
  return allMotorParts.find(part => part.id === id);
};
