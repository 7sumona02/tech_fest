'use client'

import Home from './components/Home'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Domains from './components/Domains'
import Themes from './components/Themes'

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Sponsors />
      <Domains />
      <Themes />
    </div>
  )
}

export default page