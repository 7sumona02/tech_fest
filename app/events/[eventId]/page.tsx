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
    <div className='bg-black h-full w-full text-white flex flex-col gap-10 items-center justify-center text-2xl pt-16 pb-20'>

      <Link href='/' className='pr-5'>
        <Footer />
      </Link>

      <div>
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[rgb(255,211,25)] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent -translate-y-16">
        {record.name}
        </span>
      </div>

      <div className='flex flex-col justify-center  items-center gap-16 text-white max-w-[40vw] pt-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-[#ff2975]'>Guidelines</h1>
          {typeof record.guidelines === 'object' ? (
            <ul className='list-disc list-inside text-lg'>
              <li>{record.guidelines.studentEligibility}</li>
              <li>{record.guidelines.eventType}</li>
              <li>{record.guidelines.eventDates}</li>
              <li>{record.guidelines.teamSize}</li>
              <li>{record.guidelines.timings}</li>
              <li>{record.guidelines.venue}</li>
            </ul>
          ) : (
            <p className='text-lg'>{record.guidelines}</p>
          )}
          <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-[#ff2975]'>Rules</h1>
          {Array.isArray(record.rules) ? (
            <ul className='list-disc list-inside text-lg'>
              {record.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          ) : (
            <p className='text-lg'>{record.rules}</p>
          )}
          <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-[#ff2975]'>Structure</h1>
          {record.structure ? (
            <ul className='list-disc list-inside text-lg flex flex-col gap-2'>
              <li>
                <span className='text-lg'>{record.structure.round1.name}</span>
                <p className='text-lg inline-block ml-2'>{record.structure.round1.description}</p>
              </li>
              <li>
                <span className='text-lg'>{record.structure.finalRound.name}</span>
                <p className='text-lg inline-block ml-2'>{record.structure.finalRound.description}</p>
              </li>
            </ul>
          ) : (
            <p className='text-lg'>{record.structure}</p>
          )}
          <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-[#ff2975]'>Judging Criteria</h1>
          {Array.isArray(record.judgingCriteria) ? (
            <ul className='list-disc list-inside text-lg'>
              {record.judgingCriteria.map((criteria, index) => (
                <li key={index}>{criteria}</li>
              ))}
            </ul>
          ) : (
            <p className='text-lg'>{record.judgingCriteria}</p>
          )}
          <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-[#ff2975]'>Prizes</h1>
          {Array.isArray(record.prizes) ? (
            <ul className='list-disc list-inside text-lg'>
              {record.prizes.map((prize, index) => (
                <li key={index}>{prize}</li>
              ))}
            </ul>
          ) : (
            <p className='text-lg'>{record.prizes}</p>
          )}
          <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl text-[#ff2975]'>Important Note</h1>
          {Array.isArray(record.importantNote) ? (
            <ul className='list-disc list-inside text-lg'>
              {record.importantNote.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          ) : (
            <p className='text-lg'>{record.importantNote}</p>
          )}
          <div className='h-[0.2px] w-[50vw] translate-y-2 bg-[rgb(255,211,25)]'></div>
        </div>

        <div className='flex flex-col gap-2'>
          <Link href='https://magicui.design/'>
            <button className='event px-8 py-2 text-xl'
            >Register now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;