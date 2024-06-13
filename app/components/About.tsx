'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className='bg-black h-screen w-full'>
        <div className='flex justify-center items-center translate-y-64'>
            <div className="card min-h-[50vh] w-[60vw] flex flex-col justify-center px-16 py-10 font-semibold">
                <h1 className='text-4xl'>About Hackathon</h1>
                <div className='pt-5 text-2xl'>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque veniam reprehenderit qui. Excepturi aut repellat cumque, non incidunt ab quam hic error accusantium recusandae, ut eos eum doloremque expedita porro ipsam ipsum suscipit maxime perspiciatis, impedit maiores quis. Magnam optio repudiandae ea, dolorem voluptatem accusamus quisquam molestias voluptates ut.</span>
                    <span><TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            " We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                        >
                    </TypeAnimation></span>
                </div>
                {/* <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'We produce food for Mice',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/> */}
            </div>
        </div>
    </div>
  )
}

export default About