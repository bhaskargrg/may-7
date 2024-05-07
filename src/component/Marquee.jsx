import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div 
    data-scroll 
    data-scroll-section
    data-scroll-speed='.1'
    className="w-100 py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-200 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 13, // Duration provided with the correct unit (in seconds)
            repeat: Infinity, // Repeating the animation infinitely
          }}
          className='text-[14vw] font-bold leading-none font-["Founder Grotesk X-Condensed"] -mb-[1vw] npm pt-10'
        >
          OCHI WE ARE
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 13, // Duration provided with the correct unit (in seconds)
            repeat: Infinity, // Repeating the animation infinitely
          }}
          className='text-[14vw] font-bold leading-none font-["Founder Grotesk X-Condensed"] -mb-[1vw] npm pt-10'
        >
          OCHI WE ARE
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
