import React from 'react'

const Domains = () => {
  return (
    <div className='domainbg bg-black h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-center text-zinc-200 -translate-y-44'>Domains</h1>
        <div className='-translate-y-[180px]'>
            <div className='w-44 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-44 h-2 bg-pink-600 rounded-full -rotate-2'></div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-2 gap-10'>
                <div className="domains w-[20vw] h-[15vh] text-white flex justify-center items-center px-10 py-10">
                <div className="header">
                </div>
                <p className="heading text-4xl text-center">AR/VR</p>
                </div>
                <div className="domains w-[20vw] h-[15vh] text-white flex justify-center items-center px-10 py-10">
                <div className="header">
                </div>
                <p className="heading text-4xl text-center">Web3</p>
                </div>
                <div className="domains w-[20vw] h-[15vh] text-white flex justify-center items-center px-10 py-10">
                <div className="header">
                </div>
                <p className="heading text-4xl text-center">AI/ML</p>
                </div>
                <div className="domains w-[20vw] h-[15vh] text-white flex justify-center items-center px-10 py-10">
                <div className="header">
                </div>
                <p className="heading text-4xl text-center">Gaming</p>
                </div>
            </div>
            
            {/* <div className="domains w-[20vw] h-[15vh] text-white flex justify-center items-center px-10 py-10">
                <div className="header">
                </div>
                <p className="heading text-4xl text-center">AR/VR</p>
            </div>

            <div className="domains w-[20vw] h-[15vh] text-white flex justify-center items-center px-10 py-10">
                <div className="header">
                </div>
                <p className="heading text-4xl text-center">Web3</p>
            </div> */}
        </div>
    </div>
  )
}

export default Domains