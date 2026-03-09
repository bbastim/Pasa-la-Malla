import React from 'react';
import { X, Flame, Target, Award, Zap, Shield, ShieldAlert, Star, Medal, Trophy, Clock, Timer, Zap as FastIcon } from 'lucide-react';
import { UserStats } from '../types';
import { BADGES, calculateNextLevelXp, calculateCurrentLevelXp } from '../lib/gamification';

const iconMap: Record<string, any> = { Flame, Target, Award, Zap, Shield, ShieldAlert, Star, Medal };

interface ProfileModalProps {
  stats: UserStats;
  onClose: () => void;
}

export function ProfileModal({ stats, onClose }: ProfileModalProps) {
  const nextLevelXp = calculateNextLevelXp(stats.level);
  const currentLevelBaseXp = calculateCurrentLevelXp(stats.level);
  const progress = Math.max(0, Math.min(100, ((stats.xp - currentLevelBaseXp) / (nextLevelXp - currentLevelBaseXp)) * 100));

  const formatTime = (seconds: number | null) => {
    if (seconds === null || seconds === undefined) return '--:--';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h > 0) {
      return `${h}h ${m}m ${s}s`;
    }
    return `${m}m ${s}s`;
  };

  const avgTimePerQuestion = stats.totalQuestionsAnswered > 0 
    ? Math.round(stats.totalTimeSpent / stats.totalQuestionsAnswered) 
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Mi Perfil</h3>
              <p className="text-xs text-zinc-400">Progreso y Logros</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Level & XP */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
              <div className="h-full bg-yellow-500 transition-all duration-1000" style={{ width: `${progress}%` }} />
            </div>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10 border-2 border-yellow-500/20 text-yellow-500 mb-4">
              <span className="text-3xl font-bold">{stats.level}</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-1">Nivel {stats.level}</h4>
            <p className="text-sm text-zinc-400 mb-4">{stats.xp} / {nextLevelXp} XP</p>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800/50">
              <div>
                <p className="text-2xl font-bold text-white">{stats.quizzesCompleted}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Evaluaciones</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stats.totalCorrect}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Correctas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stats.perfectScores}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Perfectas</p>
              </div>
            </div>
          </div>

          {/* Time Stats */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-zinc-400" />
              Estadísticas de Tiempo
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center">
                <Clock className="w-6 h-6 text-sky-500 mb-2" />
                <p className="text-xl font-bold text-white">{formatTime(stats.totalTimeSpent)}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Tiempo Total</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center">
                <Timer className="w-6 h-6 text-emerald-500 mb-2" />
                <p className="text-xl font-bold text-white">{avgTimePerQuestion}s</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Promedio / Pregunta</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col items-center text-center">
                <FastIcon className="w-6 h-6 text-orange-500 mb-2" />
                <p className="text-xl font-bold text-white">{formatTime(stats.fastestQuizTime)}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Evaluación más rápida</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-zinc-400" />
              Insignias ({stats.earnedBadges.length}/{BADGES.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BADGES.map(badge => {
                const earned = stats.earnedBadges.includes(badge.id);
                const Icon = iconMap[badge.icon] || Award;
                
                return (
                  <div key={badge.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                    earned ? `bg-zinc-950 ${badge.border}` : 'bg-zinc-950/50 border-zinc-800/50 opacity-50 grayscale'
                  }`}>
                    <div className={`p-3 rounded-xl shrink-0 ${earned ? badge.bg + ' ' + badge.color : 'bg-zinc-900 text-zinc-600'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className={`font-semibold mb-1 ${earned ? 'text-white' : 'text-zinc-400'}`}>{badge.name}</h5>
                      <p className="text-xs text-zinc-500 leading-relaxed">{badge.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
