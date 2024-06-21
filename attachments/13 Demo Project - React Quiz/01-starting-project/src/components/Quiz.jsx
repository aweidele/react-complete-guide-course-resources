import { useState, useCallback } from "react";
import QUESTIONS from "../questions";

import QuestionTimer from "./QuestionTimer";
import QuizComplete from "./QuizComplete";
import Answers from "./Answers";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswer] = useState([]);
  const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizOver = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 1000);
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

  return (
    <div id="quiz">
      <div id="question">
        {/* Combine this into a separate component so the combined component can have a single key */}
        <QuestionTimer key={activeQuestionIndex} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers key={`answers-${activeQuestionIndex}`} answers={QUESTIONS[activeQuestionIndex].answers} selectedAnswer={userAnswers[userAnswers.length - 1]} answerState={answerState} onSelect={handleSelectAnswer} />
      </div>
    </div>
  );
}
