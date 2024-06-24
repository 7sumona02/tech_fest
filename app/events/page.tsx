import React from 'react'
import RetroGrid from "@/components/magicui/retro-grid";
// import {
//   MagicCard,
//   MagicContainer,
// } from "@/components/magicui/magic-card";
import Link from 'next/link';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className='bg-black fixed h-screen w-full flex flex-col justify-center items-center  events select-none'>
                <RetroGrid className=' w-full h-full' />

      <Link href='/' className=' translate-y-16'>
        <Footer />
      </Link>
      <div className="relative flex  items-center justify-center overflow-hidden rounded-lg p-20 md:shadow-xl bg-transparent">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent -translate-y-20">
        Events
      </span>
 
      </div>

      {/* <div className='-translate-y-16'>
        <MagicContainer
        className={
          "flex flex-col gap-4 lg:h-[250px] lg:flex-row border-none p-20"
        }
      >
        <MagicCard
          borderWidth={10}
          className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
        >

          <Link href='/events/1' className="notititle text-2xl ml-2">
            <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Event 1
            </p>
          </Link>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">

        <Link href='/events/2' className="notititle text-2xl ml-2">
            <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Event 2
            </p>
          </Link>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
          
        <Link href='/events/3' className="notititle text-2xl ml-2">
            <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Event 3
            </p>
          </Link>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        </MagicContainer>
      </div> */}

      <div className='-translate-y-16'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/1' className="notititle text-2xl ml-2">Event 1</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/2' className="notititle text-2xl ml-2">Event 2</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/3' className="notititle text-2xl ml-2">Event 3</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/4' className="notititle text-2xl ml-2">Event 4</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/5' className="notititle text-2xl ml-2">Event 5</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/6' className="notititle text-2xl ml-2">Event 6</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/7' className="notititle text-2xl ml-2">Event 7</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/8' className="notititle text-2xl ml-2">Event 8</Link>
            </div>
          </div>

          <div className='linkcard'>
            <div className="notification flex items-center justify-center">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <Link href='/events/9' className="notititle text-2xl ml-2">Event 9</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='-translate-y-8 '>
        <VelocityScroll
        text="Register now"
        default_velocity={5}
        className=" font-display text-center text-3xl font-bold tracking-[-0.02em] w-full text-[#ff2975] drop-shadow-sm dark:text-white  md:leading-[3rem]"
        />
      </div>
    </div>
  )
}

export default Page