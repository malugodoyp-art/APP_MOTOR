import { useState, useCallback, useEffect } from 'react';

/**
 * Hook para manejar el progreso de cuestionarios
 * @returns {Object} - { userProgress, updateProgress, calculateOverallProgress, ... }
 */
export const useQuizProgress = (initialProgress = {}) => {
  const [userProgress, setUserProgress] = useState({
    overallProgress: initialProgress.overallProgress || 0,
    completedQuizzes: initialProgress.completedQuizzes || 0,
    totalQuizzes: initialProgress.totalQuizzes || 4,
    currentQuiz: initialProgress.currentQuiz || null,
    questionsAnswered: {
      correct: initialProgress.questionsAnswered?.correct || 0,
      incorrect: initialProgress.questionsAnswered?.incorrect || 0,
      skipped: initialProgress.questionsAnswered?.skipped || 0
    },
    testStatus: initialProgress.testStatus || {},
    lastUpdated: initialProgress.lastUpdated || new Date()
  });

  /**
   * Actualizar respuesta de pregunta
   */
  const answerQuestion = useCallback((quizId, questionId, isCorrect) => {
    setUserProgress(prev => ({
      ...prev,
      questionsAnswered: {
        ...prev.questionsAnswered,
        [isCorrect ? 'correct' : 'incorrect']: 
          prev.questionsAnswered[isCorrect ? 'correct' : 'incorrect'] + 1
      }
    }));
  }, []);

  /**
   * Marcar cuestionario como completado
   */
  const completeQuiz = useCallback((quizId, score) => {
    setUserProgress(prev => ({
      ...prev,
      completedQuizzes: prev.completedQuizzes + 1,
      testStatus: {
        ...prev.testStatus,
        [quizId]: {
          completed: true,
          score: score,
          completedDate: new Date()
        }
      }
    }));
  }, []);

  /**
   * Actualizar progreso del cuestionario actual
   */
  const updateCurrentQuizProgress = useCallback((quizId, progress) => {
    setUserProgress(prev => ({
      ...prev,
      currentQuiz: quizId,
      testStatus: {
        ...prev.testStatus,
        [quizId]: {
          ...prev.testStatus[quizId],
          progress: progress
        }
      }
    }));
  }, []);

  /**
   * Calcular progreso general
   */
  const calculateOverallProgress = useCallback(() => {
    const percentage = Math.round(
      (userProgress.completedQuizzes / userProgress.totalQuizzes) * 100
    );
    
    setUserProgress(prev => ({
      ...prev,
      overallProgress: percentage
    }));
    
    return percentage;
  }, [userProgress.completedQuizzes, userProgress.totalQuizzes]);

  /**
   * Reiniciar progreso
   */
  const resetProgress = useCallback(() => {
    setUserProgress({
      overallProgress: 0,
      completedQuizzes: 0,
      totalQuizzes: 4,
      currentQuiz: null,
      questionsAnswered: {
        correct: 0,
        incorrect: 0,
        skipped: 0
      },
      testStatus: {},
      lastUpdated: new Date()
    });
  }, []);

  /**
   * Obtener estadísticas
   */
  const getStatistics = useCallback(() => {
    const total = 
      userProgress.questionsAnswered.correct +
      userProgress.questionsAnswered.incorrect +
      userProgress.questionsAnswered.skipped;

    const accuracy = total > 0
      ? Math.round((userProgress.questionsAnswered.correct / total) * 100)
      : 0;

    return {
      totalAnswered: total,
      correctAnswers: userProgress.questionsAnswered.correct,
      incorrectAnswers: userProgress.questionsAnswered.incorrect,
      skippedAnswers: userProgress.questionsAnswered.skipped,
      accuracy: accuracy,
      completedQuizzes: userProgress.completedQuizzes,
      totalQuizzes: userProgress.totalQuizzes,
      overallProgress: userProgress.overallProgress
    };
  }, [userProgress]);

  /**
   * Efecto para recalcular progreso cuando cambia completedQuizzes
   */
  useEffect(() => {
    calculateOverallProgress();
  }, [userProgress.completedQuizzes, calculateOverallProgress]);

  return {
    userProgress,
    answerQuestion,
    completeQuiz,
    updateCurrentQuizProgress,
    calculateOverallProgress,
    resetProgress,
    getStatistics,
    setUserProgress
  };
};

/**
 * Hook para manejar el estado de un cuestionario individual
 */
export const useQuizState = (quizId, totalQuestions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  /**
   * Responder pregunta
   */
  const answerCurrentQuestion = useCallback((optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    // Avanzar a siguiente pregunta si no es la última
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }, [answers, currentQuestion, totalQuestions]);

  /**
   * Ir a pregunta específica
   */
  const goToQuestion = useCallback((questionIndex) => {
    if (questionIndex >= 0 && questionIndex < totalQuestions) {
      setCurrentQuestion(questionIndex);
    }
  }, [totalQuestions]);

  /**
   * Terminar cuestionario
   */
  const finishQuiz = useCallback((finalScore) => {
    setScore(finalScore);
    setIsFinished(true);
  }, []);

  /**
   * Reiniciar cuestionario
   */
  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers(Array(totalQuestions).fill(null));
    setIsFinished(false);
    setScore(0);
  }, [totalQuestions]);

  return {
    currentQuestion,
    answers,
    isFinished,
    score,
    answerCurrentQuestion,
    goToQuestion,
    finishQuiz,
    resetQuiz,
    questionsAnswered: answers.filter(a => a !== null).length,
    progress: ((currentQuestion + 1) / totalQuestions) * 100
  };
};
