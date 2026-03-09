import { Flame, Shield, Star, Award, MessageSquareText, ShieldAlert } from 'lucide-react';
import { MallaType, UserStats } from '../types';
import { calculateNextLevelXp, calculateCurrentLevelXp } from '../lib/gamification';

interface HomeProps {
  onSelectMalla: (malla: MallaType) => void;
  onOpenChat: () => void;
  onOpenProfile: () => void;
  stats: UserStats;
}

const mallas = [
  { id: 'postulante', name: 'Malla Postulante', icon: Shield, color: 'bg-zinc-600', desc: 'Nivel de entrada para aspirantes' },
  { id: 'inicial', name: 'Malla Inicial', icon: Flame, color: 'bg-orange-500', desc: 'Estándar de Bombero Inicial' },
  { id: 'operativa', name: 'Malla Operativa', icon: ShieldAlert, color: 'bg-red-600', desc: 'Estándar de Bombero Operativo' },
  { id: 'profesional', name: 'Malla Profesional', icon: Star, color: 'bg-blue-600', desc: 'Estándar de Bombero Profesional' },
  { id: 'especialidades', name: 'Malla Especialidades', icon: Award, color: 'bg-purple-600', desc: 'Cursos complementarios y rescate técnico' },
];

export function Home({ onSelectMalla, onOpenChat, onOpenProfile, stats }: HomeProps) {
  const nextLevelXp = calculateNextLevelXp(stats.level);
  const currentLevelBaseXp = calculateCurrentLevelXp(stats.level);
  const progress = Math.max(0, Math.min(100, ((stats.xp - currentLevelBaseXp) / (nextLevelXp - currentLevelBaseXp)) * 100));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-950 text-zinc-100 relative">
      {/* Profile Header */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
        <button 
          onClick={onOpenProfile}
          className="flex items-center gap-3 p-2 pr-4 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20 group-hover:scale-110 transition-transform">
            <span className="font-bold text-sm">{stats.level}</span>
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-medium text-zinc-300">Nivel {stats.level}</p>
            <div className="w-24 h-1.5 bg-zinc-800 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-yellow-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </button>
      </div>

      <div className="max-w-2xl w-full space-y-8 mt-16 sm:mt-0">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center p-4 bg-red-600/20 rounded-full mb-4">
            <Flame className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Pasa la <span className="text-red-500">Malla</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Simulador de exámenes para Bomberos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mallas.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => onSelectMalla(m.id as MallaType)}
                className="flex flex-col items-start p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-800/50 text-left group"
              >
                <div className={`p-3 rounded-xl ${m.color} bg-opacity-20 text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{m.name}</h3>
                <p className="text-sm text-zinc-400">{m.desc}</p>
              </button>
            );
          })}
        </div>

        <div className="pt-8 border-t border-zinc-800">
          <button
            onClick={onOpenChat}
            className="w-full flex items-center justify-between p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-800/50 group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Asistencia de estudio</h3>
                <p className="text-sm text-zinc-400">Haz tus preguntas y recibe respuestas basadas en los manuales</p>
              </div>
            </div>
            <div className="text-zinc-500 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
