import React from 'react'
import RetroGrid from "@/components/magicui/retro-grid";
import Link from 'next/link';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className='bg-black fixed h-screen w-full flex flex-col justify-center items-center  events select-none'>
                <RetroGrid className=' w-full h-full' />

      <div className='sm:-translate-x-6 md:translate-x-0 translate-y-16'>
        <Link href='/'>
          <Footer />
        </Link>
      </div>
      <div className="relative flex  items-center justify-center overflow-hidden rounded-lg p-20 md:shadow-xl bg-transparent">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent -translate-y-16">
        Events
      </span>
 
      </div>

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

      <div className='-translate-y-3 '>
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