import React from 'react'

const EventTimeline = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center  sm:pt-32 md:pt-0'>
        <div>
            <h1 className='text-4xl font-bold text-center text-zinc-200'>Timeline</h1>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-44 h-2 bg-violet-600 rounded-full -rotate-2'></div>
                <div className='w-44 h-2 bg-pink-600 rounded-full -rotate-2'></div>
            </div>
        </div>
        <div className='translate-y-20'>
        <ul className="timeline timeline-vertical">
  <li>
    <div className="timeline-start text-white">8:30 AM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent text-xl font-bold border-none text-white max-w-[20vw]">Check-In and Registration Starts</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white">8:30 AM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent text-xl font-bold border-none text-white max-w-[20vw]">iMac</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white">8:30 AM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent text-xl font-bold border-none text-white max-w-[20vw]">iPod</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white">8:30 AM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent text-xl font-bold border-none text-white max-w-[20vw]">iPhone</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white">8:30 AM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent text-xl font-bold border-none text-white max-w-[20vw]">Apple Watch</div>
  </li>
</ul>
        </div>
    </div>
  )
}

export default EventTimeline