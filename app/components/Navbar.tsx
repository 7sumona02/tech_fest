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
            <Link href="https://discord.com/channels/@me"     className='text-white'>
              <Image src="/Instagram.svg" alt="Instagram" width={24} height={24} className='invert' />
            </Link>
            <Link href="https://discord.com/channels/@me"     className='text-white'>
              <Image src="/Linkedin.svg" alt="Linkedin" width={24} height={24} className='invert' />
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