import React from 'react'
import HeroSection from '../HeroSection' 
import Contact from '../Contact/Contact'
import Services from '../Services/Services'
import About from '../About/About'



function Home() {
  return (
   <>
   <HeroSection/>
   <Services/>
   <About/>
   <Contact/>
   </>
  )
}


export default Home