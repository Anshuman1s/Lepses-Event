import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="p-[0.1px] sticky top-0 z-50">
      <div className="w-[80%] h-[5vw] flex bg-black/20 backdrop-blur-md text-black ml-[10%] rounded-2xl mt-5">
        <div className="w-[20vw] h-[5vw] flex items-center">
          <h1 className="text-[2vw] ml-10 font-medium">Lepses Lpu</h1>
        </div>
        <div className="tags h-[5vw] w-[80vw] flex items-center justify-evenly">
          <Link className="text-xl font-medium text-blue-500 hover:underline">Home</Link>
          <Link className="text-xl font-medium hover:underline">Event</Link>
          <Link className="text-xl font-medium hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
