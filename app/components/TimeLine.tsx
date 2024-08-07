import React from 'react'

const Timeline = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center md:pt-44 pt-[800px]'>
      <h1 className='text-6xl font-bold text-center text-zinc-200 -translate-y-20'>Important <br /> Dates</h1>
        <div className='-translate-y-[80px]'>
            <div className='w-80 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-80 h-2 bg-pink-600 rounded-full -rotate-2'></div>
        </div>
        <div className='card py-10 font-sans'>
        <ul className="timeline timeline-vertical -translate-x-24">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-pink-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent border-none text-xl text-white"><span className='font-bold'>July 5:</span> <br />Registration starts</div>
    <hr />
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent border-none text-xl text-white"><span className='font-bold'>August 28:</span> <br />Registration ends</div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end timeline-box bg-transparent border-none text-xl text-white"><span className='font-bold'>August 31:</span> <br />Event day!!!</div>
  </li>
</ul>
        </div>
    </div>
  )
}

export default Timeline