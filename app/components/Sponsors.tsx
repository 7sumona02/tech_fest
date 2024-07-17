import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <section className='h-screen w-full' id='sponsors'>
        <div className='flex justify-center items-center md:translate-y-64 translate-y-[800px]'>
            <div className="card1 min-h-[40vh] w-[60vw] flex flex-col justify-center px-16 py-10 text-2xl font-semibold font-sans">
                <div className='flex flex-col gap-2'>
                    <h1 className='md:text-6xl text-4xl text-pink-600'>Brought to you by: </h1>
                    <h1 className='md:text-2xl text-xl font-extrabold pt-2'>Association for Computing Machinery  (ACM)</h1>
                    
                    <h1 className='text-2xl'>Shaheed Sukhdev College of Business Studie</h1>
                </div>
                <div className='flex md:flex-row flex-col items-center gap-10 pt-20'>
                    <div className='flex flex-col md:gap-4 gap-2 justify-center items-center'>
                        <Image
                            src=""
                            width={200}
                            height={200}
                            alt="logo"
                        />
                        <p className=' md:text-2xl text-xl font-semibold'></p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                    <Image
                            src=""
                            width={40}
                            height={40}
                            alt="logo" className='invert'
                        />
                        <p className=' md:text-2xl text-xl  font-semibold'></p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                    <Image
                            src="/"
                            width={40}
                            height={40}
                            alt="logo" className='invert'
                        />
                        <p className='md:text-2xl text-xl  font-semibold'></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sponsors