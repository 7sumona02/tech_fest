import Link from 'next/link';
import React from 'react'
import { FaDiscord, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaTwitter } from "react-icons/fa";
import { Register } from './Register';
import Image from 'next/image';
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center text-white px-20">
          <div className='flex justify-center items-center gap-6'>
            <Link href="https://www.instagram.com/sscbsacm/"   target='__blank'    className='text-white'>
              <FaInstagram size={32} />
            </Link>
            <Link href="https://www.linkedin.com/in/acm-sscbs/" target='__blank'    className='text-white'>
              <FaLinkedin size={32} />
            </Link>
            <Link href="mailto:acm.sscbs@gmail.com" target='__blank'  className='text-white'>
             <IoMdMail size={36}/>
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