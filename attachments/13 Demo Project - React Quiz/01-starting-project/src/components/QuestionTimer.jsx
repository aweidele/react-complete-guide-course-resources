import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout = 5000, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 50);
    }, 50);
  }, []);

  return (
    <>
      <progress max={timeout} value={remainingTime} id="question-time" />
      <p>{remainingTime}</p>
    </>
  );
}
