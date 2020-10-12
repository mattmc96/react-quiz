/** @format */
import React, { userState } from 'react';
import { fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = userState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className='App'>
      <h1>React TypeScript Quiz</h1>
      <button className='start' onClick={startTivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswers={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
