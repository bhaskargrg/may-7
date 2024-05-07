
import React from 'react'
import { motion } from "framer-motion";
import { TfiArrowTopRight } from "react-icons/tfi";
function Landing() {
  
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full h-screen bg-zinc-900 pt-1 "
    >
      <div className="flex  relative">
        <div className="textstructure mt-40 px-20">
          {["We create", "Eye-opening", " PRESENTATIONS"].map((e, i) => {
            return (
              <div className="masker">
                <div className="flex">
                  {i === 1 && (
                    <motion.div
                      initial={{ width: "0" }}
                      animate={{ width: "7.6vw" }}
                      transition={{ ease: [0.45, 0, 0.55, 1] }}
                      className="w-[7.6vw] h-[5vw] bg-red-500 relative top-[1.2vw] rounded-md overflow-hidden"
                    >
                      <img
                        className="w-full h-full object-cover object-center"
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1 className="uppercase font-['Founders Grotesk X-Condensed'] text-[7.6vw] leading-[6.5vw] -tracking-[.6vw] font-bold">
                    {e}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center  right absolute right-0 top-[33%] bg-red-500 h-[3.3vw] w-[10vw]">
          site of the day
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-32 flex items-center justify-between py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((e, i) => {
          return (
            <p className="text-md font-light tracking-tighter leading-none">
              {e}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-2 border-[1px] rounded-full border-zinc-500 text-md ">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-500">
            <TfiArrowTopRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing