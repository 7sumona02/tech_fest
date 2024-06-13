import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className='bg-black h-screen w-full'>
        <div className='flex justify-center items-center translate-y-64'>
            <div className="card h-[40vh] w-[60vw] flex flex-col justify-center px-16 py-10 font-semibold">
                <h1 className='text-4xl'>About Hackathon</h1>
                <div className='pt-5 text-2xl'>
                    <span>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now.</span>
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