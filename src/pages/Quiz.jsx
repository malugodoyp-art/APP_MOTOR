import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import './Quiz.css';

const questions = [
  {
    questionText: '¿En qué tiempo se genera la chispa a través de la bujía?',
    answerOptions: [
      { answerText: 'Escape', isCorrect: false },
      { answerText: 'Compresión', isCorrect: false },
      { answerText: 'Explosión', isCorrect: true },
      { answerText: 'Admisión', isCorrect: false },
    ],
  },
  {
    questionText: '¿Qué componente une al pistón con el cigüeñal?',
    answerOptions: [
      { answerText: 'La Biela', isCorrect: true },
      { answerText: 'El Árbol de Levas', isCorrect: false },
      { answerText: 'La Válvula', isCorrect: false },
      { answerText: 'El Bloque', isCorrect: false },
    ],
  },
  {
    questionText: '¿Qué sucede durante el tiempo de Escape?',
    answerOptions: [
      { answerText: 'Entra la mezcla de aire/combustible', isCorrect: false },
      { answerText: 'Se comprimen los gases', isCorrect: false },
      { answerText: 'Se expulsan los gases residuales', isCorrect: true },
      { answerText: 'Baja el pistón por detonación', isCorrect: false },
    ],
  },
  {
    questionText: '¿Qué pieza se encarga de abrir y cerrar las válvulas?',
    answerOptions: [
      { answerText: 'El Cigüeñal', isCorrect: false },
      { answerText: 'El Árbol de Levas', isCorrect: true },
      { answerText: 'El Pistón', isCorrect: false },
      { answerText: 'La Culata', isCorrect: false },
    ],
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="page-container animate-fade-in">
      <h2 className="page-title">Test de <span className="text-gradient-orange">Conocimientos</span></h2>
      <p className="page-desc">Evalúa lo que has aprendido.</p>

      <div className="quiz-container glass-panel">
        {showScore ? (
          <div className="score-section">
            <div className={`score-badge ${score >= 3 ? 'success' : 'danger'}`}>
              {score >= 3 ? <CheckCircle size={40} /> : <XCircle size={40} />}
            </div>
            <h3>Tu Puntuación: {score} de {questions.length}</h3>
            <p className="score-msg">
              {score >= 3 
                ? '¡Excelente trabajo! Has comprendido los fundamentos del motor.' 
                : 'Aún puedes mejorar. Te recomendamos repasar los módulos anteriores.'}
            </p>
            <button className="btn-primary" onClick={resetQuiz}>Volver a intentar</button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button 
                  key={index} 
                  className="btn-answer glass-card"
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
