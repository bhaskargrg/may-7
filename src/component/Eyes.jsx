
import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove",(e)=>{
      let mouseX=e.clientX;
      let mouseY=e.clientY;
      let deltaX=mouseX-window.innerWidth/2;//it shows the difference from the midpoint to the mouse 
      let deltaY=mouseY-window.innerHeight/2;
      let angle=Math.atan2(deltaY,deltaX)*180/Math.PI;//athan2 give vlaues in radians so we need to convert into degree so we multiply by 57.29 deg.
      setRotate(angle-180);
    })
  }, [])
  
  return (
    // data-scroll data-scroll-speed="-.7"
    <div className="overflow-auto eyes w-full h-screen over-hidden">
      <div
        data-scroll
        data-scroll-speed="-.6"
        className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
      >
        <div className="flex gap-10 justify-between absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-full"
              >
                <div className="w-10 h-10  rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw]  flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-full"
              >
                <div className="w-10 h-10  rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes