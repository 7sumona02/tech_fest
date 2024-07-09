'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className='   h-screen w-full bg-black pt-20'>
        <div className='flex justify-center items-center translate-y-64'>
            <div className="card min-h-[50vh] w-[60vw] flex flex-col justify-center px-16 py-10 font-semibold">
                <h1 className='md:text-6xl text-4xl text-pink-600'>About Tech Fest</h1>
                <div className='pt-5 md:text-2xl text-xl font-sans'>
                    <span>Join us at our vibrant tech fest, where innovation meets competition. Featuring nine thrilling events, participants will engage in challenges ranging from coding marathons and design jams to treasure hunts and technical charades.</span>
                    <span><TypeAnimation
                        sequence={[
                            " It's an opportunity to showcase skills, foster creativity, and connect with like-minded enthusiasts in an electrifying atmosphere of learning and discovery.",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                        >
                    </TypeAnimation></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About