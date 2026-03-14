import { useState, useEffect } from 'react';
import { ArrowLeft, Play, FileText } from 'lucide-react';
import { MallaType, Course } from '../types';
import { getCourses } from '../services/api';
import { motion } from 'framer-motion';

interface CourseListProps {
  malla: MallaType;
  onBack: () => void;
  onSelectMode: (courseId: string, mode: 'entrenamiento' | 'examen') => void;
}

export function CourseList({ malla, onBack, onSelectMode }: CourseListProps) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [mallaCourses, setMallaCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCourses(malla)
      .then(setMallaCourses)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [malla]);
  
  const mallaNames = {
    postulante: 'Malla Postulante',
    inicial: 'Malla Inicial',
    operativa: 'Malla Operativa',
    profesional: 'Malla Profesional',
    especialidades: 'Malla Especialidades'
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Inicio
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{mallaNames[malla]}</h1>
        <p className="text-zinc-400 mb-8">Selecciona un curso para comenzar a estudiar o evaluarte.</p>

        {loading ? (
          <div className="text-center p-12 text-zinc-500">Cargando cursos...</div>
        ) : (
          <div className="grid gap-4">
            {mallaCourses.map((course) => {
              const isExpanded = selectedCourse === course.id;
              
              return (
                <div 
                  key={course.id}
                  className={`border rounded-2xl transition-all overflow-hidden ${
                    isExpanded ? 'border-red-500/50 bg-zinc-900/80' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                  }`}
                >
                  <div 
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => setSelectedCourse(isExpanded ? null : course.id)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{course.name}</h3>
                      <p className="text-zinc-400 text-sm">{course.description}</p>
                    </div>
                  </div>

                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-6 pb-6 border-t border-zinc-800/50 pt-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                          onClick={() => onSelectMode(course.id, 'entrenamiento')}
                          className="flex items-center justify-center gap-2 p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
                        >
                          <Play className="w-5 h-5 text-sky-400" />
                          Entrenamiento (Modo Libre)
                        </button>
                        <button
                          onClick={() => onSelectMode(course.id, 'examen')}
                          className="flex items-center justify-center gap-2 p-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium transition-colors"
                        >
                          <FileText className="w-5 h-5" />
                          Examen de Nivel
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
            
            {mallaCourses.length === 0 && (
              <div className="text-center p-12 border border-zinc-800 rounded-2xl bg-zinc-900/50">
                <p className="text-zinc-400">Pronto se agregarán cursos a esta malla.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
