
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
import Venue from './components/Venue'


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
      <Themes />
      <Prize />
      <TimeLine />
      <Venue />
      <EventTimeline />
      <Faq />
      <div className='-translate-x-10 md:translate-x-0'>
        <Link href='#home'>
          <Footer />
        </Link>
      </div>
    </div>
  )
}


export default page