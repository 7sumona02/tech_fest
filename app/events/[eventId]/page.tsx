import React from 'react';
import Records from "./records.json";
import Link from 'next/link'
import Footer from '@/app/components/Footer';

const Page = ({ params }: { params: { eventId: string } }) => {
  const record = Records.find(r => r.id === parseInt(params.eventId));

  if (!record) {
    return <div>No record found for the given eventId</div>;
  }

  return (
    <div className="  relative w-full bg-black bg-grid-white/[0.1]  flex items-center justify-center eventpage ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      <div className='h-full w-full text-white flex flex-col gap-10 items-center justify-center text-2xl pt-16 pb-20'>

        <Link href='/' className='md:pr-5 pr-14'>
          <Footer />
        </Link>

        <div>
          <span className=" select-none pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[rgb(255,211,25)] via-[#ff2975] to-[#8c1eff] bg-clip-text md:text-center ml-5 text-nowrap text-6xl md:text-7xl font-bold leading-none tracking-tighter text-transparent -translate-y-16">
          {record.name}
          </span>
        </div>

        <div className='flex flex-col justify-center  items-center gap-16 text-white max-w-[40vw] pt-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl text-[#ff2975]'>Description</h1>
            <p className='font-sans text-xl'>{record.description}</p>
            <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl text-[#ff2975]'>Time</h1>
            <p className='font-sans text-xl'>{record.time}</p>
            <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl text-[#ff2975]'>Date</h1>
            <p className='font-sans text-xl'>{record.date}</p>
            <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl text-[#ff2975]'>Venue</h1>
            <p className='font-sans text-xl'>{record.venue}</p>
            <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl text-[#ff2975]'>Team Size</h1>
            <p className='font-sans text-xl'>{record.teamSize}</p>
            <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl text-[#ff2975]'>For additional details, contact</h1>
            <p className='font-sans text-xl'>{record.contact}</p>
            <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
          </div>

          <div className='flex flex-col gap-2'>
            <Link href=''>
              <button className='event px-8 py-2 md:text-xl text-base'
              >Register now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;