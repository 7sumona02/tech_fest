import React from 'react'
import RetroGrid from "@/components/magicui/retro-grid";
import Link from 'next/link';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import eventData from './records.json'
import Footer from '../components/Footer';

const Page = () => {

  return (
    <div className='bg-black Eventbg h-screen w-full flex flex-col justify-center items-center  events select-none fixed'>

      <Link href='/' className='absolute top-14 -translate-x-10'>
          <Footer />
      </Link>

      <div className="relative flex  items-center justify-center overflow-hidden rounded-lg p-20  bg-transparent pt-56 md:pt-20">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent ">
          Events
        </span>
      </div>

      <div className='translate-y-[400px] md:translate-y-6'>
        <div className='grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-6 font-sans'>
          {eventData.map((event) => (
            <div key={event.id} className='linkcard'>
              <div className="notification flex items-center justify-center">
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <Link href={`/events/${event.id}`} className="notititle text-2xl ml-2">{event.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='translate-y-[500px] md:translate-y-32'>
        <VelocityScroll
          text="Register now"
          default_velocity={5}
          className=" font-display text-center text-3xl font-bold tracking-[-0.02em] w-full text-white [drop-shadow-sm dark:text-white  md:leading-[3rem]"
        />
      </div>
    </div>
  )
}

export default Page