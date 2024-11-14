import React from 'react'

const EventPart = () => {
    let Data  = [{
        img:"https://img.freepik.com/free-vector/oops-concept-illustration_114360-6428.jpg?t=st=1731220275~exp=1731223875~hmac=e8050eb5568838c7bb5c2e741cdc526d9041d47b5889be641e40476dc6d9d867&w=740",
        name:"Chess Elite",
    },
    
]
  return (
    <div className='w-[100%] h-[20vw] flex justify-evenly '>
      <div className="w-[15vw] h-[15vw] bg-zinc-200 mt-10 rounded-xl">
        <div className="w-[15vw] bg-gray-200 rounded-xl h-[8vw] overflow-hidden">
            <img className ="w-[8.5vw] ml-12" src="https://img.freepik.com/free-photo/king-chess-icon-isolated_53876-14845.jpg?t=st=1731220965~exp=1731224565~hmac=f5e784a97e602ffd4f72a8394d7dd2325a6de65c8feac6aaa79f0f805ccff1e7&w=740" alt="" />
        </div> 
        <div className="text font-semibold mt-5 ml-3">
        <h1>Event Name : Chess Elite</h1>
        
        </div>
        <div className="button">
        <button className='m-3 p-2 bg-blue-300 ml-[4.5vw] rounded'>Details</button>
        </div>
      </div>
      <div className="w-[15vw] h-[15vw] bg-zinc-200 mt-10 rounded-xl">
        <div className="w-[15vw]  bg-yellow-400 rounded-xl h-[8vw]">
            <img src="" alt="" />
        </div> 
        <div className="text font-semibold mt-5 ml-3">
        <h1>Event Name : Chess Elite</h1>
        
        </div>
        <div className="button">
        <button className='m-3 p-2 bg-blue-300 ml-[4.5vw] rounded'>Details</button>
        </div>
      </div>
      <div className="w-[15vw] h-[15vw] bg-red-100 mt-10">
        <div className="w-[15vw] bg-yellow-400 h-[8vw]">
            <img src="" alt="" />
        </div> 
        <div className="text font-semibold mt-5 ml-3">
        <h1>Event Name : Chess Elite</h1>
        
        </div>
        <div className="button">
        <button className='m-3 p-2 bg-blue-300 ml-[4.5vw] rounded'>Details</button>
        </div>
      </div>
      <div className="w-[15vw] h-[15vw] bg-red-100 mt-10">
        <div className="w-[15vw] bg-yellow-400 h-[8vw]">
            <img src="" alt="" />
        </div> 
        <div className="text font-semibold mt-5 ml-3">
        <h1>Event Name : Chess Elite</h1>
        
        </div>
        <div className="button">
        <button className='m-3 p-2 bg-blue-300 ml-[4.5vw] rounded'>Details</button>
        </div>
      </div>
    </div>
  )
}

export default EventPart
