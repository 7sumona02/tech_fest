
import Home from './components/Home'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Domains from './components/Domains'
import Themes from './components/Themes'
import TimeLine from './components/TimeLine'
import Prize from './components/Prize'
import Faq from './components/Faq'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import Map from './components/Map';
import Footer from './components/Footer';
import EventTimeline from './components/EventTimeline'
import Link from 'next/link'


interface MapProps {
  center: [number, number];
  zoom: number;
  scrollWheelZoom: boolean;
}

const page = () => {
  return (
    <div className='landing'>
      <Home />
      <About />
      <Sponsors />
      <Domains />
      <Themes />
      <Prize />
      <TimeLine />
      <Map center={[28.644800, 77.216721]} zoom={13} scrollWheelZoom={true} />
      <EventTimeline />
      <Faq />
      <Link href='#home'>
        <Footer />
      </Link>
    </div>
  )
}


export default page