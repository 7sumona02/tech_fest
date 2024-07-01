import Link from 'next/link';
import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { Register } from './Register';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center text-white px-20">
          <div className='flex justify-center items-center gap-6'>
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
          <div>
            <Link href='/events'>
              <Register />
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar