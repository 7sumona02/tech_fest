import React from 'react'

const Prize = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center md:pt-16 pt-[700px]'>
        <h1 className='text-6xl font-bold text-center text-zinc-200 -translate-y-20'>Prize Pool</h1>
        <div className='-translate-y-[80px]'>
            <div className='w-72  h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-72  h-2 bg-pink-600 rounded-full -rotate-2'></div>
        </div>
        <div className='card md:min-h-[40vh] sm:w-[50vw] md:w-[30vw] px-10 py-6'>
            <h1 className='text-3xl font-bold text-pink-600'>All participants will receive participation certificates</h1>
            <div className='pt-4 flex flex-col gap-4'>
                <div>
                    <h1 className='text-2xl font-bold text-yellow-500'>1st Prize:</h1>
                    <div className='flex flex-col gap-2 pt-2 text-lg'>
                        <p className='font-medium '>Cash prize of Rs. 1,500 and a Certificate of Achievement</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-yellow-500'>2nd Prize:</h1>
                    <div className='flex flex-col gap-2 pt-2 text-lg'>
                        <p className='font-medium '>Cash prize of Rs. 1,000 and a Certificate of Achievement"</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-yellow-500'>3rd Prize:</h1>
                    <div className='flex flex-col gap-2 pt-2 text-lg'>
                        <p className='font-medium '>Cash prize of Rs. 500 and a <br /> Certificate of Achievement"</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prize