import React from 'react';
import { Navigate } from 'react-router-dom';


const Body = () => {
  return (
    <div className="flex w-full h-[100%] mt-5">
      <div className="w-[50%] h-[80%]">
        <h1 className="text-[2.5vw] mt-20 ml-40 font-medium">
          Igniting Innovation, <br /> Inspiring Change
        </h1>
        <p className="text-xl mt-10 w-[40vw] ml-20">
          Join us at <span className='text-orange-500 font-medium'>Lepses LPU</span> to ignite your passion and connect with visionary minds.
          Dive into innovation, learning, and opportunities to <span className='text-blue-500 font-medium'>showcase your talent</span>.
          Collaborate, create, and challenge yourself in a community of future leaders.
          Be part of a legacy that celebrates creativity, growth, and transformative change.
        </p>
        <button onClick={Navigate("/Event")} className='bg-blue-400 m-3 p-3 rounded-xl duration-500 ml-[17vw] mt-10 font-medium text-xl  hover:bg-black hover:text-white'>Explore More</button>
      </div>
      <div className="w-[50%] h-[80%]">
        <img
          className="w-[45vw] mt-10 rounded-xl jump" // Added the 'jump' class for the animation
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Body;
