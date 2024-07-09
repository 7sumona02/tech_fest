import React from 'react'
import ReactIcon from './ReactIcon'
import FigmaIcon from './FigmaIcon'
import CoinIcon from './CoinIcon'
import CodeIcon from './CodeIcon'

const Themes = () => {
  return (
    <div className='bg-black h-screen w-full flex justify-center items-center md:pt-32 pt-[1700px]'>
        <div>
            <h1 className='text-6xl font-bold text-center text-zinc-200 -translate-y-44'>Themes</h1>
            <div className='-translate-y-44 flex flex-col justify-center items-center'>
                <div className='w-72 h-2 bg-violet-600 rounded-full -rotate-2'></div>
                <div className='w-72 h-2 bg-pink-600 rounded-full -rotate-2'></div>
            </div>
        <div className="container -translate-y-12">
  <div data-text="DSA" className="glass -rotate-12">
    <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
      ></path>
    </svg>
  </div>
  <div data-text="WebDev"  className="glass rotate-6">
    <ReactIcon />
  </div>
  <div data-text="Tech" className="glass -rotate-12">
    <CodeIcon />
  </div>
  <div data-text="Design" className="glass rotate-[25]">
    <FigmaIcon />
  </div>
  <div data-text="Treasure Hunt" className="glass -rotate-6">
    <CoinIcon />
  </div>
        </div>

        </div>
    </div>
  )
}

export default Themes