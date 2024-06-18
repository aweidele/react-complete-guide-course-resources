import { useEffect, useState } from "react";

const TIMER = 10000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("timer start");
    const timer = setTimeout(() => {
      console.log("timer stop");
      onConfirm();
    }, TIMER);

    // the cleanup function goes in the return of the useEffect() function!
    return () => {
      console.log("cleanup timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={TIMER - remainingTime} max={TIMER} />
    </div>
  );
}
