import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className='sponsors h-screen w-full'>
        <div className='flex justify-center items-center translate-y-64'>
            <div className="card1 h-[40vh] w-[60vw] flex flex-col justify-center px-16 py-10 font-semibold">
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl'>Brought to you by: </h1>
                    <h1 className='text-4xl font-extrabold'>Shaheed Sukhdev College of Business Studies</h1>
                    
                    <h1 className='text-4xl'>Department of Computer Science</h1>
                    <div className='w-80 h-2 bg-violet-600 rounded-full -rotate-2 -translate-y-2 translate-x-[13.2vw]'></div>
                    <div className='w-80 h-2 bg-pink-600 rounded-full -rotate-2 -translate-y-4 translate-x-[13.4vw]'></div>
                </div>
                <div className='flex items-center gap-10 pt-10'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <Image
                            src="/Chromebook.png"
                            width={180}
                            height={180}
                            alt="logo"
                        />
                        <p className='text-xl font-semibold'>Chromebook</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                    <Image
                            src="/Playstation.png"
                            width={50}
                            height={50}
                            alt="logo" className='invert'
                        />
                        <p className='text-xl font-semibold'>PlayStation</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                    <Image
                            src="/Playstation.png"
                            width={50}
                            height={50}
                            alt="logo" className='invert'
                        />
                        <p className='text-xl font-semibold'>PlayStation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors