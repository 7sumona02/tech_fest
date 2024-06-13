'use client'

import React from 'react';
import { useTimer } from 'react-timer-hook';

interface Props {
  expiryTimestamp: Date;
}

function MyTimer(props: Props) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: props.expiryTimestamp, onExpire: () => console.warn('Hackathon starts now!') });

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '60px' }}>
        <span className='time'>{days}</span>:<span className='time'>{hours}</span>:<span className='time'>{minutes}</span>:<span className='time'>{seconds}</span>
      </div>
      {/* <button onClick={() => {
        // Restarts the countdown
        const time = new Date();
        time.setSeconds(time.getSeconds() + 172800); // 2 days in seconds
        restart(time);
      }}>Restart</button> */}
    </div>
  );
}

interface Props {
  expiryTimestamp: Date;
}

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 172800); // 2 days in seconds
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default App;