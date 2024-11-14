import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  // Animation variants for the text to drop from the top
  const dropFromTop = {
    hidden: { opacity: 0, y: -30 },  // Starts 30px above and invisible
    visible: { opacity: 1, y: 0 },   // Ends at normal position
  };

  return (
    <div className="p-[0.1px] sticky top-0 z-50">
      <div className="w-[80%] h-[5vw] flex bg-black/20 backdrop-blur-md text-black ml-[10%] rounded-sm mt-5">
        {/* Animated Logo Text */}
        <motion.div
          className="w-[20vw] h-[5vw] flex items-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          variants={dropFromTop}
        >
          <h1 className="text-[2vw] ml-10 font-medium">Lepses Lpu</h1>
        </motion.div>

        {/* Animated Navigation Links */}
        <div className="tags h-[5vw] w-[80vw] flex items-center justify-evenly">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            variants={dropFromTop}
          >
            <Link className="text-xl font-medium text-blue-500 ">Home</Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            variants={dropFromTop}
          >
            <Link to={"/event"} className="text-xl font-medium ">Event</Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            variants={dropFromTop}
          >
            <Link to={"/register"} className="text-xl font-medium ">Register</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
