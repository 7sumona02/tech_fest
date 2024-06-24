'use client'

import React from 'react';
import { useTimer } from 'react-timer-hook';

interface Props {
  expiryTimestamp: Date;
}

function MyTimer(props: Props) {
  const {
    seconds,
    minutes,
    hours,
    days,
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
  const time = new Date(2024,7,31,23,59,59);
  // console.log(time);
  time.setSeconds(time.getSeconds()); // 2 days in seconds
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default App;