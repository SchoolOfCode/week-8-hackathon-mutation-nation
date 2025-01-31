import  React, { useEffect, useRef, useState } from "react";
import "./Stopwatch.css";


//MVP 1 - Restart button
export default function Stopwatch() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timeHandler = useRef(null);
  
  useEffect(() => {
    return () => clearInterval(timeHandler.current);
  }, []);

  function startTimer() {
      if (!isRunning) {
        timeHandler.current = setInterval(() => {
          setTime((prevTime) => prevTime + 1)
        }, 1000);
        setIsRunning(true);
      }
  }
  
  function pauseTimer() {
    clearInterval(timeHandler.current);
    timeHandler.current = null;
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(timeHandler.current);
    timeHandler.current = null;
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  }
  
  function handleLap() {
    if (isRunning) {
      setLaps([...laps, time])
      setTime(0); // Reset the counter to 0
    }
  };
  
  return (
    <>
    <div className="container">

      <h1 className="time"> {time} </h1>

      <div className="button">
      <button className="restart" onClick={resetTimer}> Restart </button>
      <button className="start" onClick={startTimer}> Start </button>
      <button className="pause" onClick={pauseTimer}> Pause </button>
      <button className="lap" onClick={handleLap} disabled={!isRunning}> Lap </button>
      </div>

      <ul>

      {laps.map((lap, index) => {
          const isShortest = lap === Math.min(...laps); // Declare JavaScript logic here
          return (
            <li key={index}>
              Lap {index + 1}: {lap} sec {isShortest && <span>🏆</span>}
            </li>
          );
        })}
      </ul>
    </div>
  </>
);
}
