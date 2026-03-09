export type MallaType = 'postulante' | 'inicial' | 'operativa' | 'profesional' | 'especialidades';

export interface Course {
  id: string;
  malla: MallaType;
  name: string;
  description: string;
  manualSummary: string;
}

export interface Question {
  id: string;
  malla: MallaType;
  course: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface UserStats {
  xp: number;
  level: number;
  totalCorrect: number;
  quizzesCompleted: number;
  perfectScores: number;
  earnedBadges: string[];
  totalTimeSpent: number;
  totalQuestionsAnswered: number;
  fastestQuizTime: number | null;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<string, number>; // questionId -> selectedOptionIndex
  isFinished: boolean;
  questions: Question[];
}
