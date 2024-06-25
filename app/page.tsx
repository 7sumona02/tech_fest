
import Home from './components/Home'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Domains from './components/Domains'
import Themes from './components/Themes'
import TimeLine from './components/TimeLine'
import Prize from './components/Prize'
import Faq from './components/Faq'
import Footer from './components/Footer';
import EventTimeline from './components/EventTimeline'
import Link from 'next/link'
import { Grid } from './components/Grid'


interface MapProps {
  center: [number, number];
  zoom: number;
  scrollWheelZoom: boolean;
}

const page = () => {
  return (
    <div className='landing bg-black select-none'>
      <Home />
      <About />
      <Sponsors />
      <Domains />
      <Themes />
      <Prize />
      <TimeLine />
      <div className=' w-full flex justify-center gap-12 items-center h-[70vh] bg-black sm:ml-8 sm:pt-60'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5619631842947!2d77.11589247544578!3d28.73263407952794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013938e13ba5%3A0xbacd4c8f320fa4ff!2sSHAHEED%20SUKHDEV%20COLLEGE%20OF%20BUSINESS%20STUDIES!5e0!3m2!1sen!2sin!4v1718951916914!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} loading="lazy" className='w-96 rounded-xl'></iframe>
        <div className=' flex flex-col'>
          <h1 className='text-4xl font-bold text-center text-zinc-200 -translate-y-20'>Venue</h1>
          <div className='-translate-y-[85px] flex items-center flex-col'>
            <div className='w-36 h-2 bg-violet-600 rounded-full -rotate-2'></div>
            <div className='w-36 h-2 bg-pink-600 rounded-full -rotate-2'></div>
          </div>
          <p className='text-left text-xl text-wrap text-zinc-200'>Aakash Ganga, Auditorium</p>
          <p className='text-left text-xl text-wrap text-zinc-200'>Shaheed Sukhdev College of Business Studies</p>
          <p className='text-left text-xl text-wrap text-zinc-200'>Rohini, Delhi</p>
        </div>
      </div>
      <EventTimeline />
      <Faq />
      <div className='sm:-translate-x-10 md:translate-x-0'>
        <Link href='#home'>
          <Footer />
        </Link>
      </div>
    </div>
  )
}


export default page