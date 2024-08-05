import './timer.css';
import { useState } from 'react';

export default function Timer() {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="timer-wrapper">

      <div className="timer-header">
        <h1>Timer</h1>
      </div>

      <div className="timer-content">
        <input type="text" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} />
        <span>Minutes</span>
        <input type="text" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} />
        <span>Seconds</span>
        <button onClick={() => {
          let tempSecond = seconds;
          // for(let i = 0; i <= tempSecond; i++){
            setInterval(() => {
              setSeconds(seconds - 1); 
            }, 1000)
          // } 
        }}>
          Start
        </button><br />
      </div>

      <div className="timer-button">
        <button>Pause/Resume</button>
        <button>Reset</button>
      </div>

      <div className="timer-footer">
        <h2>{minutes}:{seconds}</h2>
      </div>

    </div>
  )
}
