import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
import { engineCycle } from '../data/engineCycle';
import './Strokes.css';

const Strokes = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [cycleProgress, setCycleProgress] = useState(0);

  const phase = engineCycle[currentPhase];

  // Auto-play del ciclo
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentPhase((prev) => (prev + 1) % engineCycle.length);
      }, 4000); // Cambiar de fase cada 4 segundos
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Actualizar progreso del ciclo
  useEffect(() => {
    setCycleProgress((currentPhase + 1) * 25); // 25% por cada fase
  }, [currentPhase]);

  const handleNext = () => {
    setCurrentPhase((prev) => (prev + 1) % engineCycle.length);
    setIsAutoPlay(false);
  };

  const handlePrevious = () => {
    setCurrentPhase((prev) => (prev - 1 + engineCycle.length) % engineCycle.length);
    setIsAutoPlay(false);
  };

  const handleReset = () => {
    setCurrentPhase(0);
    setIsAutoPlay(false);
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="strokes-header fade-in">
        <div className="badge">
          <RotateCcw size={14} />
          <span>Ciclo del Motor</span>
        </div>
        <h1 className="strokes-title">
          <span className="title-main">4 Tiempos</span>
          <span className="title-subtitle">del Motor</span>
        </h1>
        <p className="strokes-subtitle">
          Aprende cómo funciona el ciclo completo de un motor de gasolina de 4 tiempos
        </p>
      </header>

      {/* Progress Bar */}
      <div className="cycle-progress-section slide-in-up">
        <div className="progress-label">Progreso del Ciclo</div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar-background">
            <div
              className="progress-bar-fill"
              style={{ width: `${cycleProgress}%` }}
            />
          </div>
          <div className="progress-percentage">{cycleProgress}%</div>
        </div>
        <div className="phase-indicators">
          {engineCycle.map((p, idx) => (
            <div
              key={p.id}
              className={`phase-indicator ${idx === currentPhase ? 'active' : ''} ${idx < currentPhase ? 'completed' : ''}`}
              onClick={() => {
                setCurrentPhase(idx);
                setIsAutoPlay(false);
              }}
              title={`${p.number}. ${p.name}`}
            >
              <span>{p.number}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Cycle Display */}
      <div className="strokes-main-section">
        {/* Visualización del ciclo */}
        <div className="cycle-visualization slide-in-left">
          <div className="cycle-container">
            {/* Animación del pistón */}
            <div className="piston-animation-wrapper">
              <div className={`piston-animation ${phase.number === 1 || phase.number === 4 ? 'moving' : ''}`}>
                {/* Cilindro */}
                <div className="cylinder">
                  <div className="cylinder-wall-left" />
                  <div className="cylinder-chamber">
                    {/* Pistón */}
                    <div className={`piston ${phase.number === 1 ? 'piston-down' : phase.number === 2 || phase.number === 3 ? 'piston-middle' : 'piston-up'}`}>
                      <div className="piston-head" />
                      <div className="piston-rod" />
                    </div>

                    {/* Indicadores de válvulas */}
                    <div className="valve-indicators">
                      <div className={`valve intake-valve ${phase.number === 1 ? 'open' : 'closed'}`} title="Válvula de Admisión">
                        <div className="valve-icon">↓</div>
                      </div>
                      <div className={`valve exhaust-valve ${phase.number === 4 ? 'open' : 'closed'}`} title="Válvula de Escape">
                        <div className="valve-icon">↑</div>
                      </div>
                    </div>

                    {/* Indicador de chispa en fase de combustión */}
                    {phase.number === 3 && (
                      <div className="spark-indicator">
                        <div className="spark" />
                      </div>
                    )}

                    {/* Temperatura y Presión */}
                    <div className="engine-readings">
                      <div className="reading">
                        <span className="label">Temp</span>
                        <span className="value">{phase.temperature}</span>
                      </div>
                      <div className="reading">
                        <span className="label">Pres</span>
                        <span className="value">{phase.pressure}</span>
                      </div>
                    </div>
                  </div>
                  <div className="cylinder-wall-right" />
                </div>

                {/* Cigüeñal */}
                <div className={`crankshaft ${isAutoPlay ? 'rotating' : ''}`}>
                  <div className="crankshaft-base" />
                </div>
              </div>
            </div>

            {/* Información de la fase */}
            <div className="phase-info-box slide-in-right">
              <div className="phase-header" style={{ borderColor: phase.color }}>
                <h2 className="phase-name">{phase.number}. {phase.name}</h2>
                <div className="phase-indicator-dot" style={{ backgroundColor: phase.color }} />
              </div>

              <div className="phase-description">
                <p>{phase.description}</p>
              </div>

              <div className="phase-details">
                {/* Key Points */}
                <div className="detail-section">
                  <h3 className="detail-title">📌 Puntos Clave</h3>
                  <ul className="key-points-list">
                    {phase.keyPoints.map((point, idx) => (
                      <li key={idx} className="key-point">
                        <span className="point-bullet">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Affected Parts */}
                <div className="detail-section">
                  <h3 className="detail-title">⚙️ Partes Afectadas</h3>
                  <div className="parts-list">
                    {phase.affectedParts.map((part, idx) => (
                      <span key={idx} className="part-badge">{part}</span>
                    ))}
                  </div>
                </div>

                {/* Extended Description */}
                <div className="detail-section">
                  <h3 className="detail-title">📖 Descripción Detallada</h3>
                  <p className="extended-description">
                    {phase.detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="strokes-controls slide-in-up">
          <button
            className="control-btn prev-btn"
            onClick={handlePrevious}
            title="Fase anterior"
          >
            <ChevronLeft size={20} />
            <span>Anterior</span>
          </button>

          <button
            className={`control-btn play-btn ${isAutoPlay ? 'playing' : ''}`}
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            title={isAutoPlay ? 'Pausar' : 'Reproducir'}
          >
            {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
            <span>{isAutoPlay ? 'Pausar' : 'Reproducir'}</span>
          </button>

          <button
            className="control-btn reset-btn"
            onClick={handleReset}
            title="Reiniciar ciclo"
          >
            <RotateCcw size={20} />
            <span>Reiniciar</span>
          </button>

          <button
            className="control-btn next-btn"
            onClick={handleNext}
            title="Siguiente fase"
          >
            <span>Siguiente</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Educational Info */}
      <section className="educational-info-section">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">🔄</div>
            <h3 className="info-title">Un Ciclo Completo</h3>
            <p className="info-text">
              El ciclo de 4 tiempos requiere 2 revoluciones completas del cigüeñal (720°) para completarse.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">💪</div>
            <h3 className="info-title">Solo Combustión Genera Potencia</h3>
            <p className="info-text">
              Solo en el 3er tiempo (combustión) se genera energía. Los otros tiempos consumen energía del volante.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">🌡️</div>
            <h3 className="info-title">Extremos de Temperatura</h3>
            <p className="info-text">
              La temperatura varía de 40°C en admisión hasta 2,500°C en combustión.
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3 className="info-title">Presión Variable</h3>
            <p className="info-text">
              La presión aumenta de 0.5 bar en admisión a 60 bar en combustión, luego vuelve a bajar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strokes;
