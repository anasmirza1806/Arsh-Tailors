import React from 'react'
import Herosection from '../component/Herosection'
import Service from '../component/Service'
import Banner from '../component/Banner'
import About from '../component/About'
import Shop from '../component/Shop'

function Home() {
  return (
    <>
      <Herosection/>
      <Service/>
      <Banner/>
      <Shop/>
      <About/>
      
    </>
  )
}

export default Home
