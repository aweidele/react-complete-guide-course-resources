import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  console.log(userAnswers);
  const skipped = userAnswers.filter((answer) => answer === null).length;
  const correct = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;
  const incorrect = userAnswers.length - skipped - correct;
  console.log(userAnswers.length, skipped, correct, incorrect);

  const pct = (num) => `${Math.round((num / userAnswers.length) * 100)}%`;

  return (
    <div id="summary">
      <img src={quizCompleteImage} />
      <h2>Quiz complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{pct(skipped)}</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{pct(correct)}</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{pct(incorrect)}</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          const { text, answers, id } = QUESTIONS[index];
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={id}>
              <h3>{index + 1}</h3>
              <p className="question">{text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
