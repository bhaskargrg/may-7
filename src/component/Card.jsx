import React from 'react'

function Card() {
  return (
    <div className="w-full h-screen flex gap-5 bg-zinc-900 items-center px-20">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-lg flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 rounded-full px-5 py-1 border-2 border-[#30ac9e] text-[#4bc9bb]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-lg bg-[#295652]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 rounded-full px-5 py-1 border-2 border-[#30ac9e] text-[#4bc9bb] uppercase   ">
        rating 5.0 on cluth
          </button>
        </div>

        <div className="card relative w-1/2 h-full flex items-center justify-center rounded-lg bg-[#244742]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-8 bottom-10 rounded-full px-5 py-1 border-2 border-[#30ac9e] text-[#4bc9bb] uppercase">
            Business bootcamp alumuni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card