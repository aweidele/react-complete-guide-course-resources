import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImage from "../assets/quiz-complete.png";

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizOver = QUESTIONS.length === activeQuestionIndex;
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }

  // Return Quiz Over if the quiz is over
  if (quizOver) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} />
        <h2>Quiz complete</h2>
      </div>
    );
  }

  // Otherwise, continue
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li className="answer" key={answer}>
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {userAnswers.map((answer) => (
        <div>{answer}</div>
      ))}
    </div>
  );
}
