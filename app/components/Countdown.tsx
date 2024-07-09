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
      <div style={{ fontSize: '40px'}} className='  flex justify-center items-center'>
        <span className='time flex flex-col items-center justify-center w-[7rem]'>{days} <span className=' text-sm'>Days</span></span>:<span className='time flex flex-col items-center justify-center  w-[7rem]'>{hours} <span className=' text-sm'>Hours</span></span>:<span className='time flex flex-col items-center justify-center  w-[7rem]'>{minutes} <span className=' text-sm'>Minutes</span></span>:<span className='time flex flex-col items-center justify-center w-[7rem]'>{seconds} <span className=' text-sm'>Seconds</span></span>
      </div>
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