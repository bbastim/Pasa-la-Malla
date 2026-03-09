import React, { memo } from 'react';
import { Question } from '../types';
import { RotateCcw, Home as HomeIcon, Timer, ArrowUpCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { BADGES } from '../lib/gamification';

export interface SessionRewards {
  xp: number;
  newBadges: string[];
  leveledUp: boolean;
  newLevel: number;
}

interface ResultsProps {
  questions: Question[];
  answers: Record<string, number>;
  score: number;
  timeElapsed: number;
  rewards: SessionRewards | null;
  onRestart: () => void;
  onHome: () => void;
  mode: 'entrenamiento' | 'examen';
}

const QuestionReviewItem = memo(({ q, i, userAnswer }: { q: Question, i: number, userAnswer: number | undefined }) => {
  const isCorrect = userAnswer === q.correctAnswerIndex;
  
  // If the user didn't answer this question (e.g., skipped in training), we can show it as skipped or just not render it
  if (userAnswer === undefined) return null;

  return (
    <div className={`p-6 rounded-2xl border ${isCorrect ? 'border-green-500/20 bg-green-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="shrink-0">
          <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {i + 1}
          </span>
        </div>
        <div className="space-y-4 flex-1">
          <p className="text-lg font-medium">{q.text}</p>
          
          <div className="space-y-2">
            {q.options.map((opt, optIdx) => {
              const isSelected = userAnswer === optIdx;
              const isActualCorrect = q.correctAnswerIndex === optIdx;
              
              return (
                <div 
                  key={optIdx} 
                  className={`px-4 py-3 rounded-xl text-sm md:text-base flex items-center gap-3 ${
                    isActualCorrect ? 'bg-green-500/20 text-green-100 border border-green-500/30' :
                    isSelected && !isActualCorrect ? 'bg-red-500/20 text-red-100 border border-red-500/30' :
                    'bg-zinc-900/50 text-zinc-400 border border-transparent'
                  }`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${isActualCorrect ? 'bg-green-400' : isSelected ? 'bg-red-400' : 'bg-zinc-700'}`} />
                  {opt}
                </div>
              );
            })}
          </div>
          
          {!isCorrect && (
            <div className="mt-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm md:text-base text-zinc-300">
              <span className="font-semibold text-white">Explicación: </span>
              {q.explanation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export function Results({ questions, answers, score, timeElapsed, rewards, onRestart, onHome, mode }: ResultsProps) {
  const answeredCount = Object.keys(answers).length;
  const percentage = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;
  const passed = percentage >= 70; // 70% passing grade

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-8 ${mode === 'entrenamiento' ? 'border-sky-500 text-sky-500' : passed ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'} mb-4`}>
            <span className="text-4xl font-bold">{percentage}%</span>
          </div>
          <h1 className="text-4xl font-bold">
            {mode === 'entrenamiento' ? 'Entrenamiento Finalizado' : passed ? '¡Aprobado!' : 'No Aprobado'}
          </h1>
          <p className="text-zinc-400 text-lg">
            Respondiste correctamente {score} de {answeredCount} preguntas.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
            <Timer className="w-5 h-5" />
            <span>Tiempo total: <span className="font-mono font-medium text-white">{formatTime(timeElapsed)}</span></span>
          </div>

          {/* Gamification Rewards */}
          {rewards && rewards.xp > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center max-w-md mx-auto"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Recompensas</h3>
              <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold text-2xl mb-4">
                <ArrowUpCircle className="w-6 h-6" />
                +{rewards.xp} XP
              </div>
              
              {rewards.leveledUp && (
                <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-full font-bold animate-pulse mb-4">
                  ¡Alcanzaste el Nivel {rewards.newLevel}!
                </div>
              )}

              {rewards.newBadges.length > 0 && (
                <div className="space-y-3 mt-4">
                  <p className="text-sm text-zinc-400">Nuevas insignias desbloqueadas:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {rewards.newBadges.map(badgeId => {
                      const badge = BADGES.find(b => b.id === badgeId);
                      if (!badge) return null;
                      return (
                        <div key={badge.id} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${badge.bg} ${badge.border} ${badge.color}`}>
                          <Award className="w-4 h-4" />
                          <span className="text-sm font-medium">{badge.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={onRestart}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors font-medium text-lg"
            >
              <RotateCcw className="w-5 h-5" />
              Reintentar
            </button>
            <button
              onClick={onHome}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors font-medium text-lg"
            >
              <HomeIcon className="w-5 h-5" />
              Inicio
            </button>
          </div>
        </div>

        {/* Review */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-4">Revisión de respuestas</h2>
          
          {questions.map((q, i) => (
            <QuestionReviewItem key={q.id} q={q} i={i} userAnswer={answers[q.id]} />
          ))}
        </div>

      </div>
    </div>
  );
}
