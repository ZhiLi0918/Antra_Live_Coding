import { useEffect, useRef, useState } from 'react';

export default function Timer() {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); 

  function handleStart(){
    if(seconds > 0 || minutes > 0) setIsRunning(true);
  }

  function handlePause(){
    setIsRunning(!isRunning);
  }

  function handleReset(){
    setSeconds(0);
    setMinutes(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    if(isRunning){
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setSeconds(prevSecond => {
          if(prevSecond === 0){
            if(minutes === 0){
              setIsRunning(false);
              clearInterval(intervalRef.current);
              return 0;
            }else{
              setMinutes((prevMinute) => prevMinute - 1);
              return 59;
            }
          }else return prevSecond - 1;
        });
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }
  }, [isRunning, seconds, minutes]);

  return (
    <div className="timer-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      <div className="timer-header">
        <h1>Timer</h1>
      </div>

      <div className="timer-input">
        <input type="text" value={minutes} onChange={e => setMinutes(e.target.value)} />
        <span>Minutes</span>

        <input type="text" value={seconds} onChange={e => setSeconds(e.target.value)} />
        <span>Seconds</span>

        <button onClick={handleStart}>Start</button><br />
      </div>

      <div className="timer-button">
        <button onClick={handlePause}>Pause/Resume</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="timer-footer">
        <h2>{`${String(minutes).padStart(2, '0')}`}:{`${String(seconds).padStart(2, '0')}`}</h2>
      </div>

    </div>
  )
}