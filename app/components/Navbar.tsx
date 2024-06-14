import Link from 'next/link';
import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center pt-6 text-white px-20">
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
            <button className='register px-4 py-2 text-sm '> REGISTER NOW
            </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar