import { motion, useAnimation } from 'framer-motion';
import React from 'react'

function Fetaured() {
  const cards=[useAnimation(),useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"});
  }
  return (
    <div className="w-full py-20">
      <div className="w-full px-12 border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10  mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]   "
          >
            <div className="card w-full h-full  rounded-lg overflow-hidden">
              <h1 className="text-[#CDEA68] flex overflow-hidden absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-['Founders Grotesk X-Condensed']">
                {"FYDE".split("").map((e, i) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="inline-block"
                  >
                    {e}
                  </motion.span>
                ))}
              </h1>

              <div className="card w-full h-full bg-green-300 rounded-lg overflow-hidden ">
                <img
                  className="bg-cover bg-center w-full h-full"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh] bg-red-100 rounded-lg"
          >
            <motion.div className="card w-full h-full  rounded-lg overflow-hidden">
              <h1 className="text-[#CDEA68] absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-8xl flex overflow-hidden font-['Founders Grotesk X-Condensed']">
                {"VISE".split("").map((e, i) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="inline-block"
                  >
                    {e}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full object-center object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Fetaured