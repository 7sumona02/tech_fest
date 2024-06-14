import React from 'react'

const Prize = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col justify-center items-center pt-16'>
        <h1 className='text-4xl font-bold text-center text-zinc-200 -translate-y-20'>Prize Pool</h1>
        <div className='-translate-y-[80px]'>
            <div className='w-48 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-48 h-2 bg-pink-600 rounded-full -rotate-2'></div>
        </div>
        <div className='card min-h-[40vh] w-[30vw] px-10 py-6'>
            <h1 className='text-3xl font-bold text-pink-600'>70,000 INR Prize Pool</h1>
            <div className='pt-4 flex flex-col gap-4'>
                <div>
                    <h1 className='text-2xl font-bold text-yellow-500'>Grand Prize:</h1>
                    <div className='flex flex-col gap-2 pt-2 text-lg'>
                        <p className='font-medium '>Winners: <br /> 35,000 INR</p>
                        <p className='font-medium '>Winners: <br /> 35,000 INR</p>
                        <p className='font-medium '>Winners: <br /> 35,000 INR</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-yellow-500'>Track Prize:</h1>
                    <div className='flex flex-col gap-2 pt-2 text-lg'>
                        <p className='font-medium '>Winners: <br /> 35,000 INR</p>
                        <p className='font-medium '>Winners: <br /> 35,000 INR</p>
                        <p className='font-medium '>Winners: <br /> 35,000 INR</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prize