import { useState, useCallback } from "react";
import QUESTIONS from "../questions";

import QuestionTimer from "./QuestionTimer";
import QuizComplete from "./QuizComplete";

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswer] = useState([]);
  const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizOver = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prevUserAnswers) => [...prevUserAnswers, { userAnswer: selectedAnswer, correctAnswer: QUESTIONS[activeQuestionIndex].answers[0] }]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  // Return Quiz Over if the quiz is over
  if (quizOver) {
    return <QuizComplete results={userAnswers} />;
  }

  // Otherwise, continue
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClasses = "";
            if (answerState === "answered" && isSelected) cssClasses = "selected";
            if ((answerState === "correct" || answerState === "wrong") && isSelected) cssClasses = answerState;
            // if (answerState === "correct") cssClasses = "correct";
            // if (answerState === "wrong") cssClasses = "wrong";
            return (
              <li className="answer" key={answer}>
                {/* {isSelected ? "selected" : "not selected"} */}
                <button
                  onClick={() => {
                    handleSelectAnswer(answer);
                  }}
                  className={cssClasses}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {userAnswers.map((answer, key) => (
        <div key={`answer-${key}`}>{answer.userAnswer === null ? "No answer given" : answer.userAnswer}</div>
      ))}
    </div>
  );
}
