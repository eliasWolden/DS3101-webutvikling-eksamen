export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  score: number;
  currentQuestion: number;
  quizStarted: boolean;
  quizCompleted: boolean;
}
