import React from 'react'
import Navbar from './Navbar'
import Countdown from './Countdown'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

const Home = () => {
  return (
    <div id='home'>
      <div className="background h-screen w-full">
        <div className='-translate-y-20'>
            <Navbar />
            <div className='flex flex-col text-center -mt-7'>
                <h1 className='md:text-[200px] text-[80px] font-bold text-pink-600'>Tech Fest</h1>
                <div className='flex flex-col gap-3 translate-y-2 justify-center items-center font-sans'>
                    <h2 className='md:text-3xl text-2xl font-medium text-white'>ACM,   SSCBS</h2>
                    <h2 className='md:text-3xl text-2xl font-medium text-white'>31st August 2024</h2>
                    <h2 className='text-xl font-medium text-white md:max-w-lg max-w-xs'>The ultimate celebration for tech-enthusiast across various institutions</h2>
                </div>
            </div>
            

            {/* <div className='flex flex-col justify-center items-center gap-4 translate-y-32'>
              <div>

              <Link href="https://react-icons.github.io/react-icons/search/#q=link"><button
  className="relative cursor-pointer opacity-90 hover:opacity-1p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] hover:scale-105 transition-all"
>
  <span
    className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc] md:text-base text-sm"
  >
   <Image
      src="/Devfolio.svg"
      width={20}
      height={20}
      alt="icon"
    /> Apply with Devfolio</span
  >
              </button></Link>

              </div>
              <div>
              <Link href="https://react-icons.github.io/react-icons/search/#q=link"><button className="brochure text-center hover:scale-105 transition-all">
  <div className='flex justify-center items-center gap-4 px-12 py-3 text-white  md:text-base text-sm'>
  Brochure <FaExternalLinkAlt />
  </div>
</button></Link>

              </div>
            </div> */}

            <div className='translate-y-[200px]'>
              <div className='md:pt-[8vh] text-white pt-[20vh]'>
                <Countdown />
              </div>
              <h1 className="text-2xl text-center text-white pt-6">REMAINING!</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home