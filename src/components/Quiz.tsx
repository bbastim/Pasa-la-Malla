import { useState, useEffect, useCallback } from 'react';
import { Question } from '../types';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, AlertCircle, Play, Pause, SkipForward, Timer, Flag } from 'lucide-react';
import { ReportModal } from './ReportModal';

interface QuizProps {
  questions: Question[];
  mode: 'entrenamiento' | 'examen';
  onFinish: (score: number, answers: Record<string, number>, timeElapsed: number) => void;
  onSurrender: () => void;
}

export function Quiz({ questions, mode, onFinish, onSurrender }: QuizProps) {
  const [remainingIndices, setRemainingIndices] = useState<number[]>(questions.map((_, i) => i));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState(0);
  const [showReportModal, setShowReportModal] = useState(false);
  
  const [isPaused, setIsPaused] = useState(false);
  const [isSurrendered, setIsSurrendered] = useState(false);
  const [showSurrenderConfirm, setShowSurrenderConfirm] = useState(false);
  const [showNoDoubtMessage, setShowNoDoubtMessage] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const [showCorrectAnimation, setShowCorrectAnimation] = useState(false);
  const [showErrorFlash, setShowErrorFlash] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused && !isSurrendered && remainingIndices.length > 0) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, isSurrendered, remainingIndices.length]);

  if (remainingIndices.length === 0) return null;

  const currentIndex = remainingIndices[0];
  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = useCallback((index: number) => {
    if (isAnswered || isPaused || isSurrendered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    const newAnswers = { ...answers, [currentQuestion.id]: index };
    setAnswers(newAnswers);

    if (index === currentQuestion.correctAnswerIndex) {
      setScore(s => s + 1);
      setShowCorrectAnimation(true);
      setTimeout(() => setShowCorrectAnimation(false), 1500);
    } else {
      setShowErrorFlash(true);
      setTimeout(() => setShowErrorFlash(false), 500);
    }
    
    // In examen mode, automatically go to next question after a short delay
    if (mode === 'examen') {
      setTimeout(() => {
        if (remainingIndices.length === 1) {
          onFinish(score + (index === currentQuestion.correctAnswerIndex ? 1 : 0), { ...answers, [currentQuestion.id]: index }, timeElapsed);
        } else {
          setRemainingIndices(prev => prev.slice(1));
          setSelectedOption(null);
          setIsAnswered(false);
        }
      }, 1000);
    }
  }, [isAnswered, isPaused, isSurrendered, answers, currentQuestion, mode, remainingIndices.length, score, timeElapsed, onFinish]);

  const handleNext = useCallback(() => {
    if (mode === 'entrenamiento') {
      setRemainingIndices(prev => {
        const nextIdx = Math.floor(Math.random() * questions.length);
        return [nextIdx, ...prev];
      });
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      if (remainingIndices.length === 1) {
        onFinish(score, answers, timeElapsed);
      } else {
        setRemainingIndices(prev => prev.slice(1));
        setSelectedOption(null);
        setIsAnswered(false);
      }
    }
  }, [mode, questions.length, remainingIndices.length, score, answers, timeElapsed, onFinish]);

  const handleSkip = useCallback(() => {
    if (isPaused || isSurrendered || showSurrenderConfirm || showNoDoubtMessage) return;
    if (mode === 'entrenamiento') {
      setRemainingIndices(prev => {
        const nextIdx = Math.floor(Math.random() * questions.length);
        return [nextIdx, ...prev];
      });
    } else {
      if (remainingIndices.length === 1) return;
      setRemainingIndices(prev => {
        const newArr = [...prev];
        const first = newArr.shift()!;
        newArr.push(first);
        return newArr;
      });
    }
    setSelectedOption(null);
    setIsAnswered(false);
  }, [isPaused, isSurrendered, showSurrenderConfirm, showNoDoubtMessage, mode, questions.length, remainingIndices.length]);

  const handleSurrenderClick = () => {
    setIsPaused(true);
    setShowSurrenderConfirm(true);
  };

  const confirmSurrender = () => {
    setShowSurrenderConfirm(false);
    setIsSurrendered(true);
  };

  const cancelSurrender = () => {
    setShowSurrenderConfirm(false);
    setShowNoDoubtMessage(true);
    setTimeout(() => {
      setShowNoDoubtMessage(false);
      setIsPaused(false);
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col p-4 md:p-8">
      {/* Error Flash Overlay */}
      {showErrorFlash && (
        <motion.div 
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-red-600 pointer-events-none"
        />
      )}

      <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm font-medium text-zinc-400 flex items-center gap-4">
            <span>{mode === 'examen' ? `Pregunta ${answeredCount + 1} de ${questions.length}` : `Preguntas respondidas: ${answeredCount}`}</span>
            <div className="flex items-center gap-1.5 text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
              <Timer className="w-4 h-4" />
              <span className="font-mono">{formatTime(timeElapsed)}</span>
            </div>
          </div>
          {mode === 'examen' && (
            <div className="h-2 flex-1 bg-zinc-800 rounded-full overflow-hidden ml-4">
              <div 
                className="h-full bg-red-500 transition-all duration-300" 
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Pause Overlay */}
        {isPaused && !isSurrendered && !showSurrenderConfirm && !showNoDoubtMessage && (
          <div className="absolute inset-0 z-10 bg-zinc-950/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl border border-zinc-800">
            <Pause className="w-16 h-16 text-zinc-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Evaluación en Pausa</h3>
            <p className="text-zinc-400 mb-6">El tiempo se ha detenido.</p>
            <button
              onClick={() => setIsPaused(false)}
              className="px-8 py-3 bg-white text-black font-medium rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Reanudar
            </button>
          </div>
        )}

        {/* Surrender Confirmation Overlay */}
        {showSurrenderConfirm && (
          <div className="absolute inset-0 z-30 bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center rounded-2xl border border-red-500/20 p-8 text-center">
            <AlertCircle className="w-16 h-16 text-yellow-500 mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Estás seguro de rendirte?</h3>
            <p className="text-zinc-400 mb-8 max-w-md">
              Un bombero nunca abandona a su equipo ni a la ciudadanía. ¿Seguro que quieres retirarte ahora?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <button
                onClick={confirmSurrender}
                className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
              >
                Sí, me rindo
              </button>
              <button
                onClick={cancelSurrender}
                className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors"
              >
                No, continuar
              </button>
            </div>
          </div>
        )}

        {/* No Doubt Message Overlay */}
        {showNoDoubtMessage && (
          <div className="absolute inset-0 z-30 bg-zinc-950/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl border border-green-500/20 p-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">“No dudo de ti, continuamos…”</h3>
              <p className="text-zinc-400">Retomando la evaluación...</p>
            </motion.div>
          </div>
        )}

        {/* Surrender Overlay */}
        {isSurrendered && (
          <div className="absolute inset-0 z-20 bg-zinc-950 flex flex-col items-center justify-center rounded-2xl border border-zinc-800 p-8 text-center">
            <Flag className="w-16 h-16 text-red-500 mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
              Este es el momento de rendirse, no en las emergencias.<br/>
              La ciudadanía necesita respuestas a la emergencias. No dudas.<br/>
              Vamos, es hora de volver al cuartel...<br/>
              <span className="text-red-500">¡a estudiar y entrenar!</span>
            </h3>
            <button
              onClick={onSurrender}
              className="mt-8 px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-zinc-200 transition-colors"
            >
              Volver al Inicio
            </button>
          </div>
        )}

        {/* Question */}
        <motion.div 
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
              <span>{currentQuestion.course}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className={
                currentQuestion.difficulty === 'Fácil' ? 'text-green-400' :
                currentQuestion.difficulty === 'Medio' ? 'text-yellow-400' : 'text-red-400'
              }>{currentQuestion.difficulty}</span>
            </div>

            <button
              onClick={() => setShowReportModal(true)}
              disabled={isPaused || isSurrendered}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors text-sm font-medium border border-red-500/20 disabled:opacity-50"
              title="Reportar error en la pregunta"
            >
              <AlertCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Reportar</span>
            </button>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === currentQuestion.correctAnswerIndex;
              
              let btnClass = "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between relative overflow-hidden ";
              
              if (!isAnswered) {
                btnClass += "border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800";
              } else {
                if (mode === 'examen') {
                  if (isSelected) {
                    btnClass += "border-blue-500/50 bg-blue-500/10 text-blue-100";
                  } else {
                    btnClass += "border-zinc-800 bg-zinc-900/50 opacity-50";
                  }
                } else {
                  if (isCorrect) {
                    btnClass += "border-green-500/50 bg-green-500/10 text-green-100";
                  } else if (isSelected && !isCorrect) {
                    btnClass += "border-red-500/50 bg-red-500/10 text-red-100";
                  } else {
                    btnClass += "border-zinc-800 bg-zinc-900/50 opacity-50";
                  }
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered || isPaused || isSurrendered}
                  className={btnClass}
                >
                  {isAnswered && isCorrect && showCorrectAnimation && (
                    <motion.div
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-green-500 pointer-events-none"
                    />
                  )}
                  <span className="text-lg relative z-10">{option}</span>
                  <div className="flex items-center relative z-10">
                    {isAnswered && isCorrect && mode === 'entrenamiento' && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 ml-4" />}
                    {isAnswered && isSelected && !isCorrect && mode === 'entrenamiento' && <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-4" />}
                  </div>
                </button>
              );
            })}
          </div>

          {isAnswered && mode === 'entrenamiento' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden"
            >
              <p className="text-sm text-zinc-300">
                <span className="font-semibold text-white">Explicación: </span>
                {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-between items-center">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              disabled={isSurrendered}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                isPaused 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 disabled:opacity-50'
              }`}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              <span className="hidden sm:inline">{isPaused ? 'Reanudar' : 'Pausa'}</span>
            </button>

            {!isAnswered && mode === 'entrenamiento' && (
              <button
                onClick={handleSkip}
                disabled={isPaused || isSurrendered}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border border-yellow-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <SkipForward className="w-5 h-5" />
                <span className="hidden sm:inline">Saltar pregunta</span>
              </button>
            )}

            {mode === 'entrenamiento' ? (
              <button
                onClick={handleSurrenderClick}
                disabled={isPaused || isSurrendered}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border border-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Flag className="w-5 h-5" />
                <span className="hidden sm:inline">Terminar entrenamiento</span>
              </button>
            ) : (
              <button
                onClick={handleSurrenderClick}
                disabled={isPaused || isSurrendered}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Flag className="w-5 h-5" />
                <span className="hidden sm:inline">Me rindo</span>
              </button>
            )}
          </div>

          {mode === 'entrenamiento' && (
            <button
              onClick={handleNext}
              disabled={!isAnswered || isPaused || isSurrendered}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                isAnswered && !isPaused && !isSurrendered
                  ? 'bg-white text-black hover:bg-zinc-200' 
                  : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              }`}
            >
              {mode === 'entrenamiento' ? 'Siguiente' : (remainingIndices.length === 1 ? 'Finalizar' : 'Siguiente')}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {showReportModal && (
        <ReportModal 
          question={currentQuestion} 
          onClose={() => setShowReportModal(false)} 
        />
      )}
    </div>
  );
}
