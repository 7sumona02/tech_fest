import React from 'react'
import Navbar from './Navbar'
import Countdown from './Countdown'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="background h-screen w-full">
        <div>
            <Navbar />
            <div className='flex flex-col text-center translate-y-40'>
                <h1 className='text-[100px] font-bold text-purple-700'>HACKATHON</h1>
                <div className='flex flex-col gap-4 translate-y-2'>
                    <h2 className='text-3xl font-medium text-white'>HACK-IN-FINITE TIME</h2>
                    <h2 className='text-3xl font-medium text-white'>20-21 June 2024</h2>
                    <h2 className='text-3xl font-medium text-white'>24 Hour Hackathon</h2>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-4 translate-y-56'>
              <div>

              <Link href="https://react-icons.github.io/react-icons/search/#q=link"><button
  className="relative cursor-pointer opacity-90 hover:opacity-1p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] hover:scale-105 transition-all"
>
  <span
    className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]"
  >
   <Image
      src="/Devfolio.svg"
      width={30}
      height={30}
      alt="icon" className='saturation'
    /> Apply with Devfolio</span
  >
</button></Link>

              </div>
              <div>
              <Link href="https://react-icons.github.io/react-icons/search/#q=link"><button className="brochure text-center hover:scale-105 transition-all">
  <div className='flex justify-center items-center gap-4 px-14 py-3 text-white '>
  Brochure <FaExternalLinkAlt />
  </div>
</button></Link>

              </div>
            </div>

            <div>
              <div className='pt-80 text-white'>
                <Countdown />
              </div>
              <h1 className="text-2xl text-center text-white pt-4">REMAINING!</h1>
            </div>
        </div>
    </div>
  )
}

export default Home