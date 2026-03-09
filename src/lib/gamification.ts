import { UserStats } from '../types';

export const BADGES = [
  { id: 'first_quiz', name: 'Bautizo de Fuego', description: 'Completa tu primera evaluación.', icon: 'Flame', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { id: 'perfect_score', name: 'Ataque Preciso', description: 'Obtén un puntaje perfecto (100%).', icon: 'Target', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { id: 'veteran_100', name: 'Veterano', description: 'Responde 100 preguntas correctamente en total.', icon: 'Award', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { id: 'speed_demon', name: 'Respuesta Rápida', description: 'Aprueba una evaluación en menos de 2 minutos.', icon: 'Zap', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { id: 'master_postulante', name: 'Aspirante Destacado', description: 'Puntaje perfecto en la Malla Postulante.', icon: 'Badge', color: 'text-zinc-400', bg: 'bg-zinc-400/10', border: 'border-zinc-400/20' },
  { id: 'master_inicial', name: 'Maestro Inicial', description: 'Puntaje perfecto en la Malla Inicial.', icon: 'Shield', color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/20' },
  { id: 'master_operativa', name: 'Maestro Operativo', description: 'Puntaje perfecto en la Malla Operativa.', icon: 'ShieldAlert', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  { id: 'master_profesional', name: 'Maestro Profesional', description: 'Puntaje perfecto en la Malla Profesional.', icon: 'Star', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  { id: 'master_especialidades', name: 'Especialista', description: 'Puntaje perfecto en Malla Especialidades.', icon: 'Medal', color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
];

export const calculateLevel = (xp: number) => Math.floor(Math.sqrt(xp / 100)) + 1;
export const calculateNextLevelXp = (level: number) => Math.pow(level, 2) * 100;
export const calculateCurrentLevelXp = (level: number) => Math.pow(level - 1, 2) * 100;

export const getInitialStats = (): UserStats => {
  const saved = localStorage.getItem('bomberos_user_stats');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        totalTimeSpent: parsed.totalTimeSpent || 0,
        totalQuestionsAnswered: parsed.totalQuestionsAnswered || 0,
        fastestQuizTime: parsed.fastestQuizTime !== undefined ? parsed.fastestQuizTime : null
      };
    } catch (e) {}
  }
  return {
    xp: 0,
    level: 1,
    totalCorrect: 0,
    quizzesCompleted: 0,
    perfectScores: 0,
    earnedBadges: [],
    totalTimeSpent: 0,
    totalQuestionsAnswered: 0,
    fastestQuizTime: null
  };
};

export const saveStats = (stats: UserStats) => {
  localStorage.setItem('bomberos_user_stats', JSON.stringify(stats));
};
