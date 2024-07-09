"use client"

import React from 'react'
import Navbar from './Navbar'
import Countdown from './Countdown'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'
import RetroGrid from '@/components/magicui/retro-grid'
import WordPullUp from '@/components/magicui/pull'

const Home = () => {
  return (
    <div id='home'>
      <div className=" h-screen w-full bg-black ">
        <RetroGrid />
        <div className='-translate-y-20'>
            <Navbar />
            <div className='flex flex-col text-center -mt-7'>
                <h1 className=' text-[15rem]  h-[13rem] flex justify-center items-center font-extrabold  text-white bg-clip-text text-transparent  to-80% from-gray-400 square'>TechFest&apos;24</h1>
                <h2 className=' text-5xl text-center font-medium text-white square'>The Annual Flagship Computer Science Festival of SSCBS</h2>
                <div className='flex flex-col gap-3 translate-y-2 justify-center items-center mt-20'>
                    <h2 className=' '></h2>
                    <WordPullUp
      className=" text-2xl font-bold from-white tracking-[-0.02em] to-white bg-gradient-to-t bg-clip-text text-transparent"
      word="31st August 2024"
    />
                </div>
            </div>


            <div>
              <div className='md:pt-[8vh]  text-white pt-[20vh]'>
                <Countdown />
              </div>
              {/* <h1 className="text-4xl text-center  font-bold from-black to-white bg-clip-text text-transparent bg-gradient-to-t to-40%  pt-6">TIME REMAINING!!!</h1> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home