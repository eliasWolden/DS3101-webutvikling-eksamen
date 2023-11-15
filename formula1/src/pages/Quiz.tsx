import React, { useEffect, useState } from "react";
import "../../css/QuizGame.css";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizState {
  score: number;
  currentQuestion: number;
  quizStarted: boolean;
  quizCompleted: boolean;
}

const Quiz: React.FC = () => {
  const initialQuizState: QuizState = {
    score: 0,
    currentQuestion: 0,
    quizStarted: false,
    quizCompleted: false,
  };

  const [quizState, setQuizState] = useState<QuizState>({
    ...initialQuizState,
  });
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const questions = [
    {
      question: "Who won the Formula 1 World Championship in 2022?",
      options: [
        "Lewis Hamilton",
        "Max Verstappen",
        "Valtteri Bottas",
        "Sebastian Vettel",
      ],
      correctAnswer: "Max Verstappen",
    },
    {
      question: "Which team won the Constructors' Championship in 2022?",
      options: ["Mercedes", "Red Bull Racing", "Ferrari", "McLaren"],
      correctAnswer: "Mercedes",
    },
    {
      question: "In which country is the Monza Circuit located?",
      options: ["Italy", "France", "Spain", "Germany"],
      correctAnswer: "Italy",
    },
    {
      question: "Who is known as the 'Flying Finn' in Formula 1?",
      options: [
        "Kimi Räikkönen",
        "Valtteri Bottas",
        "Mika Häkkinen",
        "Keke Rosberg",
      ],
      correctAnswer: "Kimi Räikkönen",
    },
    {
      question:
        "Which driver holds the record for the most Grand Prix victories?",
      options: [
        "Lewis Hamilton",
        "Michael Schumacher",
        "Ayrton Senna",
        "Alain Prost",
      ],
      correctAnswer: "Lewis Hamilton",
    },
    {
      question: "How many World Championships did Juan Manuel Fangio win?",
      options: ["5", "7", "3", "6"],
      correctAnswer: "5",
    },
    {
      question: "Which circuit is known as the 'Temple of Speed'?",
      options: ["Monaco", "Silverstone", "Monza", "Suzuka"],
      correctAnswer: "Monza",
    },
    {
      question: "Who is the youngest Formula 1 World Champion?",
      options: [
        "Sebastian Vettel",
        "Fernando Alonso",
        "Lewis Hamilton",
        "Max Verstappen",
      ],
      correctAnswer: "Sebastian Vettel",
    },
  ];

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const { currentQuestion } = quizState;
  const currentShuffledQuestion = shuffledQuestions[currentQuestion];

  const handleAnswer = (selectedOption: string) => {
    const correct =
      selectedOption === questions[quizState.currentQuestion].correctAnswer;

    if (correct) {
      setQuizState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
    }

    setQuizState((prevState) => ({
      ...prevState,
      currentQuestion: prevState.currentQuestion + 1,
    }));

    if (quizState.currentQuestion + 1 === questions.length) {
      setQuizState((prevState) => ({ ...prevState, quizCompleted: true }));
    }
  };

  const startQuiz = () => {
    setQuizState((prevState) => ({ ...prevState, quizStarted: true }));
  };

  const retakeQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);

    setQuizState({ ...initialQuizState, quizStarted: true });
  };

  const progress =
    Math.min((quizState.currentQuestion + 1) / questions.length, 1) * 100;

  return (
    <div className="quiz-container">
      {!quizState.quizStarted ? (
        <div className="quiz-start text-center bg-secondary p-3 rounded">
          <h2 className="mb-4 text-white">Formula 1 Special Quiz</h2>
          <button className="btn btn-primary" onClick={startQuiz}>
            Take the Quiz
          </button>
        </div>
      ) : currentQuestion < questions.length ? (
        <>
          <h3 className="text-center p-3">
            {currentShuffledQuestion.question}
          </h3>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="options-container text-center p-3">
            {currentShuffledQuestion.options.map((option, index) => (
              <button
                key={index}
                className="btn btn-danger"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="quiz-results bg-primary text-white rounded p-4 mt-4 text-center">
          <h3 className="mb-4">Quiz Completed!</h3>
          <p className="bg-dark p-3 rounded">
            Your Score: {quizState.score}/{questions.length}
          </p>
          <button className="btn btn-danger" onClick={retakeQuiz}>
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
