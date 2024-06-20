import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [usernswer, setUserAnswer] = useState([]);

  return (
    <div id="quiz">
      <p>Currently active question</p>
    </div>
  );
}
