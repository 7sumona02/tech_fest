import React from 'react'

const EventTimeline = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center pt-[900px] md:pt-0'>
        <div>
            <h1 className='text-6xl font-bold text-center text-zinc-200'>Timeline</h1>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-72 h-2 bg-violet-600 rounded-full -rotate-2'></div>
                <div className='w-72 h-2 bg-pink-600 rounded-full -rotate-2'></div>
            </div>
        </div>
        <div className='translate-y-20 font-sans'>
        <ul className="timeline timeline-vertical">
  <li>
    <div className="timeline-start text-white max-w-[14vw] text-xl md:max-w-xl">10:00AM - 11:30AM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent md:text-2xl font-bold border-none text-white max-w-[20vw] text-xl">DSA Competition / Blind Code</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white max-w-[14vw] text-xl md:max-w-xl">11:30AM - 1:00PM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent md:text-2xl font-bold border-none text-white max-w-[20vw] text-xl">Web Dev Comp / React Competition</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white max-w-[14vw] text-xl md:max-w-xl">1:00PM - 2:00PM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent md:text-2xl font-bold border-none text-white max-w-[20vw] text-xl">Tech Charades / Tech Quiz / Debug-a-thon / Design Jam</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white max-w-[14vw] text-xl md:max-w-xl">2:00PM - 3:00PM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent md:text-2xl font-bold border-none text-white max-w-[20vw] text-xl">Mystery Function / Guess The Prompt</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-start text-white max-w-[14vw] text-xl md:max-w-xl">3:00PM - 5:00PM</div>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent md:text-2xl font-bold border-none text-white max-w-[20vw] text-xl">Treasure Hunt</div>
  </li>
</ul>
        </div>
    </div>
  )
}

export default EventTimeline