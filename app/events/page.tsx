import React from 'react'
import RetroGrid from "@/components/magicui/retro-grid";
import Link from 'next/link';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Footer from '../components/Footer';

const Page = () => {
  const eventData = [
    {   
        "id": 1,
        "name": "DSA Competition",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "time": "10.00 AM - 11.30 AM",
        "date": "31st August (1st Slot) and 1st September (2nd Slot)",
        "venue": "Auditorium",
        "teamSize": "4",
        "contact": "1234567890"
    },
    {
        "id": 2,
        "name": "Blind Code",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "time": "10.00 AM - 11.30 AM",
        "date": "31st August (1st Slot) and 1st September (2nd Slot)",
        "venue": "Auditorium",
        "teamSize": "4",
        "contact": "1234567890"
    },
    {
        "id": 3,
        "name": "WebDev Competition",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "time": "11.30 AM - 1.30 PM",
        "date": "31st August (1st Slot) and 1st September (2nd Slot)",
        "venue": "Auditorium",
        "teamSize": "4",
        "contact": "1234567890"
    },
    {
      "id": 4,
      "name": "React Competition",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "11.30 AM - 1.30 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 5,
      "name": "Tech Charades",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "1.00 PM - 2.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 6,
      "name": "Tech Quiz",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "1.00 PM - 2.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 7,
      "name": "Tech Quiz",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "1.00 PM - 2.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 8,
      "name": "Debug-a-thon",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "1.00 PM - 2.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 9,
      "name": "Design Jam",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "1.00 PM - 2.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 10,
      "name": "Mystery Function",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "2.00 PM - 3.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 11,
      "name": "Guess the Prompt",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "2.00 PM - 3.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    },
    {
      "id": 12,
      "name": "Treasure Hunt",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "time": "3.00 PM - 5.00 PM",
      "date": "31st August (1st Slot) and 1st September (2nd Slot)",
      "venue": "Auditorium",
      "teamSize": "4",
      "contact": "1234567890"
    }
  ];

  return (
    <div className='bg-black fixed h-screen w-full flex flex-col justify-center items-center  events select-none'>
      <RetroGrid className=' w-full h-full' />

      <div className=' md:translate-x-0 md:translate-y-60 pt-96 md:pt-0'>
        <Link href='/'>
          <Footer />
        </Link>
      </div>

      <div className="relative flex  items-center justify-center overflow-hidden rounded-lg p-20 md:shadow-xl bg-transparent pt-56">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Events
        </span>
      </div>

      <div className='translate-y-20'>
        <div className='grid md:grid-cols-3 md:gap-4 grid-cols-2 gap-6'>
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

      <div className='pt-24 '>
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