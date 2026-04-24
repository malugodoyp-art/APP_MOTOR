import { useState } from 'react';
import './Strokes.css';

const strokesData = [
  {
    id: 1,
    title: '1. Admisión',
    description: 'El pistón desciende dentro del cilindro. La válvula de admisión se abre para permitir el ingreso de la mezcla de aire y combustible.',
    color: '#3b82f6', // Blue
    animation: 'intake-anim'
  },
  {
    id: 2,
    title: '2. Compresión',
    description: 'Las válvulas se cierran. El pistón sube, comprimiendo fuertemente la mezcla de aire y combustible en la cámara de combustión.',
    color: '#8b5cf6', // Purple
    animation: 'compression-anim'
  },
  {
    id: 3,
    title: '3. Explosión',
    description: 'La bujía genera una chispa que enciende la mezcla comprimida. La explosión hace descender el pistón violentamente hacia el punto muerto inferior.',
    color: '#ef4444', // Red/Orange
    animation: 'power-anim'
  },
  {
    id: 4,
    title: '4. Escape',
    description: 'La válvula de escape se abre. El pistón sube de nuevo, empujando los gases residuales de la combustión hacia el exterior.',
    color: '#64748b', // Slate/Gray
    animation: 'exhaust-anim'
  }
];

const Strokes = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % strokesData.length);
  };

  const currentStroke = strokesData[activeStep];

  return (
    <div className="page-container animate-fade-in">
      <h2 className="page-title">Los 4 <span className="text-gradient">Tiempos</span></h2>
      <p className="page-desc">Interactúa para aprender cada fase del motor.</p>

      <div className="stroke-visualizer glass-panel">
        <div 
          className="stroke-indicator glow-effect" 
          style={{ '--glow-color': currentStroke.color, backgroundColor: `${currentStroke.color}20`, border: `2px solid ${currentStroke.color}` }}
        >
          <div className="engine-animation-mock">
            {/* Simple CSS shape for piston representation */}
            <div className={`piston ${currentStroke.animation}`}>
               <div className="piston-head"></div>
               <div className="piston-rod"></div>
            </div>
            {activeStep === 2 && <div className="spark-explosion">💥</div>}
            {activeStep === 0 && <div className="gas-intake">💨</div>}
            {activeStep === 3 && <div className="gas-exhaust">💨</div>}
          </div>
        </div>
        
        <div className="stroke-controls">
          {strokesData.map((stroke, index) => (
            <button
              key={stroke.id}
              className={`step-btn ${activeStep === index ? 'active' : ''}`}
              style={{ backgroundColor: activeStep === index ? stroke.color : '' }}
              onClick={() => setActiveStep(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="stroke-info glass-card">
          <h3 style={{ color: currentStroke.color }}>{currentStroke.title}</h3>
          <p>{currentStroke.description}</p>
        </div>

        <button className="btn-primary mt-4" onClick={nextStep} style={{ background: currentStroke.color, boxShadow: `0 4px 15px ${currentStroke.color}40` }}>
          Siguiente Fase
        </button>
      </div>
    </div>
  );
};

export default Strokes;
