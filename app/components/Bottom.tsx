import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Bottom = () => {
  return (
    <div className='pt-10'>
        <div className='border-y-4 border-indigo-600'></div>
        <div className='border-y-4 border-pink-600'></div>
        <div className='px-32 py-10'>
            <div className='flex md:flex-row flex-col items-center justify-between gap-10'>
                <div>
                    <h1 className='text-6xl text-purple-600 text-right'>TechFest <br />1.0</h1>
                </div>
                <div className='text-neutral-400 text-xl flex md:flex-row flex-col md:gap-40 gap-10'>
                    <div className='flex flex-col items-center'>
                        <a href="#" className='hover:text-white transition-all'>Terms & Conditions</a>
                        <a href="#about" className='hover:text-white transition-all'>About Us</a>
                        <Link href="/events" className='hover:text-white transition-all'>Event</Link>
                        <a href="#sponsors" className='hover:text-white transition-all'>Sponsors</a>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='hover:text-white transition-all'>ACM SSCBS</button>
                        <button className='hover:text-white transition-all'>Contact Us</button>
                        <Link href={"mailto:acm@sscbs.du.ac.in"} className='hover:text-white transition-all'>acm@sscbs.du.ac.in</Link>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='hover:text-white transition-all'>Get in touch</button>
                        <div className='flex justify-center items-center gap-6 pt-4'>
            <Link href="https://www.instagram.com/sscbsacm/"     className='text-white'>
              <Image src="/Instagram.svg" alt="Instagram" width={32} height={32} className='invert' />
            </Link>
            <Link href="https://www.linkedin.com/in/acm-sscbs/"     className='text-white'>
              <Image src="/Linkedin.svg" alt="Linkedin" width={32} height={32} className='invert' />
            </Link>
            <Link href="mailto:acm.sscbs@gmail.com" className='text-white'>
              <Image src="/Gmail.svg" alt="Linkedin" width={40} height={40} className='invert' />
            </Link>
          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bottom
