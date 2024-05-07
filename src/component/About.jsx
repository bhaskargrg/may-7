import LocomotiveScroll from 'locomotive-scroll';
import React from 'react'

function About() {

  return (
    <div  className="w-full bg-[#CDEA68] py-20 px-20 rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue Montreal"] text-[3.2vw] leading-[3.1vw] -tracking-[.1vw] w-[81%]'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, <br /> ex­plain com­plex ideas, and hire
        great peo­ple.
      </h1>
      <div className="w-full border-t-[1px] mt-20 pt-10  border-[#8ca340] flex justify-between items-start">
        <div className=" w-1/2 ">
          <h1 className="text-6xl ">Our Approach:</h1>
          <button className="px-7 py-5 mt-10 bg-zinc-700 text-white rounded-full flex items-center gap-4 uppercase">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#8ca340] rounded-[20px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About