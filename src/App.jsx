import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import EventPart from './Components/EventPart'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <div className='w-full  bg-white-900 text-black'>
      
        <Navbar />
      <Body/>
      <EventPart/>
      <Footer/>
        
      
    </div>
  )
}

export default App

