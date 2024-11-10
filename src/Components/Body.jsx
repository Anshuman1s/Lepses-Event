import React from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';

const Body = () => {
  // Animation variants for heading and paragraph coming from the left
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },  // Starts 50px to the left
    visible: { opacity: 1, x: 0 },   // Ends at the normal position
  };

  return (
    <div className="flex w-full h-[100%] mt-5">
      <div className="w-[50%] h-[80%]">
        {/* Animated Heading */}
        <motion.h1
          className="text-[2.5vw] mt-20 ml-40 font-medium"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={slideInFromLeft}
        >
          Igniting Innovation, <br /> Inspiring Change
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-xl mt-10 w-[40vw] ml-20 font-medium"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          variants={slideInFromLeft}
        >
          Join us at <span className="text-orange-500 font-medium">Lepses LPU</span> to ignite your passion and connect with visionary minds.
          Dive into innovation, learning, and opportunities to <span className="text-blue-500 font-medium">showcase your talent</span>.
          Collaborate, create, and challenge yourself in a community of future leaders.
          Be part of a legacy that celebrates creativity, growth, and transformative change.
        </motion.p>

        {/* Button with Navigation */}
        <motion.button
          onClick={() => Navigate("/Event")}
          className="bg-blue-400 m-3 p-3 rounded-xl duration-500 ml-[17vw] mt-10 font-bold text-xl hover:bg-black hover:text-white "
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          variants={slideInFromLeft}
        >
          Explore More
        </motion.button>
      </div>

      {/* Image Section */}
      <div className="w-[50%] h-[80%]">
        <img
          className="w-[45vw] mt-10 rounded-xl jump"
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Body;
