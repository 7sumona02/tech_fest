import React from 'react'
import RetroGrid from "@/components/magicui/retro-grid";
import {
  MagicCard,
  MagicContainer,
} from "@/components/magicui/magic-card";
import Link from 'next/link';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div className='bg-black h-screen w-screen flex flex-col justify-center items-center events pt-10'>
                <RetroGrid className=' w-[200vw] h-screen absolute -top-0' />

      <Link href='/'>
        <Footer />
      </Link>
      <div className="relative flex  items-center justify-center overflow-hidden rounded-lg p-20 bg-background md:shadow-xl bg-black">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent -translate-y-16">
        Events
      </span>
 
      </div>
      <div className='-translate-y-16'>
        <MagicContainer
        className={
          "flex flex-col gap-4 lg:h-[250px] lg:flex-row border-none p-20"
        }
      >
        <MagicCard
          borderWidth={10}
          className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
        >

          <Link href='/events/1'>
            <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Event 1
            </p>
          </Link>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">

        <Link href='/events/2'>
            <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Event 2
            </p>
          </Link>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
          
        <Link href='/events/3'>
            <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Event 3
            </p>
          </Link>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        </MagicContainer>
      </div>

      <div className='translate-y-12 pb-10'>
        <VelocityScroll
        text="Register now"
        default_velocity={5}
        className=" font-display text-center text-2xl font-bold tracking-[-0.02em] w-full text-[#ff2975] drop-shadow-sm dark:text-white md:text-4xl md:leading-[3rem]"
        />
      </div>
    </div>
  )
}

export default Page