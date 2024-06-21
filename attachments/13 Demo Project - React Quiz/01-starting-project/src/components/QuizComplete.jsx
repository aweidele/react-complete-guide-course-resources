import quizCompleteImage from "../assets/quiz-complete.png";

export default function QuizComplete({ results }) {
  return (
    <div id="summary">
      <img src={quizCompleteImage} />
      <h2>Quiz complete</h2>
      <ul>
        {results.map((result) => (
          <li>
            <div>{result}</div>
            {/* <div>{result.correctAnswer}</div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
