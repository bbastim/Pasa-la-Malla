import { useState, useCallback } from 'react';
import { Home } from './components/Home';
import { CourseList } from './components/CourseList';
import { Quiz } from './components/Quiz';
import { Results, SessionRewards } from './components/Results';
import { Admin } from './components/Admin';
import { FeedbackModal } from './components/FeedbackModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { Chatbot } from './components/Chatbot';
import { ProfileModal } from './components/ProfileModal';
import { MallaType, Question, UserStats } from './types';
import { questions as allQuestions } from './data/questions';
import { HelpCircle, ShieldAlert } from 'lucide-react';
import { getInitialStats, saveStats, calculateLevel } from './lib/gamification';

type AppState = 'home' | 'courses' | 'quiz' | 'results' | 'admin';

export default function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedMalla, setSelectedMalla] = useState<MallaType | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState<'entrenamiento' | 'examen'>('entrenamiento');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [userStats, setUserStats] = useState<UserStats>(getInitialStats());
  const [sessionRewards, setSessionRewards] = useState<SessionRewards | null>(null);

  const handleSelectMalla = useCallback((malla: MallaType) => {
    setSelectedMalla(malla);
    setAppState('courses');
  }, []);

  const handleSelectCourseMode = useCallback((courseId: string, mode: 'entrenamiento' | 'examen') => {
    setSelectedCourseId(courseId);
    setQuizMode(mode);
    
    // Filter questions by course
    const courseQuestions = allQuestions.filter(q => q.course === courseId);
    
    // Shuffle and select questions based on mode
    const shuffled = [...courseQuestions].sort(() => 0.5 - Math.random());
    const numQuestions = mode === 'examen' ? Math.min(20, shuffled.length) : shuffled.length;
    const selected = shuffled.slice(0, numQuestions);
    
    setQuizQuestions(selected);
    setAppState('quiz');
  }, []);

  const handleFinishQuiz = useCallback((finalScore: number, finalAnswers: Record<string, number>, finalTime: number) => {
    setScore(finalScore);
    setAnswers(finalAnswers);
    setTimeElapsed(finalTime);
    
    const newStats = { ...userStats };
    let earnedXp = 0;
    const newBadges: string[] = [];
    let leveledUp = false;

    if (quizMode === 'examen') {
      // Gamification Logic for Examen
      const isPerfect = finalScore === quizQuestions.length;
      const isPassed = (finalScore / quizQuestions.length) >= 0.7;
      
      earnedXp = finalScore * 10;
      if (isPassed) earnedXp += 50;
      if (isPerfect) earnedXp += 100;

      newStats.xp += earnedXp;
      newStats.totalCorrect += finalScore;
      newStats.quizzesCompleted += 1;
      newStats.totalTimeSpent += finalTime;
      newStats.totalQuestionsAnswered += quizQuestions.length;
      
      if (newStats.fastestQuizTime === null || finalTime < newStats.fastestQuizTime) {
        newStats.fastestQuizTime = finalTime;
      }

      if (isPerfect) newStats.perfectScores += 1;

      const oldLevel = newStats.level;
      newStats.level = calculateLevel(newStats.xp);
      leveledUp = newStats.level > oldLevel;

      const checkBadge = (id: string, condition: boolean) => {
        if (condition && !newStats.earnedBadges.includes(id)) {
          newStats.earnedBadges.push(id);
          newBadges.push(id);
        }
      };

      checkBadge('first_quiz', newStats.quizzesCompleted >= 1);
      checkBadge('perfect_score', newStats.perfectScores >= 1);
      checkBadge('veteran_100', newStats.totalCorrect >= 100);
      checkBadge('speed_demon', isPassed && finalTime < 120);
      
      if (isPerfect) {
        if (selectedMalla === 'postulante') checkBadge('master_postulante', true);
        if (selectedMalla === 'inicial') checkBadge('master_inicial', true);
        if (selectedMalla === 'operativa') checkBadge('master_operativa', true);
        if (selectedMalla === 'profesional') checkBadge('master_profesional', true);
        if (selectedMalla === 'especialidades') checkBadge('master_especialidades', true);
      }
    } else {
      // Modo entrenamiento: Solo suma tiempo y cantidad de preguntas respondidas
      newStats.totalTimeSpent += finalTime;
      newStats.totalQuestionsAnswered += Object.keys(finalAnswers).length;
    }

    saveStats(newStats);
    setUserStats(newStats);
    setSessionRewards({ xp: earnedXp, newBadges, leveledUp, newLevel: newStats.level });

    setAppState('results');
  }, [quizQuestions.length, selectedMalla, userStats, quizMode]);

  const handleRestart = useCallback(() => {
    if (selectedCourseId && quizMode) {
      handleSelectCourseMode(selectedCourseId, quizMode);
    } else if (selectedMalla) {
      setAppState('courses');
    } else {
      setAppState('home');
    }
  }, [selectedCourseId, quizMode, selectedMalla, handleSelectCourseMode]);

  const handleHome = useCallback(() => {
    setSelectedMalla(null);
    setSelectedCourseId(null);
    setQuizQuestions([]);
    setScore(0);
    setAnswers({});
    setTimeElapsed(0);
    setSessionRewards(null);
    setAppState('home');
  }, []);

  const handleAdminLoginSuccess = useCallback(() => {
    setShowAdminLogin(false);
    setAppState('admin');
  }, []);

  return (
    <>
      {appState === 'home' && (
        <Home 
          onSelectMalla={handleSelectMalla} 
          onOpenChat={() => setShowChatbot(true)} 
          onOpenProfile={() => setShowProfile(true)}
          stats={userStats}
        />
      )}
      {appState === 'courses' && selectedMalla && (
        <CourseList 
          malla={selectedMalla} 
          onBack={() => setAppState('home')} 
          onSelectMode={handleSelectCourseMode} 
        />
      )}
      {appState === 'quiz' && (
        <Quiz 
          questions={quizQuestions} 
          mode={quizMode}
          onFinish={handleFinishQuiz} 
          onSurrender={handleHome}
        />
      )}
      {appState === 'results' && (
        <Results 
          questions={quizQuestions}
          answers={answers}
          score={score}
          timeElapsed={timeElapsed}
          rewards={sessionRewards}
          onRestart={handleRestart}
          onHome={handleHome}
          mode={quizMode}
        />
      )}
      {appState === 'admin' && (
        <Admin onBack={() => setAppState('home')} />
      )}

      {/* Global Feedback Button */}
      {appState === 'home' && (
        <button
          onClick={() => setShowFeedback(true)}
          className="fixed bottom-6 left-6 p-4 bg-sky-500 hover:bg-sky-400 text-white rounded-full shadow-lg shadow-sky-500/20 transition-all hover:scale-110 z-40 group"
          title="Sugerencias y Comentarios"
        >
          <HelpCircle className="w-6 h-6" />
          <span className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-sm text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Sugerencias y Comentarios
          </span>
        </button>
      )}

      {/* Hidden Admin Button (Double click to enter admin mode) */}
      {appState === 'home' && (
        <button
          onDoubleClick={() => setShowAdminLogin(true)}
          className="fixed bottom-6 right-6 p-4 text-zinc-800 hover:text-zinc-600 transition-colors z-40"
          title="Admin"
        >
          <ShieldAlert className="w-6 h-6" />
        </button>
      )}

      {showFeedback && (
        <FeedbackModal onClose={() => setShowFeedback(false)} />
      )}

      {showAdminLogin && (
        <AdminLoginModal 
          onSuccess={handleAdminLoginSuccess} 
          onClose={() => setShowAdminLogin(false)} 
        />
      )}

      {showChatbot && (
        <Chatbot onClose={() => setShowChatbot(false)} />
      )}

      {showProfile && (
        <ProfileModal stats={userStats} onClose={() => setShowProfile(false)} />
      )}
    </>
  );
}
