import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Event from './Components/Event'
import Home from './Components/Home'
import Register from './Components/Register'



const App = () => {
  return (
    <div className=''>
     
      <Routes>
      {/* <Route path="/navbar" element={<Navbar />}/>
      <Route path="/body" element={<Body />}/>
      <Route path="/eventPart" element={<EventPart />}/>
      <Route path="/footer" element={<Footer />}/> */}
      <Route path = '/' element={<Home/>}/>

      
      <Route path="/event" element={<Event/>}/>
      <Route path ="/register" element={<Register/>}/>
      </Routes>
      
      
        
      
    </div>
  )
}

export default App

