import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import EventCards from './EventCards'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full  bg-white-900 text-black'>
      <Navbar/>
      <Body/>
      <EventCards/>
      <Footer/>
    </div>
  )
}

export default Home
