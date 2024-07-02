import React from 'react'

const Venue = () => {
  return (
    <div>
        <div className=' w-full flex justify-center gap-12 items-center h-[70vh] bg-black ml-8 pt-[700px] md:ml-0 md:pt-0'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5619631842947!2d77.11589247544578!3d28.73263407952794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013938e13ba5%3A0xbacd4c8f320fa4ff!2sSHAHEED%20SUKHDEV%20COLLEGE%20OF%20BUSINESS%20STUDIES!5e0!3m2!1sen!2sin!4v1718951916914!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} loading="lazy" className='w-96 rounded-xl'></iframe>
        <div className=' flex flex-col'>
          <h1 className='text-6xl font-bold text-center text-zinc-200 -translate-y-20'>Venue</h1>
          <div className='-translate-y-[85px] flex items-center flex-col'>
            <div className='w-36 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-36 h-2 bg-pink-600 rounded-full -rotate-2'></div>
          </div>
          <p className='text-left text-2xl text-wrap text-zinc-200'>4th Floor</p>
          <p className='text-left text-2xl text-wrap text-zinc-200'>Shaheed Sukhdev College of Business Studies</p>
          <p className='text-left text-2xl text-wrap text-zinc-200'>Rohini, Delhi</p>
        </div>
      </div>
    </div>
  )
}

export default Venue