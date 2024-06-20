import Link from 'next/link';
import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { Register } from './Register';

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center text-white px-20">
          <div className='flex justify-center items-center gap-6'>
            <Link href="https://discord.com/channels/@me">
              <FaDiscord className='size-6 hover:scale-110 transition-all' />
            </Link>
            <Link href="https://discord.com/channels/@me">
              <FaInstagram className='size-6 hover:scale-110 transition-all' />
            </Link>
            <Link href="https://discord.com/channels/@me">
              <FaTwitter className='size-6 hover:scale-110 transition-all' />
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